const {ObjectID} =require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');


Todo.remove({}).then((result) => {
   console.log(result);
});

//Todo.findOneAndRemove

//Todo.findByIdAndRemove

Todo.findByIdAndRemove('59579e15b9ecde7e9d22b1d2').then((todo) => {
    console.log(todo);
});