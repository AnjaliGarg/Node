/**
 * Created by anjali on 18/6/17.
 */

// MODULES

greet = require("./greet1");
greet();

var greet2 = require("./greet2");
greet2.greet();

// or it can be done this way too
var greet2Other = require("./greet2").greet;
greet2Other();


var greet3  = require("./greet3");
greet3.greet();
greet3.greeting = "Changed Hello World"

var greet3b  = require("./greet3");
// Here we would expect it to return Hello World!!! only but the new Changed hello world is returned
// As the libraries once required are cached and here the same objects gets used and new one does not get created
greet3b.greet();

// In this only functions gets retunred and object gets created outisde; so old string gets printed.
var greet4 = require("./greet4");
var grtr = new greet4();
grtr.greet();

var greet5 = require("./greet5").greet;
greet5();
// EXPORTS vs ModuleExports


// Core Module: Requiring core libraries
var util = require("util");
var name = "Anjali";
var greeting = util.format("hello, %s", name);
// Util.log adds date to it
util.log(greeting);
console.log(greeting);












