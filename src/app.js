const path = require('path')
const express = require('express');
const hbs = require('hbs')
const app = express()


//define path for express config
const staticDirPath = path.resolve('public')
const viewPath = path.resolve('resource/views')
const partialsPath = path.resolve('resource/partials')


//set
//arg one-> key
//arg two -> value

//setup handlebars engine
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//setup express directory
app.use(express.static(staticDirPath))

//routes express
app.get('/', (req, res) => {
    res.render('index', {
        title: "portfolio",
        name: "alisalarhosseini"
    })
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/weather', (req, res) => {
    res.render('weather')
})
app.get('/products',(req,res)=> {
    if(!req.query.address) {
        res.send({
            error : 'you must provide  a search here'
        })
    }
    console.log(req.query.address)
    res.send({
        products : []
    })
})
app.get('*',(req,res)=> {
    res.render('404')
})
//---------//
app.listen(3000, err => {
    console.log('server running on port 3000')
})
