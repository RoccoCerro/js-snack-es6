const tavoloVip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 
'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const nuovoTavoloVip = [];

for(let i = 0; i < tavoloVip.length; i++){
    const elemento = tavoloVip[i];

    const nuovoTavoloVipEl = {
        nomeTavolo: "Tavolo VIP",
        nomeOspite: elemento,
        posto: i + 1
    };

    nuovoTavoloVip.push(nuovoTavoloVipEl);
}

console.log(nuovoTavoloVip)