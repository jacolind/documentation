import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('TestBot', 'r1neazxo9w')

import numpy as np

size = 50
z = np.zeros((size, size)).tolist()
for r in range(1, size + 1):
    for c in range(1, size + 1):
        z[r-1][c-1] = np.sqrt(r*c/float(size**2))
data = Data([
    Heatmap(
        z=z,
        scl='Bluered'
    )
])
layout = Layout(
    title='Bluered'
)
fig = Figure(data=data, layout=layout)

plot_url = py.plot(fig, filename='Bluered-heatmap', auto_open=False)