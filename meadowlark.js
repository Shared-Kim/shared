const fortune = require('./lib/fortune')
const handlers = require('./lib/handlers')
const toursApi = require('./lib/toursApi.js')

const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const credentials = require('./development')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const morgan = require('morgan')
const fs = require('fs')

switch(app.get('env')){
    case 'dev':
        app.use(morgan('dev'))
        break
    case 'prod':
        const stream = fs.createWriteStream(__dirname + '/access.log', {
            flags: 'a'
        })
        app.use(morgan('combined', { stream }))
        break;
}

app.disable('x-powered-by')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser(credentials.cookieSecret))
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: credentials.cookeSecret
}))

app.use(express.static(__dirname + '/public'))

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}))

app.set('view engine','handlebars')

app.get('/', handlers.home)

app.get('/about', handlers.about)

app.get('/headers', (req, res) =>{
    res.type('text/plain')
    const headers = Object.entries(req.headers)
        .map(([key, value]) => `${key}: ${value}`)
    res.send(headers.join('\n'))
})

app.post('/process-contact', (req, res)=>{
    try{
        if(req.body.simulateError) throw new Error("error saving contact!")
        console.log(`received contact from ${req.body.name} <${req.body.email}>`)
        res.format({
            'text/html': () => res.redirect(303, '/thank-you'),
            'application/json': () => res.json({ sucess: true}),
        })
    }catch(err){
        console.error(`error processing contact from ${req.body.name} ` + `<${req.body.email}>`)
        res.format({
            'text/html': () => res.redirect(303, '/contact-error'),
            'application/json': () => res.status(500).json({
                error: 'error saving contact information'
            }),
        })
    }
})

app.get('/api/tours', toursApi.tours)

app.get('/newsletter-signup/', handlers.newsletterSignup)
app.post('/newsletter-signup/process', handlers.newsletterSignupProcess)
app.get('/newsletter-signup/thank-you', handlers.newsletterSignupThankYou)

app.get('/newsletter', handlers.newsletter)
app.post('/api/newsletter-signup', handlers.api.newsletterSignup)

//custeom 404 page
app.use(handlers.notFound)

app.use(handlers.serverError)

if( require.main === module){
    app.listen(port, () => console.log(
        `${app.get('env')} mode ` + `Express started on http://localhost:${port}; ` + 'press Ctrl-C to terminate.'
    ))
}else{
    module.exports = app
}

