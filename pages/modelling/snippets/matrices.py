import numpy as np

def Laplacian(arr, delta, boundary_conditions = 'repeat', void_temp = None):
    axes = np.ndim(arr)


    s = - 2 * axes * arr

    for axis in range(axes):
        s += np.roll(arr, 1, axis) + np.roll(arr, -1, axis)
        # ARRAY shifted once forwards and backwards in each axis


    s *= 1/delta**2

    

    if boundary_conditions == 'void':
        s = np.pad(arr, 1, 'constant', constant_values = void_temp)
        return shave(Laplacian(s, delta), 1)

    elif boundary_conditions == 'repeat':
        return s

    elif boundary_conditions == 'frozen':
        return null_edges(s)


    elif boundary_conditions == 'xi':
        return s + np.random.normal(1e+5, 1e+3, np.shape(arr))

    elif boundary_conditions == 'adiabatic':
        arr = np.pad(arr, 1, 'edge')
        s = Laplacian(arr, delta)

        return shave(s, 1)

    else:
        return s


def shave(arr, number):
    n = np.ndim(arr)
    indices = [slice(number, -number) for _ in range(n)]

    return arr[tuple(indices)]


def null_edges(arr):
    shape = np.shape(arr)

    shape = tuple(i-2 for i in shape)
    id = np.ones(shape)
    mask = np.pad(id, 1, 'constant')
    # Boolean array of (pixel == edgepixel)

    return arr * mask
    # Array with zeros for edges

