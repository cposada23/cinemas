
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://cineudea:1234@ds027335.mongolab.com:27335/cineudeadb'



var programaciones=[
    
 {
    id:  "pgsbp-01",
    fechaInicio: new Date("2015, 12, 24"),
    fechaFin: new Date("2015, 12, 31"),
    sala: "sbp-01",
    funcion: [{
        id: "f-01",
        fecha:new Date("2015, 12, 31"),
        nombrePelicula: "Sinsajo"
    },{
        id: "f-02",
        fecha:new Date("2015, 12, 31"),
        nombrePelicula: "Victor Frankenstein"
    }]
    
    
    
},   
 {
    id:  "pgpr-01",
    fechaInicio: new Date("2015, 12, 24"),
    fechaFin: new Date("2015, 12, 31"),
    sala: "spr-01",
    funcion: [{
        id: "f-01",
        fecha:new Date("2015, 12, 31"),
        nombrePelicula: "Sinsajo"
    },{
        id: "f-02",
        fecha:new Date("2015, 12, 31"),
        nombrePelicula: "Victor Frankenstein"
    }]
    
    
    
},   
 {
    id:  "pgsbp-01",
    fechaInicio: new Date("2015, 12, 24"),
    fechaFin: new Date("2015, 12, 31"),
    sala: "sbp-01",
    funcion: [{
        id: "f-01",
        fecha:new Date("2015, 12, 31"),
        nombrePelicula: "Sinsajo"
    },{
        id: "f-02",
        fecha:new Date("2015, 12, 31"),
        nombrePelicula: "Victor Frankenstein"
    }]
    
    
    
}];

mongo.connect(url, function(err, db) {
  if (err) throw err
  var sala = db.collection('programacion')
  sala.insert(  programaciones,   function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(data));
    db.close();
  });
}); 
