let current_temperature = 0
// name:Magnus 
// date: 9/28/2020
// code: shows the current temperature after a 1s delay
//  
basic.forever(function () {
    current_temperature = input.temperature()
    basic.showNumber(current_temperature)
    basic.pause(1000)
    basic.clearScreen()
})
