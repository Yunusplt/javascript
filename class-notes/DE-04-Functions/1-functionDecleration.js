// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
console.log("************ 1- FUNC DECLARATION *************");

//*Örnek1:****************************************************************/

//? Fonksiyonun tanimlanmasi 

function yazdir() {
    console.log("e daha daha nasilsiniz")
}

yazdir()    //call veya invoke (fonksiyonu cagirmak)

//!############ Ornek 2  Parametreli Fonksiyon #################


function adYazdir(ad, ikinciAd, soyad) {
    console.log(ad, ikinciAd, soyad);
}

adYazdir("Kubilay", "Ozlem", "NIHAL")

//! Ornek3 ######### parametreli, dönüs degerli ################

function yasHesapla(ad, tarih) {
    console.log(`Benim adim ${ad} ve ben ${2023-tarih} yasindayim}`);
}

yasHesapla("ipek", 1979)
yasHesapla("Yunus", 1992)

//! Ornek3 ######### parametreli, dönüs degerli ################ hoca
console.log("######################");


function yasHesapla(ad,tarih){

    console.log(`benim adim ${ad} ve ben  ${2023-tarih} yasindayim` );
return 2023-tarih
}

const ipek=yasHesapla("ipek", 1979);   
const yunus=yasHesapla("yunus",1990)
const fatih=yasHesapla("fatih",2000)

console.log(ipek, yunus, fatih );

console.log((ipek+yunus+fatih)/3);



//! 4.Ornek 
//* Örnek4: Parametreli, Dönüş değerli
//**********************************************************/
//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olabilir.


// tek cift sorgulamasi 

console.log(tekCiftSayi(5));
console.log(tekCiftSayi(50));

function tekCiftSayi(sayi){
    return sayi%2==0 ? "cifttir" : "tektir"
}





































