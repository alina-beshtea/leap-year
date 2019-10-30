var final = function(year) {
  if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
    return true
  }else {
    return false
  }
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var finalYear = final(year);
    console.log(year, finalYear);

    if (finalYear === true) {
      $("#final").text(year + " is a leap year!");
    }else {
      $("#final").text(year + " is not a leap year!");
    }
    $("#final").show();
  });

});
