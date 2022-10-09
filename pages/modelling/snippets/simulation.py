import matrices as mt
import numpy as np
import time as t



def find_dt(self) -> float:
    a_max = np.max(self.diffusivity)
    return self.delta_xyz**2 / a_max / np.ndim(self.initial_state) / 8

def find_stop(self) -> float:
    return np.max()


class ThermalModel:

    def reset_sim(self) -> None:
        #self.frames = np.empty((0,) + self.dims)
        self.frames = []
        # Creates array with time dim (1) and space dims

        #self.frame_times = np.empty((0,))
        self.frame_times = []
        # Creates array for times corresponding to frames

        self.state = np.copy(self.initial_state)
        # Makes a copy of the initial state

        self.time = 0.00
        # Resets simulation time

        self.cache_state()
        # Saves first frame



    def __init__(self, initial_state, thermal_diffusivity, delta_xyz, boundary_conditions = 'repeat', smallest_rate = -1, void_temp = 0) -> None:
        self.dims = np.shape(initial_state)
        self.initial_state = initial_state
        # Gives alias to static initial_state


        self.stop = smallest_rate

        
        self.void_temp = void_temp


        self.reset_sim()
        # Primes simulation

        self.diffusivity = np.copy(thermal_diffusivity)

        self.delta_xyz = delta_xyz

        self.boundary_conditions = boundary_conditions


        self.overrides = []



    def voxel_tick_override(self, overriden_voxels, appended_tick_differential) -> None:

        override = ( (overriden_voxels != 0) , appended_tick_differential)
        # Appended_tick should take args (self) and return an array of self.dims to be multiplied by dt
        self.overrides.append(override)
    




    def cache_state(self) -> None:
        #self.frames = np.concatenate((self.frames, np.expand_dims(self.state, axis = 0)), axis = 0)
        self.frames.append(self.state)

        self.frame_times.append(self.time)


    def tick(self, delta_time) -> bool:

        differential = mt.Laplacian(self.state, self.delta_xyz, self.boundary_conditions, self.void_temp)


        differential *= self.diffusivity

        for override in self.overrides:
            differential += override[0] * override[1](self)
        # Local Override equation iterations


        if np.max(differential) < self.stop:
            return False
        # Check if further iterations will result in visible change

        self.state += differential * delta_time
        # Global heat equation iteration


        self.time += delta_time
        # Advance time

        return True


    def simulate_to(self, time, cache_fps = None, dt = None, log = False):
        self.reset_sim()
        # Prime simulation

        if dt is None:
            dt = find_dt(self)
        # If no dt given, finds a suitable delta time

        ticks = int(time / dt)
        # Works out how many times to tick

        checks = int(ticks / 10)

        tic = t.time()

        if cache_fps:
            caches = int(1 / cache_fps / dt)
            for i in range(ticks):

                if log and i % checks == 0:
                    percent = round(i / ticks, 1) * 100
                    print(percent, "% : t = ", self.time)


                if i == 20:
                    elapsed = t.time() - tic
                    print("ETA in seconds: ", round(elapsed / 20 * (ticks - 20), 1))


                if not self.tick(dt):
                    print("Simulation converges, stopping further iteration")
                    self.cache_state()
                    break

                if i % caches == 0:
                    self.cache_state()

        else:

            for i in range(ticks):

                if log and i % checks == 0:
                    percent = round(i / ticks, 1) * 100
                    print(percent, "% : t = ", self.time)


                if i == 20:
                    elapsed = t.time() - tic
                    print("ETA in seconds: ", round(elapsed / 20 * (ticks - 20), 1))


                if not self.tick(dt):
                    print("Simulation converges, stopping further iteration")
                    self.cache_state()
                    break

                self.cache_state()


        return np.array(self.frames), np.array(self.frame_times)
        # Returns tuple of array of frames across time and the corresponding frame times

