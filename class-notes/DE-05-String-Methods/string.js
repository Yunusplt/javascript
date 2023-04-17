// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRİNG METHODS******");



//! 1- Klasik yöntemle tanımlanan String ilkel (primitive) dir
const str1="clarusway"
const str2="hello"
const str3="all the world"
console.log(str2+str3, typeof(str2+str3));
console.log(str2[str2.length-1]);

//! 2- String constructor ile tanımlanan String non-primitive (ilkel olmayan) dir 
 const str4=  new String("yeni bir String")

 console.log(typeof str4);


//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================


let s1="hello "
const s2="world"

console.log(s1.concat(s2));    //kalici degismez sadece ekrana birlestirilmis seklini yazdirir.

console.log(s1);

const s3= s1.concat(s2)
console.log(s3);

//! orginal degerler degismez. assigning ile kalici degistirebiliriz.




// *=========================================================
// *    toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================


const myName="Ashley Miller"
console.log(myName.toLocaleLowerCase());
console.log(myName.toLocaleUpperCase());

console.log(myName.toLocaleUpperCase("tr"));  //! i ye bak 


//! toLocaleUpperCase("tr")= Türkçe büyüt demek  boş bırakınca  eng (ingilizce) karakterlere uygun büyütebiliriz

//? ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu donduren fonksiyonu yaziniz.

const esitMi=(str1,str2)=> str1.toLocaleUpperCase()==str2.toLocaleUpperCase() ? "esittir" : "esit degildir"


console.log(esitMi("İSMET","ismet"));   // esit degildir.

const esitMi2=(str1,str2)=> str1.toLocaleUpperCase()==str2.toLocaleUpperCase("tr") ? "esittir" : "esit degildir"


console.log(esitMi2("İSMET","ismet"));   // esittir.



// *=========================================================
// *    charArt()
// *=========================================================


const s4="primitive  \nveri tiplerinin \nproperty ya \nda methodu olmaz"

console.log(s4);

console.log(s4.charAt(5));    // t
console.log(s4.charAt(9));    // bosluk 
console.log(s4.charAt());    // ilk karakter
console.log(s4.charAt(s4.length-1)); // son karakter.  z




// *================================================================
// *includes()-  Case Sensitive  (büyük kücük harf duyarliligi)
// *================================================================


const kelime = "to be or not to be, that is The questions."

console.log(kelime);
console.log(kelime.includes("TO BE"));           // false
console.log(kelime.includes("to be"));           // true
console.log(kelime.includes("quest"));          // true
console.log(kelime.includes(" "));              // true
console.log(kelime.includes("to be", 14));      // false  
console.log(kelime.toUpperCase().includes("TO BE"));    // true



//! NOT: incase sentive kullanmak icin kelime baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.

// *================================================================
// * indexOf()-  Case Sensitive  (büyük kücük harf duyarliligi)
// *================================================================

const kelime1="to be or not to be, that is The questions."

console.log(kelime1.indexOf("be"));   // ilk harfe bakar b 3. indexte.
console.log(kelime1.lastIndexOf("be"));  // sondaki be nin b si 16
console.log(kelime1.indexOf("the"));  // olmayan karakter icin -1 döndürüyor.
console.log(kelime1.indexOf("TO BE"));  // olmayan karakter icin -1 döndür. 
console.log(kelime1.indexOf(" "));     // 2
console.log(kelime1.indexOf("be",4));     // 4. indexten sonra 16. indexteki b

console.log(kelime1.indexOf("be", kelime1.indexOf("be")+1));  //2. b yi bul




// *================================================================
// * search()
// *================================================================


const kelime2="!to be or not to be, 5 that is The questions."

//!REGEX

console.log(kelime2.search(/[A-Z]/));//28
// cümlenin içindeki büyük harfi bulup küçülttük
console.log(kelime2.charAt(kelime2.search(/[A-Z]/)).toLowerCase());

