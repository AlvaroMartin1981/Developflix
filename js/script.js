import peliculas from './peliculas.js'

const accionDiv = document.getElementById('genero-28');
const thrillerDiv = document.getElementById('genero-53');
const aventuraDiv = document.getElementById('genero-12');


//filtrado de peliculas
const peliculasFiltradas = peliculas.map((pelicula) => {
    return pelicula.genre_ids.filter(28)
    
});
console.log(peliculasFiltradas);


/*const accion = document.querySelectorAll('.genero-container')[0];
const thriller = document.querySelectorAll('.genero-container')[1];
const aventura = document.querySelectorAll('.genero-container')[2];
console.log(accion);*/


/*
const generoAccion = element => element.gener_ids =28;
const peliculasAccion = peliculas.filter(generoAccion);
console.log(peliculasAccion);
*/






/*const generoAccion = element => element.gener_ids =28;
const peliculasAccion = peliculas.some(generoAccion);
const accionDos = peliculas.filter(generoAccion)
console.log(peliculasAccion);
console.log(accionDos);*/



//const thriller = peliculas.filter((element) => element.genre_ids = 53);



/*for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].genre_ids === 28) {
        console.log(peliculas[i])
     const tituloAccion = peliculas[i].title
     console.log(tituloAccion);
        } else if (peliculas[i].genre_ids === 53) {
         const tituloThriller = peliculas[i].title
         console.log(tituloThriller);
        } else if (peliculas[i].genre_ids ===12) {
         const tituloAventura = peliculas[i].title
         console.log(tituloAventura);
        } 
    }
*/



/*const accionDos = peliculas.filter((peliculas) => peliculas.genre_ids === 28)
const thrillerDos = peliculas.filter((peliculas) => peliculas.genre_ids === 53);
const aventuraDos = peliculas.filter((peliculas) => peliculas.genre_ids === 12);
console.log(accionDos);
console.log(thrillerDos);
console.log(aventuraDos);*/