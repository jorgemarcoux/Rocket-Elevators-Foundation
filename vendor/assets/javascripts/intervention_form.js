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
$("#select_build").change(function(){
    $("#select_bat").removeClass("d-none");
    $("#bat_label").removeClass("d-none");
    buildID = $(this).val();
    //Ajax request to interventions_controller.rb
    $.get("/interventions/get_batt_request", {building_id: buildID}, function(batteries) {
      $("#select_bat").empty();
      //Displaying each element of building array as a dropdown option
      batteries.forEach(battery => $("#select_bat").append(`<option value="${battery.id}"> ${battery.id} </option>`)); 
    });


  });//End battery dropdown listener

//Showing column dropdown once battery has been selected
$("#select_bat").change(function(){
    $("#select_col").removeClass("d-none");
    $("#col_label").removeClass("d-none");
    batteryID = $(this).val();
  });

//Showing elevator dropdown once column has been selected
$("#select_col").change(function(){
    $("#select-elev").removeClass("d-none");
    $("#elev_label").removeClass("d-none");
    elevID = $(this).val();
  });




  