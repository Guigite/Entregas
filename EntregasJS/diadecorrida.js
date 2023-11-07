const nome = "Guilherme"

let numeroCorredor = Math.floor(Math.random() * 1000);

let registrouCedo = false; 

let idade = 19; 

if (idade > 18 && registrouCedo) {
    numeroCorredor += 1000;
}

if (idade > 18 && registrouCedo) {
  console.log(`Corredor(${nome}) com mais de 18 anos e registro cedo, número do corredor:${numeroCorredor}, correrá às 9h30.`);
} else if (idade > 18 && !registrouCedo) {
  console.log(`Corredor(${nome}) com mais de 18 anos e registro tarde, número do corredor:${numeroCorredor}, correrá às 11h00.`);
} else if (idade < 18) {
  console.log(`Corredor(${nome}) com menos de 18 anos, número do corredor:${numeroCorredor}, correrá às 12h30.`);
} else {
  console.log(`Corredor(${nome}) com exatamente 18 anos, número do corredor:${numeroCorredor}, tem uma categoria especial!`);
}