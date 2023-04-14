//* ======================================================
//*                   FOREACH METHOD
//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir.
console.log("FOREACH METHOD");
//*======================================================

//*----------ORNEK-----------

const prices1=[100, 250, 50, 90]

prices1.forEach((item)=>console.log(item))
let toplam = 0
prices1.forEach((item)=> console.log(toplam+=item))

let terminal = prices1.forEach((item)=> console.log(toplam+=item))   // tek bir satirda islemi yapar burada isi biter.mevzuyu assagiya tasimaz forEach method. Hier ist last station.

console.log(terminal);                                     // undefined


//!##########################################################################################

//*********************************ORNEK******* */

//* item => prices dizisinin her bir elemanı
//* i => indis
//* prices=> prices dizisidir.

const prices = [100, 250, 50, 90]
let toplam1 =0

prices.forEach((item, i, prices)=>{

    toplam1+=item
    console.log(`${i}. toplam ${toplam1}`);
    prices[i] = item*2  //kalici degisiklik   item = item*2 gecici   2.yol  prices[i]=prices[i]*2
    console.log(prices);

})

console.log(prices);


//!###########################################################################################

//* ======================================================
//*                       MAP METHOD
//!map yapılan değişikliği bir diziye atıp, bunu döndürebilir,  foreach gibi tüketmez.
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisinin içindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.


const names=["kubilay", "irfan", "fatih", "özlem", "nihal", "yunus", "emirhan", "halit", "esra","hüseyin"]

const yeniIsim = names.map((isim)=>isim.toUpperCase())
//todo forEach li
const yeniIsim2 = names.map((isim)=>isim.toUpperCase()).forEach((a)=>console.log(a))
//todo 

console.log(yeniIsim);


//!###################################################################################

//*örnek
//* fiyatlar dizisindeki ürün fiyatlarinin 250 TL altında olanlarına
//* %50 zam, diğerlerine de %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar kalıcı olarak diziye işlenmek isteniyor fiyatlar[1]=eski fiyat*1.5 gibi
//* 1. ürünün zamlı fiyati 110 TL gibi
//* item => prices dizisinin her bir elemanı
//* i => indis
//* array=> fiyatlar dizisidir.



const prices2=[100, 250, 50, 90]

//prices2.map(item,i,array)        // bu sefer array ismi yerine herhangi birsey yazdik

prices2.map((item,i,array)=>{
    if (item<250) {
        array[i] = array[i] * 1.5 
    }else array[i] = array[i]*1.2
})

console.log(prices2);         //?     [150, 300, 75, 135]


//!####################################################################################


//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz


const tlPrices=[100, 150, 200, 80, 50]

const dolar = 19.20
const euro = 21.20

//tlPrices.map()  //! degistirmek icin kullanilan iterationlardan en iyisi


const dolarPrices = tlPrices.map((a)=>+(a/dolar).toFixed(2))   //ama sonucu string verdi.
//!icerdeki artiyi koyma sebebim toFixed()in stringe döndürdügü itemleri tekrar number type ina döndürmek.

console.log(dolarPrices);

const euroPrices = tlPrices.map((i)=>Number((i/euro).toFixed(2)))
console.log(euroPrices);



//!####################################################################################

//* ======================================================
//*                       FILTER METHOD
//* ======================================================
//* prices array"inde fiyatı 100 TL den az olanlari ayri
//* bir diziye saklayalim.



//? const prices = [100, 250, 50, 90]    // new values  [200, 500, 100, 180]

const filteredArray = prices.filter((a)=> a< 200)

console.log(filteredArray);



//!###################################################################################

//* ======================================================
//*                       PIPELINE
//* ======================================================

//!slide daki soru, pipeline olmazsa böyle uzun uzun if le çözeriz
//* Fiyatı 100 TL den fazla olanlara %10 zam, 100 TL den az olanlara ise %15 zam yapılmak isteniyor. Ayrıca, zamlı olan yeni değerleri örnekteki gibi diziye saklamak istiyoruz.
const tlFiyatlar = [100, 150, 100, 50, 80];

// const degerler = tlFiyatlar.map((d) => {
//   if (d > 100) {
//     d = d*1.1
//   } else {
//     d = d*1.15
//   }
//   return d;
// });
// console.log(degerler);


//todo return e gerek kalmamasi icin asagidaki gibi yapalim. 

tlFiyatlar.map((d, i, array) => {
  if (d > 100) {
    array[i] = d*1.1
  } else {
    array[i] = d*1.15
  }

});
console.log(tlFiyatlar);

//todo kalici olarak degisiklik yapilmasi istenmiyorsa 2 yukardaki yapilir. degiskene atanir. süslü icerisinde islemler yapilir. d de degisiklik yapilir. d fonksiyondaki degerdir. degere müdahale edilir. Array[i]. indexine müdahale etmekten farkli yani.  daha sonra return e ihtiyacc duyulur. 


//!##############################################################

const tlFiyatlar1 = [100, 150, 100, 50, 80];


//?[150].map gibi...
const bir = tlFiyatlar1.filter((a)=> a>100).map((c)=>c*1.10)
const iki = tlFiyatlar1.filter((a)=> a<=100).map((c)=>c*1.15)

console.log(bir);
console.log(iki);

console.log(bir.concat(iki));



//!#################################################################

//*-------------- ÖRNEK -------------------
//*people dizisinde ismin ilk harfine göre arama yaparak ilgili isimlerin ilk 3 harfini yazdıran bir fonksiyon yazınız.

const people=[
    "kubilay", 
    "irfan", 
    "fatih", 
    "özlem", 
    "nihal", 
    "yunus", 
    "emirhan", 
    "halit", 
    "esra",
    "hüseyin"
]

const findLetter = (harf)=>{
    people.filter((isim)=> isim.startsWith(harf)).map((isim)=>isim.slice(0,3)).forEach((isim)=> console.log(isim))


}

findLetter("e")
findLetter("h")

console.log(people);


//yada 
//const yeni = people.filter((isim)=> isim.startsWith(harf)).map((isim)=>isim.slice(0,3))
//forEach yok degisken var. bu sekilde de yukardaki findLetter fonksyionun icine yazilabilir. 

// todo forEachle yazdir    arrayden cikartip string gibi döndüryüor.
// todo map() le degistir.
// todo filtre() filtrele




//!##############################################################################


//* ======================================================
//*                      REDUCE
//* ======================================================

//* salaries dizisindeki maaşları toplayınız (reduce metodu kullanın)


const salaries = [3000, 5000, 4000, 6000, 7500];
//?reduce bir tanecik eleman dondurecegi icin burada forEch calismaz. forEach dizi icersiinde dolanir. sadece Arraylerde kullanilir forEach() method.

const sonuc = salaries.reduce((sum, item)=>sum+item, 0)
console.log(sonuc);

console.log(salaries.reduce((sum, item)=>sum+item, 0));

//!################################################################################

console.log(salaries.reduce((multi, item)=> multi*item, 1));

//!#################################################################################

const text = "Clarusway Online Career IT Training School"

const newArray = text.split(" ")
// console.log(newArray);

newArray.map((a)=>a.toUpperCase()).forEach((a)=>console.log(a))

const newArray2 = newArray.map((a) =>a.toUpperCase())
console.log(newArray2);

newArray.filter((item)=>item.startsWith("T")).map((a)=>a[0].toLowerCase()+a.slice(1)).forEach((a)=>console.log(a))

//!#################################################################################
//*Ornek****************

const yeni = people.filter((a)=>a.endsWith("n")).map((a)=>a.split("").reverse().join(""))

console.log(yeni);
















