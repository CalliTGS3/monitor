input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    T = randint(10, 30)
    F = randint(20, 100)
    C = randint(800, 3000)
    G = randint(10, 800)
})
radio.onReceivedValue(function (name, value) {
    if (name == "T") {
        T = value
    } else if (name == "F") {
        F = value
    } else if (name == "C") {
        C = value
    } else if (name == "G") {
        G = value
    }
})
let G = 0
let C = 0
let F = 0
let T = 0
OLED12864_I2C.init(60)
radio.setGroup(1)
Qwiic_Openlog.openFile("DATEN3.TXT")
Qwiic_Openlog.writeLine("ZEIT;TEMPERATUR;LUFTFEUCHTE;CO2;GERUCH")
OLED12864_I2C.showString(
0,
0,
"Hello!",
1
)
basic.pause(1000)
OLED12864_I2C.clear()
basic.forever(function () {
    OLED12864_I2C.clear()
    Qwiic_Openlog.writeString("" + input.runningTime() / 1000 + ";")
    OLED12864_I2C.showString(
    0,
    0,
    "T:" + T,
    1
    )
    Qwiic_Openlog.writeString("" + T + ";")
    OLED12864_I2C.showString(
    0,
    1,
    "F:" + F,
    1
    )
    Qwiic_Openlog.writeString("" + F + ";")
    OLED12864_I2C.showString(
    0,
    2,
    "C:" + C,
    1
    )
    Qwiic_Openlog.writeString("" + C + ";")
    OLED12864_I2C.showString(
    0,
    3,
    "G:" + G,
    1
    )
    Qwiic_Openlog.writeString("" + G + ";")
})
