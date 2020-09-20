import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAVXtUTuYidBhs4G904keCQEccMTTSbSlo",
  authDomain: "myblog-166b7.firebaseapp.com",
  databaseURL: "https://myblog-166b7.firebaseio.com",
  projectId: "myblog-166b7",
  storageBucket: "myblog-166b7.appspot.com",
  messagingSenderId: "1007265647989",
  appId: "1:1007265647989:web:29e1993cc74db6192a173c"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };


// database.ref('blogs').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// // database.ref('blogs').on('child_removed', (snapshot) => {
// //   console.log(snapshot.key, snapshot.val());
// // })

// // database.ref('blogs').on('value', (snapshot) => {
// //   console.log(snapshot.val())
// // });

// // database.ref('blogs').once('value').then((snapshot) => {
// //   const blogs = [];
// //   snapshot.forEach((childSnapshot) => {
// //     blogs.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     })
// //   });
// //   console.log(blogs);
// // });

// // database.ref('blogs').push({
// //   title : 'my first blog',
// //   body: 'Today i am starting my first blog',
// //   createdAt: 322344234442
// // });

// // database.ref('blogs').push({
// //   title : 'another blog',
// //   body: 'This is just for testing purpose',
// //   createdAt: 8877773666223
// // });

// // database.ref('blogs').push({
// //   title : 'How to use Firebase',
// //   body: 'You can use firebase database with web/ App or any language.',
// //   createdAt: 97773666324778
// // });

// // database.ref().set({
// //   name: 'Rajeev'
// // });