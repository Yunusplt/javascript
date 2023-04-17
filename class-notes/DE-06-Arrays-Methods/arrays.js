// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanimlama
//* ---------------------------------------------------------

//! 1. YÖNTEM (Array Literal) - tercih edilen yöntem

const yaslar=[30,24,55,78,12]

console.log(yaslar);
console.log(yaslar.length);

//!hata const keyword ü ile tanimlanmiş bir diziyi tamamiyla değiştiremezsiniz, ancak tek tek değişikliğe izin verir
// yaslar=[1,2,3,4]

//! 2. YÖNTEM (Array Constructor)

const cars=new Array("BMW", "Mercedes", "Volvo")
console.log(cars);

//!10 elemanli bir Array tanimlama
const sayilar=new Array(10)    // 10elemanli arrray
const sayilar1=new Array()  //bos array  

console.log(sayilar);
sayilar[4]=256
sayilar[9]="Ayse"

console.log(sayilar);

//!########################################################################################


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
//! dizinin 3. string elemanini Array e çevirip reverse metodu ile ters dönmüş dizi yaptik. tekrar ters dönmüş dizi olsun istersek join("") kullanabiliriz
console.log(meyveler[4].split("").reverse());
console.log(meyveler[4].split("").reverse().join(""));
//todo#####################################################



//*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//*2. parametre=0 ise belirttiğim index teki elemani sağa ittir, artik orada yeni yazdiğim olsun
//*2.parametre=1 ise belirttiğim index teki elemani sil üstüne yaz



//todo ['karpuz', 'Kavun', 'Cilek', 'Muz', 'Armut', 'Erik', 'Ayva']

meyveler.splice(2,0,"Mango")
console.log(meyveler);

meyveler.splice(1,1,"Ananas")   //! meyveler[1]="Ananas"
console.log(meyveler);



// todo   #####################################################################################
// !                           5.DERS
// todo   #####################################################################################


//*sort(), string ifadelerde alfabetik siralar(ascii değerlerine göre)
//* sort metodu diziyi iterasyona uğratir ve parametre olarak aldiği arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanina uygular. Bu sayade küçük sayilar ile büyük sayilari yer değişirerek siralama işlemini gerçleştirir.

meyveler.sort()         //! alfabatik sira ascii...
console.log(meyveler);

const number=[3, 5, 1, 35, 10, 22, 55, 77, 231]

console.log(number);
number.sort()           //!  [1, 10, 22, 231, 3, 35, 5, 55, 77]  !!!!!!!
console.log(number); 


number.sort((a,b)=>a-b)     //!! [1, 3, 5, 10, 22, 35, 55, 77, 231]  !!!!!!!
console.log(number);



//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================

const sayilar2=[3, 5, 2, "2", "uc", 2, "bes", 5]


//!  includes() #################################################


console.log(sayilar2.includes("5"));   // false
console.log(sayilar2.includes(5));   //  true


//!  indexof()    lastindexof()   ###############################

console.log(sayilar2.indexOf("2"));   // 3
console.log(sayilar2.indexOf("2", 4));   // -1   4. indexten sonra
console.log(sayilar2.indexOf(5));   // 1
console.log(sayilar2.indexOf(5, 2));   // 7     2. indexten sonra

console.log(sayilar2.lastIndexOf(5));  // 7

//todo ############ ORNEK #############

//* kullanicidan sayi isteyin. girilen sayinin hem string hem number hali sayilar dizisinde var mi araştir, varsa index ini döndür.

// const sayilar3 = [3, 5, 2, "2", "uc", 2, "bes", 5, "6"];
// const sayiString = prompt("lütfen bir sayi giriniz"); //"5"

// const sayiNumber = Number(sayiString); //5

// let varMi=false;

// if (sayilar3.includes(sayiString)) {
//   console.log(
//     "aradiğiniz sayinin String hali dizide var ve index i:",
//     sayilar3.indexOf(sayiString)
//   );
//   varMi=true
// }
//  else console.log("aradiğiniz sayinin string hali bulunamadi");
// if (sayilar3.includes(sayiNumber)) {
//   console.log(
//     "aradiğiniz sayi dizide var ve index i:",
// sayilar3.indexOf(sayiNumber)
//   );
//   varMi=true
// }

// else console.log("aradiğiniz sayinin number hali bulunamadi");

// if(varMi==false){
//   console.log("aradiğiniz sayi bulunamadi");
// }


//!##############################################################################

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join("x")=>varolan virgül+boşluk sil, elemanlarin aralarina x koy(mesela join parantezinde boşluk yerine 2 varsa her eleman arasina 2 koy demek) 
//* split(" ")=>string i boşluklardan ayirir,boşluklari silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez.

//? sayilar2=[3, 5, 2, "2", "uc", 2, "bes", 5]

console.log(sayilar2.join());
console.log(sayilar2.join(","));
console.log(sayilar2.join("A "));
console.log(sayilar2.join("-"));


//? ['Ananas', 'Armut', 'Ayva', 'Cilek', 'Erik', 'Mango', 'Muz', 'karpuz']

console.log(meyveler);
console.log(meyveler[2]);                                // Ayva
console.log(meyveler[2].split(""));                       //['A', 'y', 'v', 'a']        
console.log(meyveler[2].split(" "));                       //['Ayva']       
console.log(meyveler[2].split("").reverse());              //['a', 'v', 'y', 'A'] 
console.log(meyveler[2].split("").reverse().join(""));     // avyA


//!####################################################################################


//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(sayilar2);               //? [3, 5, 2, '2', 'uc', 2, 'bes', 5]
console.log(sayilar2.toString());    //3,5,2,2,uc,2,bes,5 //? bu sekil kullanilir sadece , alir.


//! ###################################################################################

//****** */ slice******

const arabalar=["bmw", "mercedes", "audi", "ferrari", "lamborgini"]

console.log(arabalar.slice(3));          //['ferrari', 'lamborgini']
console.log(arabalar.slice(1, 3));       //['mercedes', 'audi']  start 1 finis 3 
console.log(arabalar.slice());           // aynisini yazdirir. 5 markada gözükür.


//!##################################################################################

//***** */ concat****/

const kisiler=["özlem","esra", "nihal", "fatih","hüseyin"]
const rakamlar=[1,2,3,4,5,6]

const birlesik=kisiler.concat(rakamlar,true, "halit","emirhan", ["irfan","yunus"], [["a","b","c"]])

console.log(birlesik);   //?['özlem', 'esra', 'nihal', 'fatih', 'hüseyin', 1, 2, 3, 4, 5, 6, true, 'halit', 'emirhan', 'irfan', 'yunus', Array(3)]


//!##############################################################################

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yas=[18, 23, 35, 44, 57, 89, 15]

console.log(yas.every((x)=> x>=10));             //true cünkü tüm elemanlar 10 dan büyük.
console.log(yas.every((x)=> x>=18));             // false cünkü tem elemanlar 18 den büyük degil.
console.log(yas.every((x)=> x>=100));             // false  



//!##############################################################################

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna (bizim yazdığımız fonksiyon) gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.


console.log(yas.some((x)=> x>=10));         //true       // 1 tane bile sart tutarsa true
console.log(yas.some((x)=> x>=40));         // true 
console.log(yas.some((x)=> x>=100));        // false


//!################################################################################




























