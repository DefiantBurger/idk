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
let move = 0
let x = 0
basic.pause(500)
start()
basic.pause(100)
x = 2
let y = 4
let stlight = game.createSprite(2, 4)
basic.pause(1000)
let enemy1 = game.createSprite(2, 0)
let speed = 0
basic.forever(function () {
    stlight.set(LedSpriteProperty.X, x)
    stlight.set(LedSpriteProperty.Y, y)
    move += 1
    if (move == 50 - speed) {
        move = 0
        enemy1.change(LedSpriteProperty.Y, 1)
    }
    if (enemy1.get(LedSpriteProperty.X) == stlight.get(LedSpriteProperty.X) && enemy1.get(LedSpriteProperty.Y) == stlight.get(LedSpriteProperty.Y)) {
        game.pause()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (enemy1.get(LedSpriteProperty.Y) == 4) {
        basic.pause(500)
        enemy1.set(LedSpriteProperty.Y, 0)
        enemy1.set(LedSpriteProperty.X, randint(0, 4))
        if (speed <= 48) {
            speed += 1
        }
    }
})
