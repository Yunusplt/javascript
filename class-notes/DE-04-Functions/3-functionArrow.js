// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

//*Ornek1 3 ün katı mı diye kontrol etme
//************************************ */

// const katmi=function () {
    
// }
//! normalde böyle yapiyorduk simdi söyle yapicaz...

const katMi=(sayi)=> sayi%3==0 ? "3ün katidir" : "3 ün kati degildir"
//todo süslü icerisinde yazsaydim eger return yazmak zorundaydim. süslü disinda kullanabilmek icin. !!!!!!!!!! ÖNEMLI!!!!!
//todo süslü icinde console.log kullaniminda da return a ihtiyac yokkkkkkkkk
console.log(katMi(25));


 //* Örnek2:Menu fonksiyon
  // ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu=()=>{
console.log("===========================");
console.log("     JAVASCRİPT DERSİ      ");
console.log("===========================");

}

 menu();


 //! ############# ORNEK 3 YAS HESAPLAMA ##################

  // new Date()= bize şu anın tüm tarihini verir. .getFullYear() bu şekilde . ile istediğimiz tarihi çağırabiliriz (dakika saat gün ay vs)

 const yasHesapla=(yil)=> new Date().getFullYear()-yil

console.log(yasHesapla(1980));
console.log(new Date().getHours());




//! ################# ORNEK 4 silindir hacmi hesapla ########################
// toFixed(a)=virgüllü bir sayıda, virgülden sonra istediğimiz adette (a) rakam görmemizi sağlar

 const hacimHesapla=(r,h)=> Math.PI*r**2*h;

 console.log(hacimHesapla(4,5).toFixed(4));
 console.log(hacimHesapla(4,5).toFixed(2));
 console.log(hacimHesapla(4,5));


 //! ############## FiBONACCI #################
 //? 13 e ulasmam lazim 7 istedigi icin ama 5 dönmesi lazim buna bakk.... o yüzden n-2 yazdim = varken = olmasa n-1 yazmam gerekirdi....

 const fibonacciNumber=(n)=>{
    let fiboLeft=1
    let fiboRight=1
    let sumLeftRight=0
    let  toplam = 2  //! 2 ile basladik cunku ilk 1,1 i toplama dahil etmiyor.
    

    for (let i=1; i<=(n-2); i++) {
        sumLeftRight = fiboLeft + fiboRight;
        fiboLeft = fiboRight
        fiboRight = sumLeftRight
        toplam += fiboRight
    }
    console.log(toplam);
    return fiboRight

 }

 console.log(fibonacciNumber(7));