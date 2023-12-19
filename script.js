
let number1 = prompt("Birinchi raqamni kiriting:");
let number2 = prompt("Ikkinchi raqamni kiriting:");


number1 = Number(number1);
number2 = Number(number2);


let kalkulator = confirm(
  "Ok bossangiz qo'shiladi👌 \n Otmena bossangiz ayiriladi👌"
);

if (kalkulator) {
  let qoshish = number1 + number2;
  console.log( qoshish);
} else {
  let ayirish = number1 - number2;
  console.log( ayirish );
}


