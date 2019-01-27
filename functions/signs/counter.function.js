// functions/income/counter.function.js

'use strict'

const functions = require('firebase-functions')
const admin = require('firebase-admin')

// Prevent firebase from initializing twice
try { admin.initializeApp(functions.config().firebase) } catch (e) {}

// My collection is called "incomes"
const incomeRef = functions.firestore.document('signs/{signId}')
// My counter is allocated in `/counters/incomes`, maybe you wanna follow this structure instead: https://firebase.google.com/docs/firestore/solutions/counters
const counterRef = functions.firestore.document('counters/signs')
// These references are not the same as Firestore DocumentReferences
// check https://firebase.google.com/docs/reference/functions/functions.firestore.DocumentBuilder

// Perform an increment when income is added
module.exports.incrementIncomesCounter = incomeRef.onCreate(event => {
  const counterRef = event.data.ref.firestore.doc('counters/signs')

  counterRef.get()
  .then(documentSnapshot => {
    const currentCount = documentSnapshot.exists ? documentSnapshot.data().count : 0

    counterRef.set({
      count: Number(currentCount) + 1
    })
    .then(() => {
      console.log('Incomers counter increased!')
    })
  })
})

// Perform an decrement when income is deleted
module.exports.decrementIncomesCounter = incomeRef.onDelete(event => {
  const counterRef = event.data.ref.firestore.doc('counters/signs')

  counterRef.get()
  .then(documentSnapshot => {
    const currentCount = documentSnapshot.exists ? documentSnapshot.data().count : 0

    counterRef.set({
      count: Number(currentCount) - 1
    })
    .then(() => {
      console.log('Incomers counter decreased!')
    })
  })
})

// Perform a fresh recount(this is expensive) when the counter is deleted (This is optional as well)
module.exports.recountIncomesCount = counterRef.onDelete(event => {
  const incomesRef = event.data.ref.firestore.collection('signs')

  return incomesRef.get()
    .then(querySnapshot => {
      counterRef.set({
        count: querySnapshot.docs.length
      })
    })
})