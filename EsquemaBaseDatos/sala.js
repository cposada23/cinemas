var mongo = require('mongodb').MongoClient;
var url = 'mongodb://cineudea:1234@ds027335.mongolab.com:27335/cineudeadb'



var salas= [{
    id: "sbp-01",
    numero: 1,
    cinema: "ci-01",
    programacion: "pgsbp-01",
    Sillas: [{
        fila:"j",
        numero:10
    },
    {
        fila:"j",
        numero:11
    },
    {
        fila:"j",
        numero:12
    }]    
    
},
{
    id: "sm-01",
    numero: 1,
    cinema: "ci-02",
    programacion: "pgm-01",
    Sillas: [{
        fila:"j",
        numero:10
    },
    {
        fila:"j",
        numero:11
    },
    {
        fila:"j",
        numero:12
    }]    
    
},
{
    id: "spr-01",
    numero: 1,
    cinema: "ci-03",
    programacion: "pgpr-01",
    Sillas: [{
        fila:"j",
        numero:10
    },
    {
        fila:"j",
        numero:11
    },
    {
        fila:"j",
        numero:12
    }]    
    
}];


mongo.connect(url, function(err, db) {
  if (err) throw err
  var sala = db.collection('sala')
  sala.insert(  salas,   function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(data));
    db.close();
  });
}); 
