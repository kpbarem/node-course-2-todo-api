const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((doc) => {
    console.log(doc);
  });

  // db.collection('Users').deleteMany({name: 'Kevin'});

  db.collection('Users').findOneAndDelete({_id: new ObjectID('59c1e12d5ce4cd1774b54e55')})
    .then((results) => {
      console.log(JSON.stringify(results, undefined, 2));
    })

  // db.close();
});
