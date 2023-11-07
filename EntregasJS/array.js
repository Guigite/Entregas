const hobbies = ['codar', 'tocar violão', 'jogar bola', 'jogar videogame'];

console.log("Meus hobbies", hobbies);

console.log(hobbies[0]);
console.log(hobbies[1]); 
console.log(hobbies[2]); 
console.log(hobbies[3]); 


hobbies[0] = 'estudar JavaScript'; 
console.log(hobbies); 


console.log(hobbies.length);


hobbies.push('comer pizza'); 
console.log(hobbies); 


hobbies.pop(); 
console.log(hobbies); 


const posicao = hobbies.indexOf('tocar violão'); 
hobbies.splice(posicao, 1); 
console.log(hobbies); 


const hobbiesDoAmigo = ['cantar', 'dançar', 'cantar'];
const todosOsHobbies = hobbies.concat(hobbiesDoAmigo); 
console.log(todosOsHobbies); 


const hobbiesMusicais = ['cantar', 'tocar guitarra', 'escutar música'];
const hobbiesEsportivos = ['correr', 'jogar futebol', 'nadar'];
const hobbiesCriativos = ['desenhar', 'escrever histórias', 'fazer esculturas'];
const categoriasDeHobbies = [hobbiesMusicais, hobbiesEsportivos, hobbiesCriativos];


console.log(categoriasDeHobbies[0][0]); 
console.log(categoriasDeHobbies[0][2]);
