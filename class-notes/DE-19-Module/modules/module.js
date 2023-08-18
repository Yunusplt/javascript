console.log("module'den selamlar");

export const CALISMA_SAATI = 40

export function topla(S1, S2) {
  return S1 + S2;
}

let counter = 0

const inc = (miktar) => {
    counter += miktar
    return counter
}

const dec = (miktar) => {
    counter -= miktar
    console.log(counter);
}

const benimAdim="Ashley"

//todo### Toplu export ###
export {inc,dec,benimAdim}


//todo ### bir sayfada sadece 1 kez export default yazilabilir... ###
export default function ugurla() {
    console.log("Elveda JS Hosgeldin React");
}

