//? : Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler  bildiniz" yazacaktır.

const rastgele = Math.ceil(Math.random()*20)  // 1 ve 20 dedigi icin yukari yuvarlama istiyoruz. 

console.log(rastgele);

let hak = 5;

while (hak>0) {
    const tahmin=+prompt("sayi tahmin ediniz")
    hak --;

    if (tahmin==rastgele) {console.log("Tebrikler Bildiniz🥳");
    break;}
    else if (tahmin<rastgele) console.log("tahmininizi arttiriniz👆", hak, "hakkiniz kaldi");
    else console.log("tahmininizi azaltiniz 👇", hak, "hakkiniz kaldi");


    if (hak==0) {
        console.log("üzgünüz bilemediniz");
    }
}



