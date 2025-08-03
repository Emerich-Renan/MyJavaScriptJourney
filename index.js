const nome = "Renan Silva Emerich";
let idade = 19;

let data = new Date();
let horario = `${String(data.getHours()).padStart(2, "0")}:${String(
  data.getMinutes()
).padStart(2, "0")}`;

console.log(
  `Olá! Meu nome é ${nome}, tenho ${idade}. Estou aprendendo JavaScript hoje às ${horario}`
);
