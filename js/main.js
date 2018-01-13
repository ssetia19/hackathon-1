function fun(a){
	// alert(a);
	// if(a=="1"){
	// 	document.getElementById("reg").style.display = "none";
	// }
	// else{
	// 	document.getElementById("reg").style.display = "block";
	// }
}


$("#log").submit(function(e) {
	var who = document.getElementsByClassName('active');
	document.getElementById('who').value = who[0].innerHTML;
    var url = "http://dfb55a22.ngrok.io/login/"+who[0].innerHTML; // the script where you handle the form input.
    $.ajax({
           type: 'POST',
           url: url,
           data: $("#log").serialize(), // serializes the form's elements.

           success: function(data)
           {
           		if(data=="success"){
                window.location.href = "./html/"+who[0].innerHTML+".html";
            	}
           		else
           		alert("username/password incorrect");
           }
         });

    e.preventDefault();
});

$("#sub").submit(function(e) {
	var who = document.getElementsByClassName('active');
	document.getElementById('who1').value = who[0].innerHTML;
    var url = "http://dfb55a22.ngrok.io/signup/"+who[0].innerHTML; // the script where you handle the form input.
    $.ajax({
           type: 'POST',
           url: url,
           data: $("#sub").serialize(), // serializes the form's elements.
           success: function(data)
           {
           		if(data=="success"){
                window.location.href = "./html/"+who[0].innerHTML+".html";
            }
           		else
           		alert("some error occured");
           }
         });

    e.preventDefault();
});


$("#addSession").submit(function(e) {
    var url = "http://dfb55a22.ngrok.io/session/add"; // the script where you handle the form input.
    $.ajax({
           type: 'POST',
           url: url,
           data: $("#addSession").serialize(), // serializes the form's elements.
           success: function(data)
           {
           		if(data=="success"){
                window.location.href = "./organiser.html";
            }
           		else
           		alert("some error occured");
           }
         });

    e.preventDefault();
});

$("#sessions").on("click",".removeSession",function(e) {
    var url = "http://dfb55a22.ngrok.io/session/remove";
    console.log(this.parentElement.parentElement.parentElement.id);
    $.ajax({
           type: 'POST',
           url: url,
           data: { id : this.parentElement.parentElement.parentElement.id },
           success: function(data)
           {
           		if(data=="success"){
                window.location.href = "./organiser.html";
            }
           		else
           		alert("some error occured");
           }
         });

    e.preventDefault();
});




$("#modal2").click(function(e) {
    var url = "http://dfb55a22.ngrok.io/event/presenters"; // the script where you handle the form input.
    $.ajax({
           type: 'POST',
           url: url,
           data: $("#remove").serialize(), // serializes the form's elements.
           success: function(data)
           {
           		if(data=="success"){
                window.location.href = "./organiser.html";
            }
           		else
           		alert("some error occured");
           }
         });

    e.preventDefault();
});

  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
  

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
  
   $('.timepicker').pickatime({
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });
        