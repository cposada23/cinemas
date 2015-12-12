/*municipio: {
    "id": string,
    "nombre": string
}

usuario: {
    "documento": Number,
    "tidoDoc": string,
    "Nombres": string,
    "apellidos": string,
    "correo": string,
    "contraseña": string,
    "telefono": string,
    "sexo": string,
    "municipio": string,
    "barrio": string,
    "direccion": string,
    "fechaNacimiento": { type: Date, default: Date.now },
    "celular": string,
    "generoPelicula":: string,
    "tipo": string,
    "puntos": Number,
    "reservas": [{
        "id": string,
        "qr": string,
        "estado": Boolean,
        "fecha": { "type": Date, "default": Date.now },
        "boletas": [{
            "id": string
        }]
    }]
}

boleta: {
    "id": string,
    "reserva": string,
    "qr": string,
    "reservada": Boolean,
    "silla": string,
    "funcion": string,
    "precioId": string
}

precio: {
    "id": string,
    "descripcion": string,
    "localidad": string,
    "formato": string,
    "precioDinero": Number,
    "precioPuntos": Number,
    "puntosGanados": Number
}

localidad: {    
    "id": string,
    "nombre": string   
}

formato: {
    "id": string,
    "nombre": string   
}

silla: {
    "fila": string,
    "numero": Number,
    "sala": string,
    "disponible": Boolean,
    "localidad": string
}

sala: {
    "id": string,
    "numero": Number,
    "cinema": string,
    "programacion": string,
    "Sillas": [{
        fila:String
        numero:String
        
    }]
}

cinema: {
    "id": string,
    "direccion": string,
    "nombre": string,
    "municipio": string,
    "cartelera": string
}

cartelera: {
    "id": string,
    "fechaInicio": { "type": Date, "default": Date.now },
    "fechaFin": { "type": Date, "default": Date.now },
    "peliculas":{
        "id": string,
        "nombre": string,
        "lenguaje": string,
        "imagen": string
    }
}

pelicula: {
    "id": string,
    "nombre": string,
    "formato": string,
    "lenguaje": string,
    "genero": string,
    "trailer": string,
    "imagen": string,
    "pais": string,
    "director": string,
    "reparto": [{
        "nombre": string
    }],
    "censura": string,
    "comentarios":[{
        "texto": string,
        "fecha": { type: Date, default: Date.now },
        "autor": string,
        
    }]
}

censura: {
    "id": string,
    "nombre": string
}

lenguaje: {
    "id": string,
    "nombre": string
}

genero: {
    "id": string,
    "nombre" string
}

programacion: {
    "id": string,
    "fechaInicio": { type: Date, default: Date.now },
    "fechaFin": { type: Date, default: Date.now },
    "sala": string,
    "funcion": [{
        "id": string,
        "fecha": { type: Date, default: Date.now },
        "nombrePelicula": string
    }]
}

funcion: {
    "id": string,
    "fecha": { type: Date, default: Date.now },
    "programacion": string,
    "pelicula": {
        "id": string,
        "nombre": string
    },
    "boletas": [{
        "id": string,
        "fila": Number,
        "numero": Number,
        "estado": Number
    }]
}

  date: { type: Date, default: Date.now },
  
  */