

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





























