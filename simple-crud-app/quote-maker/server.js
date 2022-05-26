const express = require('express');
const app = express();

app.listen (3000, function() {
    console.log('Server listening on port 3000')
})


app.get('/', (req,res) => {
    res.sendFile('/home/kevin/Desktop/top/100devs/simple-crud-app/quote-maker/index.html')
})

app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!')
  })
  