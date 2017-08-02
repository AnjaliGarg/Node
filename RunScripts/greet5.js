var greeting = "Hello World!!!";

function greet() {
    console.log(greeting);
}

// Module only gets reveiled and not other things; this is Revealing module pattern
// Revealing only the props and  ethods you want via a returned obj
module.exports = {
    greet:greet
}

