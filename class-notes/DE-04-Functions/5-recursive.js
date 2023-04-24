// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir.


//! sayma sayilarinin ilk n terimin toplamini bulunuz. 

let toplam = 0;
let sayi = 6

for (let i = 1; i <=sayi ; i++) {
  
    toplam = toplam +i
}
 console.log("ilk 6 terim toplami :", toplam )


 //todo recursive ile ayni soru cözumu ##########################

 //* aynı soruyu recursive ile çözelim

const toplamlar = (n) => {
  if (n < 1) {
    return n;
  } else return toplamlar(n - 1) + n;
};

console.log(toplamlar(6));


//!########################  FIBONACCI  ##############################

//* ORNEK: Girilen n. terimdeki Fibonacci sayısını  yazdıran fonksiyonu recursive olarak kodlayınız.
console.log("************ 5- RECURSION *************");

//? FIBONACCI terimleri: 1, 1, 2, 3, 5, 8, 13, 21, ...
//!fibonacci dizisindeki ilk n. terimi  bulma fonksiyonu


// todo  uzun yol 

const fiboFind = (n) => {
 let fiboLeft = 1
  let fiboRight = 1

  for (let i = 0; i < n-2 ; i++) {

 

  let fiboNewRight = fiboLeft + fiboRight
  fiboLeft = fiboRight
  fiboRight = fiboNewRight
    
  }
  return fiboRight
}

console.log(fiboFind(6))

//todo with recursive 

const fibo=(n)=>{

if(n<2){
    return n  //! n 1 ve 0 degerleri alir. 
}else


return  fibo(n-1)+fibo(n-2)

}

console.log(fibo(6));



