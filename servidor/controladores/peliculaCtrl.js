/*-- operaciones con peliculas --*/

var mongo = require('mongodb').MongoClient; //coneccion a la base de datos 
var url = 'mongodb://cineudea:1234@ds027335.mongolab.com:27335/cineudeadb'// URL de la base de datos almacenada en mongolab.com

module.exports.obtenerPelicula = function (req,res) {
    var _id = req.body.id;
    console.log("obteniendo pelicula---");
    
     mongo.connect(url, function(err, db) {
      if (err) throw err
      var peliculas = db.collection('peliculas');
      console.log("Buscando la collection...");
      peliculas.find({
        id: _id
      }).toArray(function(err, docs) {
        if (err) throw err;
        
        var pelicula = docs[0];
        console.log("Pelicula ----  "+ JSON.stringify(pelicula));
        db.close();
        res.json(pelicula); 
      });
    });
    
};
