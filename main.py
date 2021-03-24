bright = 0
y = 0

def on_forever():
    global bright, y
    led.plot_brightness(0, y, bright)
    bright += 25
    y += 1
    if y > 4:
        y = 0
    if bright > 225:
        bright = 0
basic.forever(on_forever)
