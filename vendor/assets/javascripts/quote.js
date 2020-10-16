var fee, price, totalElev, totalCost, elevatorCostFee, elevatorCost;

var apartments, floors, basements, cages, occupants, type, prodLine;

function calc1() {
    
    // calculate avg apart per floor
    let avg = Math.ceil(apartments / floors);

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
    elevatorCost = totalElev * price;

    // cal fee for select opt
    elevatorCostFee = elevatorCost * fee;

    // cal total cost (fee + elev cost)
    totalCost = elevatorCostFee + elevatorCost;
}

function prodLineCheck () {
    if ($(type + " #quote_product_line_0").prop("checked")) {
        fee = 0.1;
        price = 7565;
    } else if ($(type + " #quote_product_line_1").prop("checked")) {
        fee = 0.13;
        price = 12345;
    } else if ($(type + " #quote_product_line_2").prop("checked")) {
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
    }
}

function setResult() {
    nan();
    $(type + ' #total_elev').val(totalElev);
    $(type + ' #cost').val(elevatorCost.toFixed(2) + '$');
    $(type + ' #fees').val(elevatorCostFee.toFixed(2) + '$');
    $(type + ' #total_cost').val(totalCost.toFixed(2) + '$');
    $('#quote_total_price').val(totalCost.toFixed(2));
}

function nan() {
    if (isNaN(totalElev)) {
        totalElev = 0;
    }

    if (isNaN(totalCost)) {
        totalCost = 0;
    }

    if (isNaN(elevatorCost)) {
        elevatorCost = 0;
    }

    if (isNaN(elevatorCostFee)) {
        elevatorCostFee = 0;
    }
}

$('input').on('keyup change', () => {
    findType();
    infoUpdate();
    prodLineCheck();
    findCalc();
    calcPrice();
    setResult();
});

$('.form-actions').addClass('center')
$('.form-group').addClass('col-4 mt-15')
$('.form-group.radio_buttons').removeClass('col-4').addClass('col-12 row')
$('.form-check').addClass('col-4').css('padding-left', '120px')
$('.form-check-input').css('display', 'inline-block')
$('.col-form-label').addClass('text-center')