// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//! 1. YÖNTEM (Array Literal) - tercih edilen yöntem

const yaslar=[30,24,55,78,12]

console.log(yaslar);
console.log(yaslar.length);

//!hata const keyword ü ile tanımlanmış bir diziyi tamamıyla değiştiremezsiniz, ancak tek tek değişikliğe izin verir
// yaslar=[1,2,3,4]

//! 2. YÖNTEM (Array Constructor)

const cars=new Array("BMW", "Mercedes", "Volvo")
console.log(cars);

//!10 elemanlı bir Array tanımlama
const sayilar=new Array(10)    // 10elemanli arrray
const sayilar1=new Array()  //bos array  

console.log(sayilar);
sayilar[4]=256
sayilar[9]="Ayse"

console.log(sayilar);


console.log("#########################");

const birth=1979

const isimler=[
    "Halit", "Irfan", "Emirhan", 2023-birth, "Esra", true, 23, yaslar,
]

console.log(isimler);

const bosarray = []
console.log(bosarray);
bosarray[0]="first and only"
console.log(bosarray);


isimler[5]= false   // 5. elemanini degistirdik.
isimler[8]=58       // 7 indis var 8. indis e 58 ekle yani arrayin sonuna 

console.log(isimler);
console.log(isimler[3]);
console.log(isimler[7]);
console.log(isimler[7][2]);
console.log(isimler[isimler.length-2][yaslar.length-3]);

console.log(isimler[7][2]);

// isimler[7][2]=isimler[7][2]-       //!55 i  54 yapar

// console.log(isimler[7][2]);

console.log(--isimler[7][2]);        //! 55 i 54 yapar kalici




// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)
// ?=========================================================

//*pop() dizinin son elemanini sildirir. yazdirirsak silineni gösterir ekranda

const meyveler=[
    "Elma", "Erik", "Armut", "Muz", "Kivi"
]

console.log(meyveler);

meyveler.pop()

console.log(meyveler);

//! shift() dizinin ilk elemanini siler , yazdirirsak sildigi elemani gör,

console.log(meyveler.shift());
console.log(meyveler);


//! push() dizinin sonuna eleman ekler, yazdirirsak dizinin guncel elemanin sayisini döndurur

console.log(meyveler.push("Cilek", "Kavun", "karpuz"));
console.log(meyveler);


//! unshift() dizinin basina eleman ekler. yazdirirsak dizinin guncel elemanin sayisini döndurur

console.log(meyveler.unshift("Ayva"));
console.log(meyveler);


//! reverse() dizinin tamamini ters cevirir.

meyveler.reverse()
console.log(meyveler);
//todo#####################################################
//! dizinin 3. string elemanını Array e çevirip reverse metodu ile ters dönmüş dizi yaptık. tekrar ters dönmüş dizi olsun istersek join("") kullanabiliriz
console.log(meyveler[4].split("").reverse());
console.log(meyveler[4].split("").reverse().join(""));
//todo#####################################################



//*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
//*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz



//todo ['karpuz', 'Kavun', 'Cilek', 'Muz', 'Armut', 'Erik', 'Ayva']

meyveler.splice(2,0,"Mango")
console.log(meyveler);

meyveler.splice(1,1,"Ananas")   //! meyveler[1]="Ananas"
console.log(meyveler);






























