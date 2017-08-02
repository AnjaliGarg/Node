/**
 * Created by anjali on 19/6/17.
 */

// module.exports and exports refer to the same object
// Here only objec of exports is assignedp so both have same value
// But in below example exports is mutated to a new function; hence turns in to a function
exports.greet = function () {
    console.log("hey ya!");
}

console.log(exports);
console.log(module.exports);
