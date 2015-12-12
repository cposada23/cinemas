var mongo = require('mongodb').MongoClient;
var url = 'mongodb://cineudea:1234@ds027335.mongolab.com:27335/cineudeadb'


var cinemas =  [{
    id: "ci-01",
    direccion: "Calle 38",
    nombre: "Bosque del plaza",
    municipio: "Medellin",
    cartelera: "c-01"
},{
    id: "ci-02",
    direccion: "Calle 33",
    nombre: "Monterrey",
    municipio: "Medellin",
    cartelera: "c-02"
},{
    id: "ci-03",
    direccion: "Calle 31",
    nombre: "Cines premium Plaza",
    municipio: "Medellin",
    cartelera: "c-03"
}];


//insercion
/*mongo.connect(url, function(err, db) {
  if (err) throw err
  var books = db.collection('cinema')
  books.insert(  cinemas,   function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(cinemas));
    db.close();
  });
}); 
*/



//Busqueda de todos los cinemas, selecciona solo el nombre y la cartelera del cinema
mongo.connect(url, function(err, db) {
      if (err) throw err
      var cinemas = db.collection('cinema');
      console.log("Buscando la coleccion...");
      cinemas.find({},{nombre:1, cartelera:1}).toArray(function(err, docs) {
        if (err) throw err;
        console.log(JSON.stringify(docs));
        console.log("cinemas"+ docs);
        db.close();
        
      });
    });
