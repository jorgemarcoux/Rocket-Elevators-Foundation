console.log('hi');

const inputEvery = $('#basements, #occupants, #floors, #apartments, #cages, #prod_prodLine-1, #prod_prodLine-2, #prod_prodLine-3');

var fee, price, totalElev, totalCost, elevatorCostFee, elevatorCost;

var apartments, floors, basements, cages, occupants, type, prodLine;

function calc1() {
    
    // calculate avg apart per floor
    let avg = Math.ceil(apartments / floors);
    console.log(floors);

    // calculate num elevator initial
    let elevatorInit = Math.ceil(avg / 6);

    // check every 20 floor
    let addCol = floors / 20;

    // num of col (+1 for starter, cause don't want multi by 0)
    var timeCol = Math.floor(addCol + 1);

    // total num of elev for res
    var totalElevator = timeCol * elevatorInit;

    return totalElevator;
}

function calc2() {

    // set the total num of elev to the num of cage entered
    totalElevator = Math.ceil(cages);

    return totalElevator;
}

function calc3() {

    // calculate total num of floor including basement
    var stories = parseInt(floors, 10) + parseInt(basements, 10);

    // calculate total num of occupant
    var totalOcc = parseInt(occupants, 10) * stories;

    // calculate num elevator
    var numElevator = Math.ceil(totalOcc / 1000);

    // calculate num of elevator columns
    var elevatorCol = Math.ceil(stories / 20);

    // calculate num elevator per elevator col
    var numElevatorCol = Math.ceil(numElevator / elevatorCol);

    // calculate total num of elevator
    totalElevator = numElevatorCol * elevatorCol;

    return totalElevator;
}

function calcPrice() {
    // cal cost for elev * price (7565, 12345, 15400)
    console.log("total elev calc_cost :", totalElev);

    elevatorCost = totalElev * price;

    // cal fee for select opt
    elevatorCostFee = elevatorCost * fee;

    // cal total cost (fee + elev cost)
    totalCost = elevatorCostFee + elevatorCost;
}

function prodLineCheck () {
    if ($(type + " #prod_prodLine-1").prop("checked")) {
        fee = 0.1;
        price = 7565;
    } else if (type + $(" #prod_prodLine-2").prop("checked")) {
        fee = 0.13;
        price = 12345;
    } else if ($(type + " #prod_prodLine-3").prop("checked")) {
        fee = 0.16
        price = 15400;
    }
}

function findCalc() {
    if (type == '#collapse10') {
        totalElev = calc1();
        
    } else if (type == '#collapse11') {
        totalElev = calc2();

    } else if (type == '#collapse12') {
        totalElev = calc3();

    } else if (type == '#collapse13') {
        totalElev = calc3();

    } else {
        // "SET ALERT or something"

    }
}

function infoUpdate () {
    apartments = parseInt($(type + ' #apartments').val(), 10);
    console.log("apart :", apartments);
    console.log("$ apart id :", $(type + ' #apartments'));
    floors = parseInt($(type + ' #floors').val(), 10);
    basements = parseInt($(type + ' #basements').val(), 10);
    cages = parseInt($(type + ' #cages').val(), 10);
    occupants = parseInt($(type + ' #occupants').val(), 10);
}

function findType() {
    if ($('#collapse10').hasClass('show')) {
        type = '#collapse10';

    } else if ($('#collapse11').hasClass('show')) {
        type = '#collapse11';

    } else if ($('#collapse12').hasClass('show')) {
        type = '#collapse12';

    } else if ($('#collapse13').hasClass('show')) {
        type = '#collapse13';

    } else {
        type = '0';
        $('input').val('');
    }
}

function setResult() {
    $(type + ' #total_elev').val(totalElev);
    $(type + ' #total_elev_cost').val(elevatorCost);
    $(type + ' #fees').val(elevatorCostFee);
    $(type + ' #total_cost').val(totalCost);
}

function main() {
    findType();
    infoUpdate();
    prodLineCheck();
    findCalc();
    calcPrice();
    setResult();
}

$('input').on('keyup change', () => {
    main();
    console.log(type);
})
