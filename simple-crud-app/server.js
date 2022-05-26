
//Step 1 and step 2
const express = require('express');

//Step 6.1 body parser 
const bodyParser= require('body-parser')
const app = express();
// app.use(bodyParser.urlencoded({ extended: true })) //On step 9 have to move this down.

// app.listen(3000, function() {
//     console.log('listening on 3000')
//   })
const MongoClient = require('mongodb').MongoClient
app.set('view engine', 'ejs')


//step 3 CRUD READ

// app.get('/', (req, res) => {
//     res.send('Hello World')
//   })
 
  
//Step 4, remove step 3 and then serve files

// app.get('/', (req, res) => {
//     res.sendFile('/home/kevin/Desktop/top/100devs/simple-crud-app/index.html')
//   })
  
//Step 5. CRUD CREATE

// app.post('/quotes', (req, res) => {
//     console.log(req.body)
//   })
  


//step 7 connect mongodb client
// MongoClient.connect('mongodb+srv://morpheus:thematrix@cluster0.wxu1i.mongodb.net/?retryWrites=true&w=majority', (err, client) => { 
//  if (err) return console.error(err)
// console.log('Connected to Database')
//   })  



//Step 8 replace step 7 with promises instead of callbacks, now comes step 9 to put epress request handlers into mongoclient then call

  MongoClient.connect('find in other file', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')

    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    //express request handlers
    
    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(express.static('public'))
    

    //Routes

    app.get('/', (req, res) => {
        db.collection('quotes').find().toArray()
          .then(results => {
            res.render('index.ejs', { quotes: results })
          })
    .catch(error => console.error(error))
        
        
      })



    app.post('/quotes', (req, res) => {
        quotesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })

   
//update

app.put('/quotes', (req, res) => {
    quotesCollection.findOneAndUpdate(
      { name: 'Yoda' },
      {
        $set: {
          name: req.body.name,
          quote: req.body.quote
        }
      },
      {
        upsert: true
      }
    )
      .then(result => res.json('Success'))
      .catch(error => console.error(error))
  })


    
    app.listen(3000, function() {
        console.log('listening on 3000')
      })

      app.delete('/quotes', (req, res) => {
        quotesCollection.deleteOne(
          { name: req.body.name }
        )
          .then(result => {
            res.json(`Deleted Darth Vadar's quote`)
          })
          .catch(error => console.error(error))
      })
      
      
    
  })
  .catch(console.error)

