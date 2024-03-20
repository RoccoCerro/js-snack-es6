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

let pesoMinore = 3000;
let biciPiuLeggera = "";

for (let i = 0; i < bici.length; i++){
    const elemento = bici[i];

    if (elemento.peso < pesoMinore){
        pesoMinore = elemento.peso;
        biciPiuLeggera = elemento.nome;
    }
}

console.log(`La bici più leggera è ${biciPiuLeggera} con un peso di ${pesoMinore}`)