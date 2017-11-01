const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Do laundry'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // only deletes first matching record
  // db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   // lastErrorObject: { n: 1 } can see number of documents deleted
  //   console.log(result);
  // });

  // remove duplicate user names
  // db.collection('Users').deleteMany({name: 'Maya'});

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID('59f92b01182cd70881df2a78')
  // }).then((results) => {
  //   console.log(JSON.stringify(results, undefined, 2))
  // });

  // db.close();
});
