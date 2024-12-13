radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        radio.sendNumber(1)
    } else if (receivedNumber == 0) {
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(2000)
        radio.sendNumber(0)
    }
})
radio.setGroup(1)
pins.digitalWritePin(DigitalPin.P2, 1)
