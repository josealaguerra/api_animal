const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')


const app = express()

app.set('port', process.env.PORT || 9000)

const dbOptions = {
    host:'localhost',
    port:3306,
    user:'farmacia',
    password:'jutiapa',
    database:'bd_farmacia_jutiapa'
}
// middleware ------------
app.use( myconn(mysql, dbOptions, 'single') )

app.get('/', (req, res)=> {
    res.send('Bienvenido a mi API Animal')
})

app.use('/api', routes)

app.listen(app.get('port'), ()=> {
    console.log('Servidor ejecutandose en puerto', app.get('port'))
})
