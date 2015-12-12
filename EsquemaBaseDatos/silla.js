var mongo = require('mongodb').MongoClient;
var url = 'mongodb://cineudea:1234@ds027335.mongolab.com:27335/cineudeadb'

var sillas= [{
    "fila": "j",
    "numero": 10,
    "sala": "sbp-01",
    "disponible": true,
    "localidad": "vip"
},{
    "fila": "j",
    "numero": 11,
    "sala": "sbp-01",
    "disponible": true,
    "localidad": "vibrosound"
},{
    "fila": "j",
    "numero": 12,
    "sala": "sbp-01",
    "disponible": true,
    "localidad": "general"
},{
    "fila": "j",
    "numero": 10,
    "sala": "sm-01",
    "disponible": true,
    "localidad": "vip"
},{
    "fila": "j",
    "numero": 11,
    "sala": "sm-01",
    "disponible": true,
    "localidad": "vibrosound"
},{
    "fila": "j",
    "numero": 12,
    "sala": "sm-01",
    "disponible": true,
    "localidad": "general"
},{
    "fila": "j",
    "numero": 10,
    "sala": "spr-01",
    "disponible": true,
    "localidad": "vip"
},{
    "fila": "j",
    "numero": 11,
    "sala": "spr-01",
    "disponible": true,
    "localidad": "vibrosound"
},{
    "fila": "j",
    "numero": 12,
    "sala": "spr-01",
    "disponible": true,
    "localidad": "general"
}];

mongo.connect(url, function(err, db) {
  if (err) throw err
  var sala = db.collection('silla')
  sala.insert(  sillas,   function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(data));
    db.close();
  });
}); 
