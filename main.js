// 1. Define a function named broadCast

function broadCast(anotherFunction){
    anotherFunction;
}

// 2. Define a function named announceRain that logs "Grab an umbrella. It's going to rain today." to console

function announceRain(){
    console.log("Grab an umbrella. It's going to rain today.")
}

// 3. Define a function named announceClear that logs "Grab your shades and sunscreen. It's going to be sunny and hot today."

function announceClear(){
    console.log("Grab your shades and sunscreen. It's going to be sunny and hot today.")
}

// 4. Define a function named weatherStation. 
// It should define a single parameter, whose value will be the day's humidity reading. 
// If the humidity is over 95, then the console should display the rainy weather message. 
// If it is below 95, then the sunny weather message should appear.

function weatherStation (humidity){

    if (humidity > 95){
        broadCast(announceRain())
    }

    else{
        broadCast(announceClear())
    }
}

//TEST OVER 95 SHOULD LOG RAIN MSG
weatherStation(100)

//TEST OVER 95 SHOULD LOG SUNNY MSG
weatherStation(70)