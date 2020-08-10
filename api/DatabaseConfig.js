
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://webdevadmin:admin123@webgroup18.qguff.mongodb.net/BestBuy?retryWrites=true&w=majority"
const client = new MongoClient(uri);
client.connect(function (err){
    if (err) throw err;
    else console.log("connected");
});
module.exports = client;