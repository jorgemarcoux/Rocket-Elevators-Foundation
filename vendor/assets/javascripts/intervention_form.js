//Getting dropdown values
customerID = null;
buildID = null;
batteryID = null;
elevID = null;

//Showing building dropdown once customer has been selected
$("#select_customer").change(function(){
    $("#build_label").removeClass("d-none");
    $("#select_build").removeClass("d-none");
    customerID = $(this).val();
    //Ajax request to interventions_controller.rb
    $.get("/interventions/get_build_request", {customer_id: customerID}, function(buildings) {
      $("#select_build").empty();
      //Displaying each element of building array as a dropdown option
      buildings.forEach(building => $("#select_build").append(`<option value="${building.id}"> ${building.administrator_full_name} </option>`)); 
    });

  });//End customer dropdown listener

//Showing battery dropdown once building has been selected
$("#select_build").on('click change', function(){
    $("#select_bat").removeClass("d-none");
    $("#bat_label").removeClass("d-none");
    buildID = $(this).val();
    //Ajax request to interventions_controller.rb
    $.get("/interventions/get_batt_request", {building_id: buildID}, function(batteries) {
      $("#select_bat").empty();
      //Displaying each element of batteries array as a dropdown option
      batteries.forEach(battery => $("#select_bat").append(`<option value="${battery.id}"> ${battery.id} </option>`)); 
    });


  });//End battery dropdown listener

//Showing column dropdown once battery has been selected
$("#select_bat").on('click change', function(){
    $("#select_col").removeClass("d-none");
    $("#col_label").removeClass("d-none");
    batteryID = $(this).val();
    //Ajax request to interventions_controller.rb
    $.get("/interventions/get_col_request", {battery_id: batteryID}, function(columns) {
      $("#select_col").empty();
      //Displaying each element of columns array as a dropdown option
      columns.forEach(column => $("#select_col").append(`<option value="${column.id}"> ${column.id} </option>`)); 
    });
  });

//Showing elevator dropdown once column has been selected
$("#select_col").on('change click', function(){
    $("#select-elev").removeClass("d-none");
    $("#elev_label").removeClass("d-none");
    columnID = $(this).val();
   //Ajax request to interventions_controller.rb
   $.get("/interventions/get_elev_request", {column_id: columnID}, function(elevators) {
    $("#select-elev").empty();
    //Displaying each element of elevators array as a dropdown option
    elevators.forEach(elevator => $("#select-elev").append(`<option value="${elevator.id}"> ${elevator.serial_number} </option>`)); 
  });
  });

  //Alert after submit form
  $("#btnInter").click(function(){
      alert("Intervention request successfully created")
  });

 




  