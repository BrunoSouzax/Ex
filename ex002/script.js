const nome = 'Caio';
const sobre = 'souza';
const peso = 76;
const alturaEmCm = 1.73;
const idade = 25;

let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 2022 - idade;


// template strings 

console.log(`${nome} ${sobre} tenho ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`)


