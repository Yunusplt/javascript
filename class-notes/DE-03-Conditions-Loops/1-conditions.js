// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!----------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");

// const sayi1=+prompt("1. sayiyi giriniz")
// const islem=prompt("+,-,*,/ islemlerinden birisini giriniz")
// const sayi2=Number(prompt("2. sayiyi giriniz."))

//!propmt a girilen değerler string olarak algılanır. sayı olsun istiyorsak önüne ya Number yazmalıyız ya da + koymalıyız


// let sonuc = 0;

// if (islem == "+") 
//   sonuc = sayi1 + sayi2;
//  else if (islem == "-") 
//   sonuc = sayi1 - sayi2;
//  else if (islem == "*") {
//   sonuc = sayi1 * sayi2;
// } else if (islem == "/") {
//   if (sayi2 != 0) {
    // sonuc = sayi1 / sayi2;
//   } else {
    // alert("payda 0 olamaz");
//   }
// } else {
//   alert("yanliş işlem girdiniz");
// }
// console.log(sonuc);5

// ifin icindekiler tek satirda ise süslü paranteze gerek yok. ilk 2 satir gibi




//*ORNEK
const yas=20
const cinsiyet="erkek"
const saglik=true

if (yas>=20 && cinsiyet=="erkek" && saglik==true) {
    console.log("askerlik yapmaya uygundur.");
}

else{
    console.log("askerlik yapmaya elverisli degildir.");
}


//!ternary  if else kisa kullanim.(else if var ise kullanilmaz)
(yas>=20 && cinsiyet=="erkek" && saglik==true)? console.log("askerlik yapmaya uygundur."):console.log("askerlik yapmaya elverisli degildir.");


console.log("-------------------------------------");
console.log("==SWITCH-CASE== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");

// const s1=+prompt("1. sayiyi giriniz")
// const islem2=prompt("+,-,*,/ islemlerinden birisini giriniz")
// const s2=Number(prompt("2. sayiyi giriniz."))

// let sonuc2=0;

// switch (islem2) {
    // case "+":
        // sonuc2 = s1+s2
        // break;
    // case "-":
        // sonuc2 = s1-s2
        // break;
    // case "*":
        // sonuc2 = s1*s2
        // break;
    // case "/":
        // if (s2!==0) {
        // sonuc2=s1/s2
        }
        // else(alert("payda 0 olmaz"))
        // break;



    // default:
        // alert("Yanlis deger girdiniz")
        // break;
// }

// console.log(`${s1} ${islem2} ${s2} = ${sonuc2}`);


//! TERNARY

//? ornek: maasınız asgari ücretten düşük ve eşitse maaşınıza %25 zam yapılsın, değilse maaşınıza %10 zam yapılsın.



const asgariUcret=8000
const maas=+prompt("maasini gir")

 const zamliMaas= maas<= asgariUcret ? maas*1.25 : maas*1.10  

console.log(zamliMaas);


//?Ornek:10 aylık maasınız borcunuzdan 5000 ve üstü kadar fazlaysa kredi alabilirsiniz, aksi durumda alamazsınız

const Schuld=+prompt("borcunuzu giriniz")

const Gehalt=+prompt("maasinizi giriniz")

console.log(Gehalt * 10 - Schuld >= 5000 ? "kredi alabilir 🥳" : "kredi alamaz 😞");














