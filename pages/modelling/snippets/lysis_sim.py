import numpy as np, raster_geometry as rg
from parameters import *

a = 25
dims = (4*a, 3*a, 3*a)
length_x = h_cyl * 1.5 # length of X side

scale =  length_x / dims[0] # dx

mid = np.array([int(dims[0]/2), int(dims[1]/2), int(dims[2]/2)])

def pixels(length):
    return int(length / scale)
    # Converts continuous length to counterpart scale in pixels



initial = np.ones(dims) * room_temp # inital Temp

alpha = np.ones(dims) * alpha_air


cyl_bool = rg.cylinder(dims, pixels(h_cyl), pixels(r_water + thickness_cyl), axis = 0)
water_bool = rg.cylinder(dims, pixels(h_water), pixels(r_water), axis = 0)
wire_bool = rg.cylinder(dims, pixels(h_wire), pixels(r_wire), axis = 1)

alpha[cyl_bool] = alpha_cyl
alpha[water_bool] = alpha_water
alpha[wire_bool] = alpha_wire






J = voltage**2 / mass_resistor / heat_capacity_resistor / ref_resistance

def Wire_tick(self):
    arr = self.state - ref_temp
    arr = np.multiply(arr, self.diffusivity)

    arr += 1

    return J * np.reciprocal(arr)

# Define wire override tick





import simulation as sim

Model = sim.ThermalModel(initial, alpha, scale, 'void', -1, room_temp)

Model.voxel_tick_override(wire_bool, Wire_tick)

frames, times = Model.simulate_to(30, log = True)

# Simulate evolution of temperature


np.savez('simulation data', frames = frames, times = times)
# Save the data!
