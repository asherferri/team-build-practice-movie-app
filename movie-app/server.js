const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

//initializes app and setups dotenv
const app = express()
require('dotenv').config()

//setup middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))
app.use(cookieParser())
app.use(
    session({
        key: process.env.SECRET_KEY,
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
    })
)
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static('public'))

//port 3001
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Listening to Erased in the Purge by The Ritual Aura on port ${PORT}`)
})

//routes
app.get('/', (req, res) => {
    res.send('Hello Andrew, Damion, Ashr')
})
// //commented out routes for the meantime
const authRoutes = require('./routes/auth-routes')
app.use('/api/auth', authRoutes)
const movieRoutes = require('./routes/movie-routes')
app.use('/api/movies', movieRoutes)

//error handlers
app.use('*', (req, res) => {
    res.status(400).json({
        message: 'Neh Not found Not here',
    })
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        error: err,
        message: err.message,
    })
})