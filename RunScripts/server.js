var http = require('http')
var dt = require('./getData');
// var fs = require("fs");

var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());

    var a = 1;
    var b = 2;
    var c = a+b;

    console.log(c);
    // res.write("\n Here are the queries "+ req.url);

    // fs.readFile('test.html', function(err, data) {
    //     console.log("get the data anji "+ data);
    //     // // res.write("\n Data is " + data);
    //     // res.end(data);
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     // res.write(data);
    //     res.end(data);
    //
    // });
    res.end("Hi pooja");
});


server.listen("2000");
