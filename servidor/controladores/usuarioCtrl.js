/*-- operaciones con peliculas --*/

var mongo = require('mongodb').MongoClient; //coneccion a la base de datos 
var url = 'mongodb://cineudea:1234@ds027335.mongolab.com:27335/cineudeadb'// URL de la base de datos almacenada en mongolab.com

module.exports.login = function (req,res) {
    console.log("login...");
    var email = req.body.email;
    var _password = req.body.password;
    console.log("obteniendo Usuario---" + email + " " + _password);
    
     mongo.connect(url, function(err, db) {
      if (err) throw err
      var usuarios = db.collection('usuario');
      console.log("Buscando la collection...");
      usuarios.find({
        correo: email,
        password: _password
      },{
          nombres:1
      }).toArray(function(err, docs) {
        if (err) throw err;
        
        var usuario = docs[0];
        console.log("usuario ----  "+ JSON.stringify(usuario));
        if(usuario!=undefined){
            var log={
                auth: 1,
                nombre: usuario.nombres
            }
            
        }else{
            var log={
                auth:0,
                nombre:"Error"
            
            }
            
        }
        db.close();
        res.json(log); 
      });
    });
};
