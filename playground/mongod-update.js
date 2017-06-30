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

    // db.collection('Todos')
    //     .deleteMany({text: 'Eat Lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // db.collection('Todos')
    //     .deleteOne({text: 'Eat Lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // db.collection('Todos')
    //     .findOneAndDelete({completed: false})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // db.collection('Users')
    //     .deleteMany({name: 'Mike'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users')
        .findOneAndDelete({_id:new ObjectID('5956a8a61aac6d1160dbbf8c')})
        .then((result) => {
            console.log(result);
        });

    //db.close();
});