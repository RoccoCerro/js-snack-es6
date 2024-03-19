function studente(id, nome, voto){
    return {
        id: id,
        nome: nome,
        voto: voto
    }
};

function nomeMaiuscolo(nome){
    const nomeMaiuscolo = nome.toUpperCase();
    return nomeMaiuscolo;
};

const elencoStudenti = [
    studente(213, "Marco della Rovere", 78),
    studente(110, "Paola Cortellessa", 96),
    studente(250, "Andrea Mantegna", 48),
    studente(145, "Gaia Borromini", 74),
    studente(196, "Luigi Grimaldello", 68),
    studente(102, "Piero della Francesca", 50),
    studente(120, "Francesca da Polenta", 84)
];

console.log(elencoStudenti);

// const elencoStudentiMaiuscolo = [];
// const elencoStudentiMigliori = [];
// const elencoStudentiVotoEId = [];

// for(let i = 0; i < elencoStudenti.length; i++){
//     const elemento = elencoStudenti[i];
//     const elementoNome = elemento.nome;
//     const id = elemento.id;
//     const voto = elemento.voto;
//     const nomeMaiusc = nomeMaiuscolo(elementoNome);

//     // elencoStudenti[i].nome = nomeMaiusc;
//     // elementoNome = nomeMaiusc;

//     elencoStudentiMaiuscolo.push(studente(id, nomeMaiusc, voto));

//     if(voto > 70){
//         elencoStudentiMigliori.push(studente(id, nomeMaiusc, voto));
//     }

//     if(voto > 70 && id > 120){
//         elencoStudentiVotoEId.push(studente(id, nomeMaiusc, voto));
//     }
// }

const elencoStudentiMaiuscolo = elencoStudenti.map(function(el,i,array){
    const nomeMaiusc = nomeMaiuscolo(el.nome);
    const voto = el.voto;
    const id = el.id;
    const newArray = {
        id: id,
        nome: nomeMaiusc,
        voto: voto
    }
    return newArray
})

const elencoStudentiMigliori = elencoStudentiMaiuscolo.filter((el)=>{
    if(el.voto > 70){
        return el
    }
});

const elencoStudentiVotoEId = elencoStudentiMaiuscolo.filter((el)=>{
    if(el.voto > 70 && el.id > 120){
        return el
    }
});

console.log(elencoStudentiMaiuscolo);
console.log(elencoStudentiMigliori);
console.log(elencoStudentiVotoEId);