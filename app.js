const express = require('express');
const app = express();
const path = require ('path');
const PUERTO = 3000;
app.use(express.static('./public'));


app.get('/', function(req, res) { res.sendFile(path.join(__dirname, './views/home.html'))} )

app.get('/register', function(req, res) { res.sendFile(path.join(__dirname, './views/register.html'))} )

app.get('/login', function(req, res) { res.sendFile(path.join(__dirname, './views/login.html'))} )

app.listen(process.env.PUERTO || PUERTO, function(){
    console.log('Servidor Corriendo en el puerto 3000')
});



app.listen(PUERTO, () => console.log('Servidor corriendo'))