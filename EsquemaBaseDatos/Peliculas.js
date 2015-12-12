// intento de coneccion a mongolab
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://cineudea:1234@ds027335.mongolab.com:27335/cineudeadb'



var peliculas = [{
    
    id: "p-01",
    nombre: "rec",
    formato: "3D",
    lenguaje: "Ingles",
    genero: "Terror",
    trailer: "https://youtu.be/dgJ4xeDUhMk",
    imagen: "https://cineudea-cposada23.c9users.io/servidor/img/rec.jpg",
    pais: "España",
    director: "Director Rec",
    reparto: [{
        nombre: "Actor 1"
    },{
        nombre: "Actor2"
    }],
    censura: "R ",
    comentarios:[{
        texto: "Buena pelicula",
        fecha: new Date(),
        autor: "el marto",
        
    },{
        texto:"Malisima",
        fecha: new Date(),
        autor:"Autor"
    }]
    
},{
    
    id: "p-02",
    nombre: "Marte",
    formato: "3D",
    lenguaje: "Ingles",
    genero: "Acción",
    trailer: "https://youtu.be/dgJ4xeDUhMk",
    imagen: "https://cineudea-cposada23.c9users.io/servidor/img/marte.jpg",
    pais: "Estados Unidos",
    director: "Director MARTE",
    reparto: [{
        nombre: "Actor 1"
    },{
        nombre: "Actor2"
    }],
    censura: "R",
    comentarios:[{
        texto: "Buena pelicula",
        fecha: new Date(),
        autor: "el marto",
        
    },{
        texto:"Malisima",
        fecha: new Date(),
        autor:"Autor"
    }]
    
},{
    
    id: "p-03",
    nombre: "principito",
    formato: "3D",
    lenguaje: "Ingles",
    genero: "Aventura",
    trailer: "https://youtu.be/dgJ4xeDUhMk",
    imagen: "https://cineudea-cposada23.c9users.io/servidor/img/principito.jpg",
    pais: "Canada",
    director: "Director Pricipito",
    reparto: [{
        nombre: "Actor 1"
    },{
        nombre: "Actor2"
    }],
    censura: "R ",
    comentarios:[{
        texto: "Buena pelicula",
        fecha: new Date(),
        autor: "el marto",
        
    },{
        texto:"Malisima",
        fecha: new Date(),
        autor:"Autor"
    }]
    
},{
    
    id: "p-04",
    nombre: "sinsajo",
    formato: "3D",
    lenguaje: "Ingles",
    genero: "Accion",
    trailer: "https://youtu.be/dgJ4xeDUhMk",
    imagen: "https://cineudea-cposada23.c9users.io/servidor/img/sinsajo.jpg",
    pais: "USA",
    director: "Director sinsajo",
    reparto: [{
        nombre: "Actor 1"
    },{
        nombre: "Actor2"
    }],
    censura: "R ",
    comentarios:[{
        texto: "Buena pelicula",
        fecha: new Date(),
        autor: "el marto",
        
    },{
        texto:"Malisima",
        fecha: new Date(),
        autor:"Autor"
    }]
    
}];



mongo.connect(url, function(err, db) {
  if (err) throw err
  var books = db.collection('peliculas')
  books.insert(  peliculas,   function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(peliculas));
    db.close();
  });
}); 
