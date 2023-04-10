// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************


for (let index = 1; index <=10; index++){
    console.log(index, "MERHABA");
}


//! 1 den n e kadar olan sayilarin toplami 

// const N = +prompt("lütfen N'i giriniz.")

// let toplam = 0

// for (let i = 1; i <= N ; i++)
// {
//     toplam = toplam + i
// }

// console.log(toplam);



//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

//!Umit cözüm
// const asalmi = +prompt("Asallik kontrolü icin bir sayi giriniz")
// let asal_bool = false;

// for( i=2 ; i < asalmi ; i++){


//     asal_bool = !(asalmi % i == 0);
//     if(!asal_bool){
//         break;
//     }

// }
// if(asal_bool){
//     alert("asal")
//   }
//   else{
//     alert("asal degil")
//   }






// const sayi=+prompt("asallik kontrolü için bir sayi giriniz")
// let asal=true;

// for(let i = 2 ; i < sayi; i++){

//  if(sayi % i ==0 ) {
//     asal=false
//  }


// }
// console.log(asal == true ? " asaldir" : "asal değildir");

// console.log(asal ? " asaldir" : "asal değildir");  

// böylede yazilabilir aksi yazilacagi zaman böyle yazilir !asal ? "asaldir" : "asal degildir"




//todo 3.ders ###########################

//? Ornek: 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu
//? for dongusu ile yaziniz..

for (let i = 1; i <= 7; i++) {
  const rastgele = Math.round(Math.random() * 100);
  console.log(rastgele);
}
console.log(Math.round(Math.random()*100 ));




//todo################    WHILE      ################

//*ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz


// let number =+prompt("WHILE icin 1-100 arasinda sayi giriniz")


// while (number<1  || number>100) {
//     console.error("sayi 1-100 arasinda olmalidir.");
//     number = +prompt("tekrar 1-100 arasi sayi girmeyi deneyiniz.")
    
// }

// console.log("tebrikler", number);
//! while daki şart true oldugu sürece altındaki süslü işler, false oldugu anda süslünün dışına çıkılır




//todo################  DO  WHILE      ################
// let number1;
// do{

// number1 =+prompt("DO-WHILE icin 1-100 arasinda sayi giriniz")
// alert(number1)   // yanlis girsende yazdirir. alert bu

// } while (number1 <1 ||  number1>100) ;

// console.log("döngüden ciktiniz");


// şarta bakmadan ilk etapta do nun içindeki istek yapılır, sonrasında while içi true old sürece do içindeki istek yapılmaya devam edilir
//!#################################################################
//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.

// let devam;

// do {
//     let vize = +prompt("vize notunu giriniz")
//     let final = +prompt("final notunu giriniz")

//     let gecmeNotu=vize*0.4 + final*0.6
//     console.log(gecmeNotu);

//     devam = prompt("devam etmek istiyorsaniz e/E girin")

// } while (devam.toUpperCase()=="E");


// console.log("döngüden ciktik");


// //? ORNEK2: klavyeden q karakteri girilene kadar sayı girişi yapan bir programı döngü kullanarak yazınız.
let sayi1;
do {
  sayi1 = prompt("lütfen sayi giriniz") 

} while (sayi1 !== "q");

console.log("bitti");



























