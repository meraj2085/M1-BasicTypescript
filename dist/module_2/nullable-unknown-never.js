"use strict";
const searchName = (value) => {
    if (value === null) {
        console.log("No name found");
    }
    else {
        console.log("searching...");
    }
};
searchName(null);
const getMyCarSpeed = (speed) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`Your speed is ${convertedSpeed} m/s`);
    }
    if (typeof speed === "string") {
        const speedNumber = parseInt(speed, 10);
        const convertedSpeed = (speedNumber * 1000) / 3600;
        console.log(`Your speed is ${convertedSpeed} m/s`);
    }
};
getMyCarSpeed(10);
// getMyCarSpeed("10km/h")
function throwError(message) {
    throw new Error(message);
}
// throwError("Error is mortal");
