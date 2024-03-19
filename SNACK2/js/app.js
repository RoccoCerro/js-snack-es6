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

const elencoStudentiMaiuscolo = [];

for(let i = 0; i < elencoStudenti.length; i++){
    const elemento = elencoStudenti[i];
    const elementoNome = elemento.nome;
    const nomeMaiusc = nomeMaiuscolo(elementoNome);
    console.log(nomeMaiusc);

    // elencoStudenti[i].nome = nomeMaiusc;
    // elementoNome = nomeMaiusc;

    elencoStudentiMaiuscolo.push(nomeMaiusc);
}

console.log(elencoStudentiMaiuscolo)