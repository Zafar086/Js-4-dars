const first = prompt("Ismingizni kiriting");

let second = prompt("Birorta harf kiriting");

if (first.toLowerCase().includes(second.toLowerCase())) {
  alert(`${first} ismida kiritilgan ${second} harfi bor`);
} else {
  alert(`${first} ismida kiritilgan ${second} harfi mavjud emas`);
}


