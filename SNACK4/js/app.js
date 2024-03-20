console.log("ciao");

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
  
const club = [
    {
        nome: 'Milan',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Juventus',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Roma',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Lazio',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Sassuolo',
        punti: 0,
        falliSubiti: 0
    },
]

club.forEach((el, i)=>{
    el.punti = getRandomIntInclusive(10,120);
    el.falliSubiti = getRandomIntInclusive(0,30)
})

console.log(club);

const newClub = [];
const ulDomElement = document.createElement("ul");
const bodyDomElement = document.querySelector("body")
bodyDomElement.prepend(ulDomElement);

club.forEach((el)=>{
    const {nome, falliSubiti} = el
    newClub.push({
        nome,
        falliSubiti
    })

    ulDomElement.innerHTML += `
        <li>${nome}</li>
        <li>Falli subiti: ${falliSubiti}</li>
    `
})

console.log(newClub)

