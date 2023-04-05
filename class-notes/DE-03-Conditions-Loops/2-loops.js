// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************


for (let index = 1; index <=10; index++){
    console.log(index, "MERHABA");
}

// 1 den n e kadar olan sayilarin toplami 

const N = +prompt("lütfen N'i giriniz.")

let toplam = 0

for (let i = 1; i <= N ; i++)
{
    toplam = toplam + i
}

console.log(toplam);



//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.


const sayi=+prompt("asallik kontrolü için bir sayi giriniz")
let asal=true;

for(let i = 2 ; i < sayi; i++){

 if(sayi % i ==0 ) {
    asal=false
 }


}
console.log(asal == true ? " asaldir" : "asal değildir");

//! console.log(asal ? " asaldir" : "asal değildir");  böylede yazilabilir

// aksi yazilacagi zaman böyle yazilir !asal ? "asaldir" : "asal degildir"