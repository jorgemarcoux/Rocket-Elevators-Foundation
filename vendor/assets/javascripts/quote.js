console.log('hi');

const txtNumElevator = "The number of elevator required is : ";

const $apartments = $('#apartments'), $floors = $('#floors'), $basements = $('#basements'), $cages = $('#cages'), $occupants = $('#occupants');

const inputEvery = $('#basements, #occupants, #floors, #apartments, #cages, #prod_prodLine-1, #prod_prodLine-2, #prod_prodLine-3');

var fee, price;

let apartments, floors, basements, cages, occupants, type, prodLine;

function calc1() {
    
    // calculate avg apart per floor
    let avg = Math.ceil(nbApart / nbFloor);

    // calculate num elevator initial
    let elevatorInit = Math.ceil(avg / 6);

    // check every 20 floor
    let addCol = nbFloor / 20;

    // num of col (+1 for starter, cause don't want multi by 0)
    var timeCol = Math.floor(addCol + 1);

    // total num of elev for res
    var totalElevator = timeCol * elevatorInit;

    return totalElevator;
}

function calc2() {

    // calculate total num of floor including basement
    var stories = parseInt(nbFloor, 10) + parseInt(nbBase, 10);

    // calculate total num of occupant
    var totalOcc = parseInt(nbOcc, 10) * stories;

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

function calc3() {

    // set the total num of elev to the num of cage entered
    totalElevator = Math.ceil(nbCages);

    return totalElevator;
}

function prodLineCheck () {
    if ($("#opt1").prop("checked")) {
        fee = 0.1;
        price = 7565;
    } else if ($("#opt2").prop("checked")) {
        fee = 0.13;
        price = 12345;
    } else if ($("#opt3").prop("checked")) {
        fee = 0.16
        price = 15400;
    }
}

function resetInput () {
    $('input').val(0);
    $("#total_elev").val(0);
}

function infoUpdate () {
    apartments = parseInt($apartments.val(), 10);
    floors = parseInt($floors.val(), 10);
    basements = parseInt($basements.val(), 10);
    cages = parseInt($cages.val(), 10);
    occupants = parseInt($occupants.val(), 10);
}

function checkNaN () {
    if (isNaN(apartments) || isNaN(floors) || isNaN(basements) || isNaN(cages) || isNaN(occupants)) {
        return false;
    } else {
        return true;
    }
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
    }
}

function main() {
    findType();
    infoUpdate();

}

$('input').on('keyup change', () => {
    console.log(findType());
})
