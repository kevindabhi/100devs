const express = require('express');
const bodyParser= require('body-parser');
const app = express();





 
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://morpheus:thematrix@cluster0.wxu1i.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('100devsclasses')
    const quotesCollection = db.collection('classdetails')



    //CRUD
    app.use(bodyParser.urlencoded({ extended: true }))

    app.get('/', (req, res) => {
    res.sendFile('/home/kevin/Desktop/top/100devs/catchup-crew-api/index.html')})



app.post('/quotes', (req, res) => {
  quotesCollection.insertOne(req.body)
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))
})




    app.listen(3000, function() {
    console.log('listening on 3000')
  })


  })
  .catch(error => console.error(error))