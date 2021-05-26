let player = {
    name: 'Lucas',
    lastName: 'Pinheiro',
    age: 20,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

function imprimirTextos(player) {
    console.log(`O jogador ${player.name} ${player.lastName} tem ${player.age} anos de idade.`);
    console.log(`O jogador ${player.name} foi campeão mundial em ${player.bestInTheWorld}.`);
    console.log(`O jogador ${player.name} possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`);
}

imprimirTextos(player);