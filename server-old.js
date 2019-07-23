const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    //res.send('Hola Mundo');

    let salida = {
        nombre: 'test',
        edad: 31,
        url: req.url
    }
    res.send(salida);
});

app.get('/data', function(req, res) {
    res.send('Hola data');
});

app.listen(8080, () => {
    console.log('Escuchando el puerot 8080');
});