// ES6 destructuring
// var data = $('body').data(), // data has properties house and mouse
  // house = data.house,
  // mouse = data.mouse
// is same as
// var {house, mouse} = $('body').data() // we'll get house and mouse variables

// var jsonMiddleware = require('body-parser').json
// var body = req.body, // body has username and password
//   username = body.username,
//   password = body.password
// is same as
// var {json: jsonMiddleware} = require('body-parser')
// var {username, password} = req.body

// const MongoClient = require('mongodb').MongoClient;
// var obj = new ObjectID();
// is same as
const {MongoClient, ObjectID} = require('mongodb');

// ES6 destructuring
// let user = {name: 'Andrew', age: 25};
// let {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // .find() without arguments will fetch all data

  // toArray() will wrap all data in an array
  // toArray() is a promise so need to tack on .then()

  // _id is an object and not a string so cannot fetch by _id: '59f928a0a20bd40862b40966'
  // fetch _id by using the ObjectID constructor function imported above
  // .find({_id: new ObjectID('59f928a0a20bd40862b40966')})

  // .count() can pass in callback function but can also use promise to access it
  // collection.find().count(function(err, count) { ...do something })
  // is same as
  // collection.find().count().then((count) => { ...do something })

  db.collection('Users').find({name: 'Tina'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // .close() will not work with fetching syntax
  // db.close();
});
