/**
 * Created by anjali on 20/6/17.
 */


var Emitter = require("./emitter");

var emtr = new Emitter();

emtr.on("greet", function () {
    console.log("That's a Hello from the wonderland!")
});

emtr.on("greet", function () {
    console.log("Hello from adventure land");
});

console.log("Hello People");
// Like 2 click events bound on same element then both gets fired
emtr.emit("greet");