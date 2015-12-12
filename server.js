/*-- Servidor en nodeJS para CineUdea -- */

/*--- DEPENDENCIAS ---*/
var express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path");

var app = express();

/*-- Controladores del servidor --*/
var ctrlCartelera = require('./servidor/controladores/ctrlCartelera'); //Para operaciones con la cartelera
var peliculaCtrl = require("./servidor/controladores/peliculaCtrl"); //Operaciones de insersión, edición de una nueva pelicula
var cineCtrl = require("./servidor/controladores/cinemasCtrl");
app.use(bodyParser.json());
/*-- Directorios Estaticos --*/
app.use('/cliente', express.static(__dirname + "/cliente")); 
app.use('/servidor', express.static(__dirname + "/servidor")); 


/*--- END POINTS --*/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'/cliente/index.html'));
});

app.post('/api/cartelera/listar',ctrlCartelera.listarCartelera); //Listo la cartelera 
app.get('/api/cines/listar', cineCtrl.listarCinemas); //Listar cines 
app.post('/api/pelicula/get', peliculaCtrl.obtenerPelicula);  //Obtener una pelicula con el id

/*-- Corro el servidor --*/

app.listen(process.env.PORT||3000, process.env.IP||"0.0.0.0",function function_name() {
  console.log("Servidor corriendo en el puerto: ", process.env.PORT);
});


