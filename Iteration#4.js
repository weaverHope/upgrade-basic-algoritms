// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

let avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

avengers[0] = "IRONMAN";

alert(avengers.length);
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty");
rickAndMortyCharacters.push("Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);
rickAndMortyCharacters.push("Lapiz Lopez");

rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);
rickAndMortyCharacters.push("Lapiz Lopez");


console.log(rickAndMortyCharacters);
rickAndMortyCharacters.splice(1, 1); //(1*, 1**) *index = 1 **n=1;
//Eliminar (**n) elementos a partir de (*index)
console.log(rickAndMortyCharacters);
