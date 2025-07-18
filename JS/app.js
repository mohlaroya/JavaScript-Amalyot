//1-masala

//let sonlar = [];

//for (let i = 1; i <= 77; i++) {
//  sonlar.push(i);
//}

//let javob = "";
//let taxmin;

//do {
//  if (sonlar.length === 0) {
//    prompt("Barcha sonlarni tekshirdim, ammo siz 'ha' demadingiz!");
//    break;
//  }

//  let index = Math.floor(Math.random() * sonlar.length);
//  taxmin = sonlar[index];
//  sonlar.splice(index, 1);

//  javob = prompt("Siz " + taxmin + " sonini o‘yladingizmi? (ha/yo‘q)");

//} while (javob !== "ha");

//if (javob === "ha") {
//  prompt("Yashang! Men topdim: " + taxmin);
//}

//2-masala
//1.
//let son = parseFloat(prompt("istalgan sonni kiriting:"));

//let floorNatija = Math.floor(son);
//let ceilNatija = Math.ceil(son);
//let roundNatija = Math.round(son);

//alert(
//  "Siz kiritgan son: " +
//    son +
//    " \nMath.floor: " +
//    floorNatija +
//    " \nMath.ceil: " +
//    ceilNatija +
//    " \nMath.round: " +
//    roundNatija
//);

//2.
// 0 va 10 orasida random son yasang va foydalanuvchiga ko'rsating.

//let randomSon = Math.floor(Math.random() * 11);
//alert("Random son: " + randomSon);

//3-masala
//null va undefined farqini ko'rsatish
//masala
//2 ta o'zgaruvchi yarating, biri undefined, ikkinchisi null. Har ikkisini konsulga chiqaring va farqini tushintiring.

//let a;
//let b = null;

//console.log("Undefined o'zgaruvchi:", a);
//console.log("Null o'zgaruvchi:", b);

//4-masala
//masala
//while yordamida 10ta 0 va 100 orasidagi random butun sonlar chiqar

//let i = 0;

//while (i < 10) {
//let randomSon = Math.floor(Math.random() * 101);
//console.log("Random son:", randomSon);
//i++;
//}

//5-masala

//let son = prompt("Iltimos, biror son kiriting:");
//son = Number(son);

//let kvadrat = Math.pow(son, 2);

//console.log("Kiritilgan son:", son);
//console.log("Uning kvadrati:", kvadrat);

//6-masala

//let i = 1;

//while (i <= 20) {
//  if (i % 2 !== 0) {
//    console.log(i);
//  }
//  i++;
//}

//7-masala
//let randomSon = Math.floor(Math.random() * 10) + 1;
//let taxmin;
//let urinish = 0;

//do {
// urinish++;
// taxmin = Number(prompt(`Urinish #${urinish}\n1 dan 10 gacha son kiriting:`));
//} while (taxmin !== randomSon);

//prompt(
// `Yashading! To‘g‘ri topding: ${randomSon} \n${urinish} urinishda topding!`
//);

//8-masala
//let i = 1;

//while (i <= 50) {
// if (i === 21) {
// break;
//}

//if (i % 3 === 0) {
//console.log(i);
// }

//i++;
//}

//9-masala

//let son1 = Math.floor(Math.random() * 101);
//let son2 = Math.floor(Math.random() * 101);
//let son3 = Math.floor(Math.random() * 101);
//let son4 = Math.floor(Math.random() * 101);
//let son5 = Math.floor(Math.random() * 101);

//console.log("Random sonlar:", son1, son2, son3, son4, son5);

//let engKatta = Math.max(son1, son2, son3, son4, son5);

//console.log("Eng katta son:", engKatta);

//10-masala

let son;

do {
  son = prompt("Iltimos, son kiriting:");
} while (son === null || son === undefined || son.trim() === "");

console.log("Kiritilgan son:", son);
