

document.querySelector("h1").style.color ="red"
document.querySelector("h1").style.textAlign = "center"

let resim = document.querySelector(".resim")

let ses1 = document.querySelector(".ses1")

//! ara butonu tiklandiginda ############################

document.querySelector(".ara").onclick=()=>{

    resim.src="./img/img.gif"
    ses1.play()
    // sesin volume'ünü 0 ile 1 arasinda deger vererek ayarlayabilirsiniz.
    ses1.volume=0.05

}


//! baglat butonu tiklandiginda  ################################

document.querySelector(".baglat").onclick=()=>{

    resim.src="./img/telbağla.gif"
    // pause() komutuyla calan audio sesini durdurabilirsiniz. 
    ses1.pause()

}


//! konus butonu tiklandigi zaman  ##########################


document.querySelector(".konus").onclick=()=>{

    resim.src="./img/telefon.gif"
    ses1.pause()

}
// ! mause ile resmin üzerine gelinince. #############################################

// resim.onmouseover=()=>{}

//todo FARKLI YOLLLLLL 

resim.addEventListener("mouseover", ()=>{
    
    resim.src="./img/aslan1.jpeg"

})

resim.addEventListener("mouseout", ()=>{
    
    resim.src="./img/aslan2.jpeg"

})

//!klavyeden inputa veri girişi yapılırken elimizi tuştan çektiğimizde varolan değişiklik

const textInput =  document.querySelector("#textBox")
const tikInput = document.querySelector("#checkBox")

//?  onkeyup    tusa basip parmagimizi kaldirdigimiz zaman. 

textInput.onkeyup=()=>{

    // if(tikInput.checked==true)     asagidakinin aynisi
    if(tikInput.checked){

            textInput.value=textInput.value.toUpperCase()

    }else{
        textInput.value=textInput.value.toLowerCase()
    }
}

// checked=metodu checkbox inputun tikli olup olmadığını kontrol eder. tıklanmışsa true döndürür
//inputa veri girişi yaptığımızda, küçük input tikliyse benim büyük inputa girdiğim harfleri büyüt, aksi durumda küçült


//!########################################################################
//! Liste basligi ekliyoruz...

//? HTML'de H1 elementi olusturma
const baslik = document.createElement("h1")

//? H1 elementine class name assign
baslik.className="baslik2"

//? Programlara dilleri adindaki text create
const yazi = document.createTextNode("Programlama Dilleri")

//? Programlara dilleri adindaki texti assign to into H1
baslik.appendChild(yazi)

document.querySelector(".input-div").after(baslik)

//!  *******************kisayol**************************************

const bolum = document.querySelector(".border")

bolum.innerHTML=`<h1 class="baslik2 text-center">Programlama Dilleri</h1>` + bolum.innerHTML

//!#################################################################################

//!languages inputuna girilen degerleri, ul ye eklemek.

//!uzun yol 

const dil = document.querySelector(".languages")

  //* yeni girilen satiri saklamak icin bir li olusturduk.

// const yeniLi = document.createElement("li")
  //* yeni li icin textnode olusturduk
// const text =  document.createTextNode(dil.value)
  //*olusturdugumuz texnode'u yeni li'ye bagladik.
// yeniLi.appendChild(text)
  //* yeni eklenen satiri var olan listeye (ul) baglayalim.

const liste = document.querySelector(".liste")

// liste.appendChild(yeniLi)


document.querySelector(".ekle").onclick=()=>{

    //?kısayol
liste.innerHTML+= ` <li> ${dil.value} </li>`
// liste.innerHTML = innerHTML + ` <li> ${dil.value} </li>`

dil.value=""    // input kutusu bos gözükmesi icin.
}


//! sil butonuna basılınca ul listesinden li elemanını silmek için removeChild metodunu kullanacağız

document.querySelector(".sil").onclick=()=>{

    // liste.removeChild(liste.lastElementChild)
    // liste.removeChild(liste.firstElementChild)
    liste.removeChild(liste.children[2])

}





















