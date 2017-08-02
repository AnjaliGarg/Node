var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Customers";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     db.createCollection("customers", function(err, res) {
//         if (err) throw err;
//         console.log("Table created!");
//         db.close();
//     });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var myobj = { name: "Company Inc", address: "Highway 37" };
//     db.collection("customers").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("1 record inserted");
//         db.close();
//     });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var myobj = [
//         { name: 'John', address: 'Highway 71'},
//         { name: 'Peter', address: 'Lowstreet 4'},
//         { name: 'Amy', address: 'Apple st 652'},
//         { name: 'Hannah', address: 'Mountain 21'},
//         { name: 'Michael', address: 'Valley 345'},
//         { name: 'Sandy', address: 'Ocean blvd 2'},
//         { name: 'Betty', address: 'Green Grass 1'},
//         { name: 'Richard', address: 'Sky st 331'},
//         { name: 'Susan', address: 'One way 98'},
//         { name: 'Vicky', address: 'Yellow Garden 2'},
//         { name: 'Ben', address: 'Park Lane 38'},
//         { name: 'William', address: 'Central st 954'},
//         { name: 'Chuck', address: 'Main Road 989'},
//         { name: 'Viola', address: 'Sideway 1633'}
//     ];
//     db.collection("customers").insert(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("Number of records inserted: " + res.insertedCount);
//         db.close();
//     });
// });


// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     db.collection("customers").findOne({}, function(err, result) {
//         if (err) throw err;
//         console.log(result.name);
//         db.close();
//     });
// });


// // Check the use of toArray here
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     db.collection("customers").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });

// Query
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var query = { address: "Park Lane 38" };
//     db.collection("customers").find(query).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });


// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var mysort = { name: 1 };
//     db.collection("customers").find().sort(mysort).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myquery = { address: 'Mountain 21' };
    db.collection("customers").remove(myquery, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
});
