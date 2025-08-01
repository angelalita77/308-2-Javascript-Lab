
//-------------------- Part 1 ----------------------
console.log("Part 1");
// The area in which the plants are contained is circular, with a radius of 5 meters.
let radius = 5;
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
const maxCapcity = PI * radius * radius;
console.log(`Max Capacity is ${maxCapcity}`);

// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
let plants = 20;
let week = 2;

// The plants double in number every week.
// week0:
// growth = 16m^2  => [plants * 2^0] * .8
// week1:
// growth = 32m^2 => [plants * 2^1] * .8
// week2:
// growth = 64m^2 => [plants * 2^2] * .8
// week3:
// growth = 128m^2 => [plants * 2^3] * .8

growth = (plants *(2**week) ) * .8
// console.log(growth);

percentageCapacity = (growth/maxCapcity) * 100;
// console.log(percentageCapacity);



// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:


// PRUNED, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
if (percentageCapacity > 80) {
    console.log(`Growth capacity is ${percentageCapacity}%: PRUNED`);
// MONITORED, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
} else if ((percentageCapacity > 50) && (percentageCapacity < 80)) {
    console.log("MONITORED")
} else
// PLANETED, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.
    console.log("PLANTED")



//---------------- Part 2 -----------------------
console.log("Part 2")
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?
let incomingPlants = 100;
let newWeek = 10;
let newGrowth = (incomingPlants *(2**newWeek) ) * .8;
console.log(`${incomingPlants} plants will grow to ${newGrowth} square meters in ${newWeek} weeks`);





// --------------- Part 3 ------------------------
console.log("Part 3")
// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.

percentageCapacity = (newGrowth/maxCapcity) * 100;
// console.log(percentageCapacity)

try {
	if (percentageCapacity < 50) {
		console.log("PLANTED");
	} else if ((percentageCapacity > 50) && (percentageCapacity < 80)) {
		console.log("MONITORED");
	} else {
        throw "PRUNED"
    }
} catch (error) {
	console.log(error);
}

