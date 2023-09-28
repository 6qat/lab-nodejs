let empty_object = {};

let stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

let flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
}

let s = stooge["first-name"]

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {
        }

        F.prototype = o
        return new F()
    }
}
let o = Object;
let f = Function;
let another_stooge = Object.create(stooge);

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

stooge.profession = 'actor';
let profession = another_stooge.profession

let tof_number = typeof flight.number
let tof_airline = typeof flight.airline
let tof_arrival = typeof flight.arrival
let tof_manifest = typeof flight.manifest

let tof_toString = typeof flight.toString
let tof_constructor = typeof flight.constructor
//
let hasOwnNumber = flight.hasOwnProperty('number')
let hasOwnConstructor = flight.hasOwnProperty('constructor')
console.log(hasOwnNumber, hasOwnConstructor);
