input.onButtonPressed(Button.A, function () {
    if (x >= 1) {
        x += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (x <= 3) {
        x += 1
    }
})
function start () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # . .
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # .
        # # # . .
        # # . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        # # # . .
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    for (let index = 0; index < 2; index++) {
        basic.clearScreen()
        basic.pause(150)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(150)
    }
    basic.clearScreen()
}
let x = 0
basic.pause(500)
start()
basic.pause(100)
x = 2
let y = 4
let stlight = game.createSprite(2, 4)
basic.pause(1000)
let enemy1 = game.createSprite(2, 0)
basic.forever(function () {
    stlight.set(LedSpriteProperty.X, x)
    stlight.set(LedSpriteProperty.Y, y)
    if (enemy1.get(LedSpriteProperty.Y) == stlight.get(LedSpriteProperty.Y) && enemy1.get(LedSpriteProperty.Y) == stlight.get(LedSpriteProperty.Y)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        game.pause()
    }
})
basic.forever(function () {
    basic.pause(1000)
    enemy1.change(LedSpriteProperty.Y, 1)
})
