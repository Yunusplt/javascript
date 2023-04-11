// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");


//!once fonksiyon olusturulur.

const tekCift=function(sayi) {

    return sayi % 2 == 0 ? "cifttir" : "tektir"
}

alert(tekCift(15))


function ciftTek(sayi) {
    return sayi%2==0 ? "cift" : "tek"
}

alert(ciftTek(10))

//!################# Ornek 2 en büyük sayi ###########


const buyukBul=function(x,y,z){
let enBuyuk;

    if(x>y && x>z){
        enBuyuk=x
    }else if(y>x && y>z){
        enBuyuk=y
    }else {
        enBuyuk=z
    }

return enBuyuk


}

alert(buyukBul(3,5,9))


//!######## Ornek 3 #############

const usAl= function(s1, s2) {
    return s1**s2    
}

const cevBul= function (s1, s2) {
    (s1+s2)*2   
}

const alanBul= function (s1,s2) {
    return s1*s2
}

const hesapla=function(secim, v1, v2) {
    let result
    if (secim=="alan") {
        result=alanBul(v1,v2)
    }
    else if (secim=="cevre") {
        result=cevBul(v1,v2)
    }
    else if (secim=="us") {
        result=usAl(v1,v2)
    }
return result
}

console.log(hesapla("alanin sonucu", "alan", 3, 5));
console.log(hesapla("cevrenin sonucu", "cevre", 3, 5));
console.log(hesapla("üstün sonucu", "us", 3, 5));



//todo hata var düzelt

