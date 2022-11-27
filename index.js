// Nullish Coalescing Operator (??) --------------------------------------------

// 0, '', [], false, undefined, null => FALSY VALUES

// const idade = 0;

// console.log("Sua idade é: ", idade || "Não informado");
// console.log("Sua idade é: ", idade ?? "Não informado");

// Objects ---------------------------------------------------------------------

// const user = {
//   name: "Paulo",
//   idade: 29,
//   address: {
//     street: "Rua teste",
//     number: 159,
//   },
// };

// console.log('name' in user)
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// Destructuring ---------------------------------------------------------------

// const address = user.address;
// const { address, idade: age, nickname = "Cardoso" } = user;

// const mostraIdade = (user) => {
//   return user.idade;
// };
// const mostraIdade1 = ({ idade }) => {
//   return idade;
// };

// console.log(address);
// console.log(address, age, nickname);
// console.log(mostraIdade(user));
// console.log(mostraIdade1(user));

// Rest Operator and Destructuring ------------------------------------------

// // const { name, ...rest } = user;
// console.log(rest);

// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [first, second, ...rest] = array;
// console.log({first, second, rest});

// Short Syntax ----------------------------------------------------------------

// const name = "Paulo";
// const age = 27;

// const user = {
//   name: name,
//   age: age,
// };
// const user1 = {
//   name,
//   age,
// };

// console.log(user1);

// Optional Chaining ---------------------------------------------------------

// const user2 = {
//   name: "Paulo",
//   idade: 29,
//   address: {
//     // street: "Rua teste",
//     number: 159,
//     zip: {
//       code: 81280480,
//       city: "Campo Comprido",
//     },
//     showFullAddress() {
//       return "ok";
//     },
//   },
// };

// // console.log(user2.address?.zip?.code ?? "Não informado!");
// // console.log(user2.address?.showFullAddress() ?? "Não existe!");

// const key = "street";

// console.log(user2.address?.[key])

// Array methods ---------------------------------------------------------------

// const array = [1, 2, 3, 4, 5];

// for (const i of array){
//     console.log(i)
// }

// array.forEach((el) => console.log(el));

// console.log(array.map((el) => el * 2));

// console.log(array.filter((el) => el % 2 !== 0).map((el) => el * 100));

// const todosItensSaoNumeros = array.every((el) => typeof el === 'number')

// console.log(todosItensSaoNumeros)

// const peloMenosUm = array.some((el) => typeof el !== "number");
// console.log(peloMenosUm);

// const par = array.find((el) => el % 2 === 0);
// console.log(par)

// const impar = array.findIndex((el) => el % 2 !== 0);
// console.log(impar);

// const soma = array.reduce((acc, el) => el + acc, 0)
// console.log(soma)

// Template Literals -----------------------------------------------------------

// const name = null
// const message = `Bem vindo, ${name ?? 'Visitante'}!`

// console.log(message)

// Promises --------------------------------------------------------------------

// const somaDoisNumeros = (a, b) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });

// somaDoisNumeros(1, 3)
//   .then((soma) => console.log(soma))
//   .catch((err) => console.log(err));

// fetch("https://api.github.com/users/pauloscardoso")
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err)); 
