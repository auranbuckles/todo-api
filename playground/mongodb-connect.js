// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');
// let obj = new ObjectID();
// console.log(obj);

// ES6 destructuring
// let user = {name: 'Andrew', age: 25};
// let {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Deposit cheque',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     // so that we can see the error in the logs
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   // ops stores all the data that was inserted
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  // db.collection('Users').insertOne({
  //   name: 'Thomas',
  //   age: 23,
  //   location: 'Atlanta, GA'
  // }, (err, result) => {
  //   if (err) {
  //     // so that we can see the error in the logs
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   // ops stores all the data that was inserted
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
  // })

  db.close();
});
