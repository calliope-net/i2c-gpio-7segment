input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    leseKeypad()
})
function leseKeypad () {
    z = qwiickeypad.getButton(qwiickeypad.qwiickeypad_eADDR(qwiickeypad.eADDR.Keypad_x4B))
    if (bit.between(z, 48, 57)) {
        qwiicgpio.writeOUTPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x26), qwiicgpio.siebenSegment(z - 48, false))
    } else {
        qwiicgpio.writeOUTPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x26), 192)
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
    basic.showNumber(qwiickeypad.getButton(qwiickeypad.qwiickeypad_eADDR(qwiickeypad.eADDR.Keypad_x4B)))
})
let z = 0
qwiicgpio.setMode(
qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x26),
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
