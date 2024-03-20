console.log("ciao");

const bici = [
    {
        nome: 'Bianchi',
        peso: 20
    },
    {
        nome: 'Colnago',
        peso: 22
    },
    {
        nome: 'Pinarello',
        peso: 18
    },
    {
        nome: 'Olmo',
        peso: 15
    },
    {
        nome: 'Cinelli',
        peso: 25
    },
];

let pesoMin = undefined;
let biciPiuLeggera = "";
let indexWithPesoMin = -1;

for (let i = 0; i < bici.length; i++){

    const { peso } = bici[i]; // const peso = bici[i].peso

    if (i === 0) {
        pesoMin = peso;
        indexWithPesoMin = 0;
    } else {
        if (peso < pesoMin) {
            pesoMin = peso;
            indexWithPesoMin = i;
        }
    }
}

const biciWithPesoMin = bici[indexWithPesoMin]; // object
const { nome, peso } = biciWithPesoMin;

console.log(nome, peso);

//console.log(`La bici più leggera è ${biciPiuLeggera} con un peso di ${pesoMinore}`)

