

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=").then((resp)=>resp.json()).then((dataa)=> {
//todo meals yazmamizin sebebi object olmasindan dolayi .... yazdik artik liste oldu 
console.log(dataa.meals);
ekranaBastir(dataa.meals)
})

function ekranaBastir(data) {
    document.querySelector(".food").innerHTML +=``
    //!todo#############################################################################################


}




