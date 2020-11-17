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
  });

//Showing battery dropdown once building has been selected
$("#select_build").change(function(){
    $("#select_bat").removeClass("d-none");
    $("#bat_label").removeClass("d-none");
    buildID = $(this).val();
  });

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




  