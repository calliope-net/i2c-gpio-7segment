input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    leseKeypad()
})
function leseKeypad () {
    z = qwiickeypad.getButton(qwiickeypad.qwiickeypad_eADDR(qwiickeypad.eADDR.KEY_x4B))
    if (bit.between(z, 48, 57)) {
        qwiicgpio.writeOUTPUT_PORT(i2cGPIO, qwiicgpio.siebenSegment(z - 48, false))
    } else {
        qwiicgpio.writeOUTPUT_PORT(i2cGPIO, 192)
    }
}
pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {
    basic.turnRgbLedOff()
})
pins.onPulsed(DigitalPin.P1, PulseValue.High, function () {
    basic.setLedColor(0x0000ff)
    leseKeypad()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(qwiickeypad.getButton(qwiickeypad.qwiickeypad_eADDR(qwiickeypad.eADDR.KEY_x4B)))
})
let z = 0
let i2cGPIO = 0
i2cGPIO = qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27)
qwiicgpio.setMode(
i2cGPIO,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT
)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
