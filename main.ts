let YSpeed = 0
let PlayerY = 0
basic.forever(function () {
    basic.clearScreen()
    if (input.buttonIsPressed(Button.A)) {
        YSpeed = -0.1
    } else {
        YSpeed = 0.1
    }
    PlayerY = Math.min(Math.max(PlayerY + YSpeed, 1), 4)
    led.plotBrightness(0, Math.floor(PlayerY), (Math.ceil(PlayerY) - PlayerY) * 225)
    led.plotBrightness(0, Math.ceil(PlayerY), (PlayerY - Math.floor(PlayerY)) * 225)
})
