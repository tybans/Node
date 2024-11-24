const express = require('express')
const bodyParser = require('body-parser')


const app = express()

const users = []

// Global view engine setting in our app
app.set('view engine', 'pug')
// set my views to the views folder
app.set('views', 'views')


app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res, next) =>{
    
    res.render('index', {pageTitle: 'Add User'})
})


app.get('/users', (req, res, next) => {
    res.render('users', {pageTitle: 'User', users: users})
})


app.post('/add-user', (req, res, next) => {
    users.push({name: req.body.username})
    res.redirect('/users')
})



app.listen(4000, (req, res) => {
    console.log('serve running at 4000 port ');
    
})