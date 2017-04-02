$(document).ready(function(){

  $('#companyNameInput').keyup(function () {
    $('#display').text($(this).val());
  });

  $('#ajaxButton').on('click',function() {

    var companyName = $('#display').text();

    $.ajax({
      'url': 'http://apis.is/company',
      'type': 'GET',
      'dataType': 'json',
      'data': {'name':companyName},
      'success': function(response) {
        var result = JSON.stringify(response);
        $.each(response['results'], function(key, value){
          $('.companyInfo').append(
          "<h3>" + value['name'] + "</h3>" +
          "<div class='list-group'>" +
          "<li class='list-group-item'>Name: " + value['name'] + "</li>" +
          "<li class='list-group-item'>Number: " + value['sn'] + "</li>"+
          "<li class='list-group-item'>Address: " + value['address'] + "</li>"
          +"</div>");
        })
        $('.companyInfo').accordion();
        //prevent data to appear wrongly?
        $( "#ajaxButton" ).button({
          disabled:true
        });

      }

    })

  })
  //jQuery-UI Stuff
  $( "#ajaxButton" ).button({
  classes: {
    "ui-button": "highlight"
  }
  });


  //end of jQuery-UI stuff
});
