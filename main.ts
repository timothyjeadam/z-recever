radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(4, 4)
    serial.writeValue("z", receivedNumber)
})
basic.showString("Z recever")
radio.setGroup(7)
serial.writeLine("acceleration")
basic.forever(function () {
	
})
