// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();

console.log(obj);

let user = {name: 'Mike', age: 30};
let {name} = user;

console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err){
        return console.log('Unable to connect to db');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Sopmething Somthing',
    //     completed: false
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //
    // });

    // db.collection('Users').insertOne({
    //     name: 'Mike',
    //     age: 30,
    //     location: 'Moncton'
    // },  (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert User', err);
    //     }
    //
    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    //
    // });

    db.close();
});