const express = require('express')
const app = express()
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const path = require('path')

app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('combined'));

app.engine('handlebars',engine())
app.set('view engine','handlebars')
app.set('views',path.join(__dirname,'resources/views'))

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/news',(req,res)=>{
    res.render('news')
})

app.listen(3000,()=>{
    console.log('App listenning on port 3000!')
})

