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
    //     .find({_id: new ObjectID("595594b9eaf98524544b0df8")})
    //     .toArray()
    //     .then((docs)=> {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    // db.collection('Todos')
    //     .find()
    //     .count()
    //     .then((count)=> {
    //         console.log('Todos');
    //         console.log("Todos count : " + count);
    //     }, (err) => {
    //         console.log("Unable to fetch todos", err);
    //     });

    db.collection('Users')
        .find({name: 'Mike'})
        .count()
        .then((docs)=> {
            console.log('Mike');
            console.log("Number of Mikes: " + docs);
        }, (err) => {
            console.log("Unable to fetch todos", err);
        });

    //db.close();
});