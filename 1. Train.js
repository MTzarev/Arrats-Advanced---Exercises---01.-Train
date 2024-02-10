function train(array) {
    let wagons = array[0].split(` `).map(Number);
    let countPeoples = Number(wagons[1]);
    let maxPeoples = Number(array[1]);

    for (let i = 2; i < array.length; i++) {
        let command = array[i];
        let addPassengers = command.split(` `)
        if (command.includes(`Add`)) {
            addPassengers = Number(addPassengers[1]);
            wagons.push(addPassengers);
        } else {
            addPassengers = Number(addPassengers[0]);

            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + addPassengers <= maxPeoples) {
                    wagons[j] += addPassengers;
                    break;
                }
            }
        }
    }



    console.log(wagons.join(` `));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
//train(['0 0 0 10 2 4','10','Add 10','10','10','10','8','6']);