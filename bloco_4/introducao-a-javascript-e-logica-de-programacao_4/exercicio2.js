let cars = ['Saab', 'Volvo', 'BMW'];

function listaCarros(cars) {
    for (let index in cars) {
        console.log(cars[index]);
    }
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};

function listaCarros2(car) {
    for (let index in car) {
        console.log(index, car[index]);
    }
}

listaCarros2(car);