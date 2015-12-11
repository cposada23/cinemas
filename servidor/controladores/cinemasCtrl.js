/*---- cinemasCtrl para operaciones CRUD --*/
var mongo = require('mongodb').MongoClient; //coneccion a la base de datos 
var url = 'mongodb://cineudea:1234@ds027335.mongolab.com:27335/cineudeadb'// URL de la base de datos almacenada en mongolab.com

module.exports.listarCinemas = function (req,res) {
    console.log("listando cinemas...");
  
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var cinemas = db.collection('cinema');
      console.log("Buscando la coleccion...");
      cinemas.find().toArray(function(err, docs) {
        if (err) throw err;
        console.log(JSON.stringify(docs));
        
        console.log("cinemas"+ docs);
        db.close();
        res.json(docs); 
      });
    });
  
  
};

