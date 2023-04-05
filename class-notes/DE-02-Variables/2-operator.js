


const sucuk = 250;
const cola=20;
const peynir=200;

let toplam = sucuk+cola+peynir;

console.log(toplam);

//!bir arttirma

toplam ++ ; 
// todo toplam esittir toplam arti bir  


console.log(toplam);

// 10 arttir

toplam+=10;

console.log(toplam);

//? + operatörü String Concatination işlemi de yapar.

const ad="Yunus"
const soyad="Polat"

console.log(ad+soyad);

console.log("Adim ve soyadim "+ad+" "+soyad);

console.log(`Adim ve soyadim ${ad} ${soyad}`);

//*bir sayı ve string toplanırsa alttaki gibi concatination yapar
const s1=5;
const s2="7";

console.log(s1+s2); //57
//* çıkarma işleminde verilerden biri number ise diğeri tırnaklı number olsa bile çıkarma yapar
console.log(s1-s2); //-2


const s3="iki"
console.log(s1-s3);


const dogumTarihi=1979;

const name1="Ashley";

console.log(name1 + " "+ (2023-dogumTarihi) + " " + "yasindadir.");

//! Template literals(backticks)

console.log(`${name1 } ${2023-dogumTarihi} yasindadir.`);


// ARTTIRMA AZALTMA

let a=5

console.log("ilk", a++,a);

//!!!!ACHTUNGGG   a yi önce 5 alir. pluslari daha sonra gördügü icin ikinci a ya 6 degerini atar.

console.log("ikinci", a);

let b=a++
console.log(a);
console.log(b);

console.log("++++++++++++++++++++++++++++++++");

let c=10;

console.log(++c);
console.log(c);

let e=33;

console.log(--e); //32
console.log(e--); //32
console.log(e); //31


e+=5
console.log(e);

e*=10;
console.log(e);


const pi=3.14;
const r=3;

const alan = pi*r**2;

console.log(alan); //28.26

const cevre=2*pi*r

console.log(cevre); // 18.84


// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.

console.log(Math.floor(alan));  //28
console.log(Math.floor(cevre)); //18


console.log(Math.ceil(alan)); //29
console.log(Math.ceil(cevre)); //19

console.log(Math.trunc(alan));  //28   tam kismi alir. 
console.log(Math.trunc(cevre));  //18  tam kismi alir.



const ab=-1.3
console.log(Math.trunc(ab));
console.log(Math.floor(ab));


//********* */ MOD ALMA***********

const number=456;

const birler=number%10
console.log(birler);

const onlar=Math.trunc(number/10)%10
console.log(onlar);

const yüzler=Math.floor(number/100)

console.log(yüzler);



//!!!!!!!!  2. DERS  !!!!!!!!!!!


// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

const sayi1 = 4;

console.log(sayi1==4); //true
console.log(sayi1===4); // true
console.log(sayi1=="4"); // true
console.log(sayi1==="4"); //false

console.log(sayi1!=4); //false
console.log(sayi1!="4");// false

console.log(sayi1>4); // false
console.log(sayi1<=4); //true




// * =======================================================
// *                 TIP DÖNUSUMLERI
// * =======================================================


const para = Number("1000") + Number("900")
console.log(para);
console.log(typeof para);

console.log(Number("")); //hiclik sayiya döndürülür ise 0 degerini alir

console.log(Number(null));

console.log(Number(true));

console.log(Number(false));




// * =======================================================
// *                 MANTIKSAL OPERATÖRLER
// * =======================================================


//? TRUE
console.log(Boolean(5));//true
console.log(Boolean(-5));//true
console.log(Boolean(-15.5));//true

//? 5 falsy
console.log(Boolean(0)); //false
console.log(Boolean(null));//false
console.log(Boolean(""));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false


const v1=false || 0 || 12.6 || true || false || null
console.log(v1);

const v2= false || 0 || null || undefined || NaN
console.log(v2);

const v3=5 && true && true && 0 && ""
console.log(v3);
console.log(Boolean(v3));

const v4=6 && true && 12.5 && 7 
console.log(v4);

console.log(!v4);
console.log(!v2);




console.log(Number("0x11")); // 17 x=hexa=16





console.log(Number("0b101")); // 5 b=binary 2lik taban






console.log(Number("0o11")); // 9 o=octal=8







console.log(Number("sayi")); //NAN






















