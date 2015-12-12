var mongo = require('mongodb').MongoClient;
var url = 'mongodb://cineudea:1234@ds027335.mongolab.com:27335/cineudeadb'


var carteleras=[{
    id: "c-01",
    fechaInicio: new Date(),
    fechaFin: new Date("2015, 12, 24"),
    peliculas:[{
        id: "p-01",
        nombre: "rec",
        lenguaje: "Ingles",
        imagen: "https://cineudea-cposada23.c9users.io/servidor/img/rec.jpg"
    },{
        id: "p-02",
        nombre: "Marte",
        lenguaje: "Ingles",
        imagen: "https://cineudea-cposada23.c9users.io/servidor/img/marte.jpg"
    },{
        id: "p-03",
        nombre: "Principito",
        lenguaje: "Ingles",
        imagen: "https://cineudea-cposada23.c9users.io/servidor/img/principito.jpg"
    }]
},{
    id: "c-02",
    fechaInicio: new Date(),
    fechaFin: new Date("2015, 12, 24"),
    peliculas:[{
        id: "p-04",
        nombre: "sinsajo",
        lenguaje: "Ingles",
        imagen: "https://cineudea-cposada23.c9users.io/servidor/img/sinsajo.jpg"
    },{
        id: "p-02",
        nombre: "Marte",
        lenguaje: "Ingles",
        imagen: "https://cineudea-cposada23.c9users.io/servidor/img/marte.jpg"
    },{
        id: "p-03",
        nombre: "Principito",
        lenguaje: "Ingles",
        imagen: "https://cineudea-cposada23.c9users.io/servidor/img/principito.jpg"
    }]
},{
    id: "c-03",
    fechaInicio: new Date(),
    fechaFin: new Date("2015, 12, 24"),
    peliculas:[{
        id: "p-01",
        nombre: "rec",
        lenguaje: "Ingles",
        imagen: "https://cineudea-cposada23.c9users.io/servidor/img/rec.jpg"
    },{
        id: "p-02",
        nombre: "Marte",
        lenguaje: "Ingles",
        imagen: "https://cineudea-cposada23.c9users.io/servidor/img/marte.jpg"
    },{
        id: "p-03",
        nombre: "Principito",
        lenguaje: "Ingles",
        imagen: "https://cineudea-cposada23.c9users.io/servidor/img/principito.jpg"
    },{
        id: "p-04",
        nombre: "sinsajo",
        lenguaje: "Ingles",
        imagen: "https://cineudea-cposada23.c9users.io/servidor/img/sinsajo.jpg"
    }]
}];

/*inersion de carteleras
mongo.connect(url, function(err, db) {
  if (err) throw err
  var books = db.collection('cartelera')
  books.insert(  carteleras,   function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(carteleras));
    db.close();
  });
}); 
*/

/*busqueda
mongo.connect(url, function(err, db) {
    if (err) throw err;
    var collection = db.collection('books');
    collection.find().toArray(function (err,docs) {
        if (err)throw err;
        console.log(docs);
        db.close();
    });
});

*/