/*-- operaciones con peliculas --*/

var mongo = require('mongodb').MongoClient; //coneccion a la base de datos 
var url = 'mongodb://cineudea:1234@ds027335.mongolab.com:27335/cineudeadb'// URL de la base de datos almacenada en mongolab.com

module.exports.consultar = function (req,res) {
    console.log("login...");
    var _documento = req.body.documento;
   
    console.log("obteniendo documento---" + _documento);
    
     mongo.connect(url, function(err, db) {
      if (err) throw err
      var usuarios = db.collection('usuario');
      console.log("Buscando la collection...");
      usuarios.find({
      
        documento: _documento
      },{
          documento:1,
          id:1
      }).toArray(function(err, docs) {
        if (err) throw err;
        
        var usuario = docs[0];
        console.log("Documento ---- existe  "+ JSON.stringify(usuario));
        if(usuario!=undefined){
            var log={
               existe:1,
               mensaje:"existe el documento"
            }
            
        }else{
            var log={
                existe:0,
                mensaje:"No existe el documento"
            }
            
        }
        db.close();
        res.json(log); 
      });
    });
}
;
