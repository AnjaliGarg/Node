/**
 * Created by anjali on 20/6/17.
 */

// Here we are using system's events file
var Emitter = require("events");

// Require the config file
var config = require("./config");

// Or directly require the events part from the object
var eventsConfig = require("./config").events;

var emtr = new Emitter();

emtr.on("greet", function () {
    console.log("That's a Hello from the wonderland!")
});

emtr.on("greet", function () {
    console.log("Hello from adventure land");
});

// OR greet could be taken from the config file so that typos are minimum and change happens at one place too
emtr.on(config.events.GREET, function () {
    console.log("Hello from all Configs");
});

emtr.on(eventsConfig.GREET, function () {
    console.log("Hello from event specific config");
});

console.log("Hello People");

emtr.emit("greet");