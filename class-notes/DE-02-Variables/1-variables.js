//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

//  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

// ===================  CONST  ======================
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler (array..) hariç).


const yas=25;

console.log(yas);

console.log(typeof yas);


//yas = 30;

// const ile tanimlanan variable degistirilemez. sabittir. 

//const pi;

//const degiskenine baslangic atamasi yapmak zorunlu...

const isTrue=true;
console.log(typeof isTrue);  // boolean

const dolar=1.5;
console.log(typeof dolar);  // number

// noktali sayi da olsa float yerine number olarak tanimliyor.




// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//? CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.



let dil="JavaScript";
dil="java";
console.log(dil);   //java

dil = true;

console.log(typeof dil);

let sayi=5;
console.log(7+sayi);   //12

let sayi1="5";
console.log(7+sayi1);  //75

console.log(typeof (sayi1+sayi));  //String  string + number = string
//! bir string ile number toplanırsa aslında toplama yapmaz, onları iki kelime gibi yanyana yazar
isim="ipek";

console.log(typeof isim)

// const veya let yazmazsak default olarak var olarak tanimlar. 






// ===================  VAR VERİ TİPİ ===============================
//? VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//! VAR değişkenleri tanımlandığı yere göre global olarak veya fonksiyon içerisinde erişilebilir.
//* - Değişken fonksiyon içerisinde tanımlandı ise ancak o fonksiyonda erişilebilir (Function-scoped).
//? - Eğer, değişken fonksiyonların dışında tanımlandı ise tüm her yerden erişilebilir. (Global-scoped).
//! Günümüzde programcılar global değişken gerekmedikçe VAR ile değişken tanımlamayı seçmemektedir.


var sayi2 = 5
sayi2 = 10
console.log(sayi2)

console.log("******************************");

var ilk="GLOBAL"
console.log(ilk);   //GLOBAL


{

    console.log(ilk);  //GLOBAL

    ilk="degistim";

    console.log(ilk);  //degistim

    var ikinci="naber"
}

console.log(ilk);   //degistim

console.log(ikinci);  //naber

// var keywordü kullanilinca blok icerisinde ve disarisinda variable a erisilir. Eger var ile blok icinde tanimlanmissa blok disinda da variable a erisilir.



console.log("******************************");



let first="Osman";

console.log(first);  // Osman


{

    console.log(first);  // Osman

    let second="Halit";

    console.log(second);  // Halit

    first="Hüseyin"

    console.log(first); // Hüseyin
}

//console.log(second);

console.log(first);   // Hüseyin 
//console.log(second);    //Localde let ile tanimlanan second globalde gözükmez. var ile tanimlansaydi gözükürdü.


//! LET TEKI ayni islemleri const icinde yaptik 

const erste="nihal"

console.log(erste);

{

    console.log(erste);

    //const erste="irfan"  degistirilemez

    const zweite="Özlem"
    console.log(zweite);

}

// console.log(zweite); göremezzzz scope icinde tanimlandi cunkuuuuuu.































