import peliculas from './peliculas.js'
const accion = document.querySelectorAll('.genero-container')[0];
const thriller = document.querySelectorAll('.genero-container')[1];
const aventura = document.querySelectorAll('.genero-container')[2];
//voy a hacer un bucle for, lo he intentado con un filter pero no soy capaz.

for (let i = 0; i < peliculas.length; i++) {
   if (peliculas[i].genre_ids === 28) {
    const titulo = peliculas[i].title
    
   }
}





/*
const accionDos = peliculas.filter((peliculas) => peliculas.genre_ids);
console.log(accionDos);

console.log(thriller);
console.log(aventura);*/