console.log(kelime2.search(/[a-z]/));   // 1 
console.log(kelime2.search(/[0-9]/));   // 21 olmaz ise -1 döndürür. 
console.log(kelime2.search(/[.]/));   //
console.log(kelime2.indexOf("."));   //
console.log(kelime2.search(/[0-9a-zA-Z]/)); // 
console.log(kelime2.search(/[^a-z]/)); // kücük harfler disinda ilk karakteri 




// *================================================================
// *      startsWith(), EndsWith()   Case Sensitive 
// *================================================================



const kelime3="Salina salina sinsice olurum sana!"

console.log(kelime3.startsWith("sa"));     // false
console.log(kelime3.startsWith("Sa"));     // true
console.log(kelime3.startsWith("salina"));     // false
console.log(kelime3.startsWith("salina",7));     // true
console.log(kelime3.endsWith("!"));     // true
console.log(kelime3.endsWith("salina",13));  // 13. karaktere kadar say 13 dahil degil.




// *================================================================
// *      replace(searchFor, replaceWith)  -- immutable
// *================================================================



let oku="Oku Johny gibi saf olma saf olma saf olma"

let oku2=oku.replace("saf olma", "basarili ol")

console.log(oku2);

oku=oku.replace("saf olma", "basarili ol")

console.log(oku);

console.log(oku.replace(/SAF/i, "fakir"));   // case sensetive out of order

console.log(oku);

console.log(oku.replace(/Saf olma/gi, "zengin ol"));  // i caseSensetive özelligini kaldirir. g ise cümledeki bütün saf olma kelimeleri degistirr.


// *================================================================
// *                           replaceAll()  
// *================================================================

let degistir = "Oku Johhny gibi saf olma saf olma SAF olma"

console.log(degistir.replaceAll("saf olma", "akilli ol")); 



//* ----------------------------------------------------------
//*  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)  - deger almaz
//* ----------------------------------------------------------

const veysel="UZUN İNCE BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE";

console.log(veysel.slice(10)); //BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE
console.log(veysel.slice(17,21)); // DAYI 21 dahil degil
console.log(veysel.substring(17,21)); // DAYI 21 dahil degil

console.log(veysel.slice(-10)); // UNDUZ GECE

console.log(veysel.slice(-11, -6)); // GUNDU
console.log(veysel.slice(16,-6)); //  LDAYIM YÜRÜYORUM GUNDU

//! substring methodunda -index alinmaz

console.log(veysel.substring(-10));  // calismadi cümlenin tamamini gösteriyor.
console.log(veysel.substring(veysel.length-3));   // son 3 karakter.
console.log(veysel.slice(veysel.length-3));   // son 3 karakter.

//* ----------------------------------------------------------
//* split= string i diziye çevirir
//* split(seperator , limit ) =>ikisi de optional
// //* split("x")=>x lerden ayırır, virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------

//! array = dizi

const tarkan="Gel gündüzle gece olalim"
console.log(tarkan);        
console.log(tarkan.split()); // 1 elemanli array cevirir.
console.log(tarkan.split(" ")); //  bosluklardan ayirdi.
console.log(tarkan.split("")); //  hicliklerden ayir
console.log(tarkan.split("e")); //  e lerden ayirdi 5 elemanli array oldu .
console.log(tarkan.split("e",3)); // 5elemanli  arrayin ilk 3 elemanini al
console.log(tarkan.split("",3));  // G e l




//* ----------------------------------------------------------
//*  trim();
//* ----------------------------------------------------------


const ramazan="        Hos geldin ya Sehr i Ramazan        "
console.log(ramazan);
console.log(ramazan.length);                    // 44
console.log(ramazan.trim());                    //sag sol bosluk gitti 
console.log(ramazan.trim().length);             // 28
console.log(ramazan.trimEnd());                 // sag bosluk gitti
console.log(ramazan.trimEnd().length);          //36
console.log(ramazan.trimStart());               //sol bosluk gitti 
console.log(ramazan.trimStart().length);        //36































