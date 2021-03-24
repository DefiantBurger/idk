def on_button_pressed_a():
    global x
    if x >= 1:
        x += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global x
    if x <= 3:
        x += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def start():
    basic.show_leds("""
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(50)
    basic.show_leds("""
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(50)
    basic.show_leds("""
        # # # . .
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(50)
    basic.show_leds("""
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        . . . . .
        """)
    basic.pause(50)
    basic.show_leds("""
        # # # # #
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        """)
    basic.pause(50)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # .
        # # # . .
        # # . . .
        """)
    basic.pause(50)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        # # # . .
        """)
    basic.pause(50)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        """)
    basic.pause(50)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
    basic.pause(100)
    for index in range(2):
        basic.clear_screen()
        basic.pause(150)
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        basic.pause(150)
    basic.clear_screen()
move = 0
x = 0
basic.pause(500)
start()
basic.pause(100)
x = 2
y = 4
stlight = game.create_sprite(2, 4)
basic.pause(1000)
enemy1 = game.create_sprite(2, 0)

def on_forever():
    global move
    move += 1
    if move == 20:
        move = 0
        enemy1.change(LedSpriteProperty.Y, 1)
    stlight.set(LedSpriteProperty.X, x)
    stlight.set(LedSpriteProperty.Y, y)
    if enemy1.get(LedSpriteProperty.X) == stlight.get(LedSpriteProperty.X) and enemy1.get(LedSpriteProperty.Y) == stlight.get(LedSpriteProperty.Y):
        game.pause()
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
    if enemy1.get(LedSpriteProperty.Y) == 4:
        basic.pause(500)
        enemy1.set(LedSpriteProperty.Y, 0)
        enemy1.set(LedSpriteProperty.X, randint(0, 4))
basic.forever(on_forever)
