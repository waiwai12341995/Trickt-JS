// this lecture
// 4 rules global object/implicit, explicit, new
// "this" alway be closed parent object

////////////////////////////////////Rule 1//
//Global//
//////////////////////////////////
console.log(this) // window
// window is browser object

function checking(){
    return this
}

checking()  // window
// "this" put into function is still window object


/////////////////////////////////
function varIsThe(){
    this.character = "ABC"
}

varIsThe()

///////////////////////////////////
var person = "Fish"
window.person === person //True

var data = {}
data.instuctor = "Mccashin"

data

//////////////////////////////////
var dog = "small"

function person(){
    var host = "fish"
}

host // error
dog //small

// Stict Mode Restrict us have mistake
//////////////////////////
"use strict"
function varIsThe(){
    this.character = "ABC"
}

varIsThe()

////////////////////////////
//Rule 2// (Implicit/ Obj)
// inside the object
////////////////////////////

var car = {
    price: 20000,
    turnEngine: function(){
        return "Go, Price = " + this.price
    },
    checking: function(){
        return this === car
    }
}

car.turnEngine() // "Go, Price = 20000"
car.checking() // true

// Nested Object

var car = {
    price: 20000,
    turnEngine: function(){
        return "Go, Price = " + this.price
    },
    checking: function(){
        return this === car
    },
    person: {
        turnRun: function(){
            return "The Answer is ... " + this.price
        },
        checkingSecond: function(){
            return this === car
        }
    }
}

// Closed parent object is car
// But del=clare object is person

car.person.turnRun() // "Undefined"
car.person.checkingSecond() // false

////////////////////////////
//Rule 3// (Call/ Apply/ Buy)
// Explicit Binding
// Choose what we want the context of "this" to be using call /apply /buy
////////////////////////////

//Call thisArg,a,b,c,d,... Yes
//Apply thisArg,[a,b,c,d,...] Yes
//Bind thisArg,a,b,c,d,... No

// Call
var car = {
    price: 20000,
    turnEngine: function(){
        return "Go, Price = " + this.price
    },
    checking: function(){
        return this === car
    },
    person: {
        turnRun: function(){
            return "The Answer is ... " + this.price
        },
        checkingSecond: function(){
            return this === car
        }
    }
 }

car.person.turnRun.call(car)
car.person.checkingSecond.call(car)

// Example we commonly use (Duplicate)
var person = {
    lastName: "Chan",
    sayHi: function(){
        return "Hi" + this.lastName
    }
}

var person = {
    lastName: "Lee",
    sayHi: function(){
        return "Hi" + this.lastName
    }
}

// Solution to solve
var fish = {
    lastName: "Chan",
    sayHi: function(){
        return "Hi " + this.lastName
    }
}

var yan = {
    lastName: "Lee"
}

fish.sayHi()
fish.sayHi.call(yan)




