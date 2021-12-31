//Exportando modulos
const express = require('express')
const app = express()
const path = require('path')

//Configuracion
app.set('port', 8080)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Rutas
app.use(require('./routes'))

//Estatic
app.use(express.static(path.join(__dirname, 'public'))) //Accede a archivos de todo el directorio


//Escuchando servidor
app.listen(app.get('port'), () =>{
    console.log('Server don port', app.get('port'))
})