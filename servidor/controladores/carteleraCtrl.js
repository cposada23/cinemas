/*---- carteleraCtrl para operaciones CRUD --*/
var mongo = require('mongodb').MongoClient; //coneccion a la base de datos 
var url = 'mongodb://cineudea:1234@ds027335.mongolab.com:27335/cineudeadb'// URL de la base de datos almacenada en mongolab.com

module.exports.listarCartelera = function (req,res) {
    var _id = req.body.id;
    console.log("litando cartelera...");
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var carteleras = db.collection('cartelera');
      console.log("Buscando la collection...");
      carteleras.find({
        id: _id
      }).toArray(function(err, docs) {
        if (err) throw err;
        console.log(JSON.stringify(docs[0]));
        var cartelera = docs[0];
        console.log("cartelera"+ cartelera);
        db.close();
        res.json(cartelera); 
      });
    });
};

