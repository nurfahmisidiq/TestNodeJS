const express = require('express')
const app = express();

app.get('/',function(req,res) {
    res.send('hello words')
})

app.listen('1010')