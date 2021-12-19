const fortune = require('./lib/fortune')
const handlers = require('./lib/handlers')

const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const expressHandlebars = require('express-handlebars');

app.use(express.static(__dirname + '/public'))

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}))

app.set('view engine','handlebars')

app.get('/', handlers.home)

app.get('/about', handlers.about)

//custeom 404 page
app.use(handlers.notFound)

app.use(handlers.serverError)

if( require.main === module){
    app.listen(port, () => console.log(
        'Express started on http://localhost:${port}; ' + 'press Ctrl-C to terminate.'
    ))
}else{
    module.exports = app
}

