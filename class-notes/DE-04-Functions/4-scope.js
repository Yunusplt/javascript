// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");



//! global scope

let first=5;
let second=12;
let third=123;

console.log(first,second,third);

const scopeDeneme=function(){

    first=8;

    let second = 45;
    console.log(second);

    let fourth=1234

    return fourth
}

//todo console.log ile yazdirirsin. disarda kullanmazsin. buna dikkat. ekrana yazdimak farkli kullanmak farkli...
scopeDeneme();

console.log(scopeDeneme());  // retunü de calistirir. icerdeki log u da.
console.log(first);
console.log(second);
// console.log(fourth);  not defined
scopeDeneme()