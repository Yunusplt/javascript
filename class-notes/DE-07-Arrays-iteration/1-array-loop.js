//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================
//*ÖRNEK: dizi1 arrayindeki pozitif sayılarla negatif sayıları 2 ayrı array de toplayan function yazınız

//!##################################################################################
//******************** */ with i*********************** 

const dizi1 = [-5, 15, 22, -4, 45, 79, -54];

const negatifler1 = [];
const pozitifler1 = [];

const dizilereAyir1 = () => {
  for (let i = 0; i < dizi1.length; i++) {
    if (dizi1[i] < 0) {
      negatifler1.push(dizi1[i]);
    } else pozitifler1.push(dizi1[i]);
  }

  console.log(negatifler1);
  console.log(pozitifler1);
};

dizilereAyir1();


//!###################################################################################

//************ */  FOR IN  ************

const dizi2 = [-5, 15, 22, -4, 45, 79, -54];

const negatifler2 = [];
const pozitifler2 = [];

const dizilereAyir2 = () => {
  for (let i in dizi2) {
    if (dizi2[i] < 0) {
      negatifler2.push(dizi2[i]);
    } else pozitifler2.push(dizi2[i]);
  }

  console.log(negatifler2);                  //  [-5, -4, -54]
  console.log(pozitifler2);                 // [15, 22, 45, 79]
};

dizilereAyir2();




//!####################################################################################

//********* */ FOR OF********

const dizi3 = [-5, 15, 22, -4, 45, 79, -54];

const negatifler3 = [];
const pozitifler3 = [];

const dizilereAyir3 = () => {
  for (let item of dizi3) {
    if (item < 0) {
      negatifler3.push(item);
    } else pozitifler3.push(item);
  }

  console.log(negatifler3);
  console.log(pozitifler3);
};

dizilereAyir3();




//!####################################################################################


//* ======================================================
//*                   FOR IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
//* bir dizide saklandığını varsayalım.Bu hayvanları türüne
//* göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//*  ana programa döndürecek fonksiyonu yazınız.
//*--------------------------------------------------------


const animal = [
  "fil",
  "aslan",
  "deve",
  "fil",
  "kaplan",
  "fil",
  "deve",
  "aslan",
  "aslan",
  "aslan",
];



// const userAnimal = prompt("lütfen bir hayvan adı giriniz");

const findAnimal = () => {
  let sayac = 0;

  for (let i in animal) {
    if (animal[i] == userAnimal) sayac++;
  }

  return ` ${userAnimal} hayvanindan  ${sayac} adet bulunmaktadir`;
};

// alert(findAnimal());



//!###############################################################################

//* ======================================================
//*                   FOR OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icindeki veriye erisirken indisleme kullanmaya gerek yoktur.

//* ORNEK: alttaki dizinin elemanlarını yanyana string olarak yazdır (for of döngüsü kullanın)



const arabalar = ["bmw", "mercedes", "audi", "volvo"];

let araba=""

for(let item of arabalar){

araba+=item
}
console.log(araba);            //bmwmercedesaudivolvo



//! 2.yol
// const araba = arabalar.join("");
// console.log(araba);



//! for loop=> Bir dizi üzerinde iteration yapmanın orjinal yollarından biridir.	
//? forEach=> Bir dizi üzerinde iteration yapmak için daha az kod içeren daha yeni bir yoldur.
//! for loop=>Performansta daha hızlıdır.	
//? forEach=> Performansta geleneksel döngüden daha yavaştır.
//! for loop=> Break ifadesi döngüden çıkmak için kullanılabilir.	
//? forEach=> Break ifadesi, geri arama işlevi nedeniyle kullanılamaz.

