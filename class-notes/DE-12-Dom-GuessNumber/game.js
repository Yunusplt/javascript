

let rastgeleSayi = Math.ceil(Math.random()*20)

console.log(rastgeleSayi);

let mesaj = document.querySelector(".msg")

let skor = 10
//skor u  index.html deki skor u buraya çekerekte yapabiliriz ama çok kullanacağımız için bu daha tercih edilen yol

let enYuksekSkor = 0

//! Check butonuna basinca olacaklar.

document.querySelector(".check").addEventListener("click", () =>{

   const tahmin = document.querySelector(".guess").value
//! Tahmin girilmeden check e basilirsa !tahmin yani false bos 
   if(!tahmin){

    mesaj.textContent = "Lütfen bir tahmin giriniz!"

   }else if(tahmin == rastgeleSayi){
    mesaj.textContent = "Tebrikler Bildiniz 🎉"
    document.querySelector("body").style.backgroundColor = "green"
    document.querySelector(".number").textContent = rastgeleSayi

    //! topScore kontrolü yap

        if(skor > enYuksekSkor){
            enYuksekSkor=skor
            document.querySelector(".top-score").textContent = enYuksekSkor
        }



    //! tahmin yanlis ise
   }else {

        //! skor 1den büyük oldugu sürece devam et. 
        if(skor>1){

            skor--
            document.querySelector(".score").textContent = skor
            tahmin < rastgeleSayi ? mesaj.textContent = "arttir" : mesaj.textContent = "azalt"

        }else{
            mesaj.textContent = "Oyunu Kaybettiniz"
            document.querySelector(".score").textContent = 0
            document.querySelector("body").style.backgroundColor = "red"
        }

   }

})


//! Again butonuna basilinca olacaklar. 
//!#2d3436 

document.querySelector(".again").onclick=()=>{

    document.querySelector("body").style.backgroundColor = "#2d3436"
    document.querySelector(".guess").value = ""
    rastgeleSayi = Math.ceil(Math.random()*20)
    skor = 10
    document.querySelector(".score").textContent = skor
    document.querySelector(".number").textContent = "?"
    mesaj.textContent = "Oyun Yeni Oyuncu Icin Basliyor!!!"

}
