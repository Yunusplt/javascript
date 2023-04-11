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

//!###############################################
//todo  4.DERS
//!###############################################

//!######## Ornek 3 #############                                      

const usAl = function (s1, s2) {
  return s1 ** s2;
};

const cevreBul = function (s1, s2) {
  return (s1 + s2) * 2;
};

const alanBul = function (s1, s2) {
  return s1 * s2;
};

const hesapla = function (secim, v1, v2) {
  let sonuc;

  if (secim == "alan") {
    sonuc = alanBul(v1, v2);
  } else if (secim == "cevre") {
    sonuc = cevreBul(v1, v2);
  } else if (secim == "us") {
    sonuc = usAl(v1, v2);
  }
  return sonuc;
};
console.log("alanin sonucu:", hesapla("alan", 3, 5));
console.log("cevrenin sonucu:", hesapla("cevre", 3, 5));
console.log("üs almanin sonucu:", hesapla("us", 3, 5));

