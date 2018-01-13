$(document).ready(function() {
    var url = "http://dfb55a22.ngrok.io/session"; 
    $.ajax({
           type: 'POST',
           url: url,
           success: function(data)
           {	
           		var main = document.getElementById("sessions");
           		data.forEach(function(ele){
           			var newNode = document.createElement('div');
           			newNode.innerHTML = "<div class='col s6 m4' id='"+ele._id+"'><div class='card hoverable'><div class='card-image'></div><div class='card-content'><p> "+ele.sessionName +"</p></div><div class='card-action' ><a href='#' class='removeSession' >Remove Session</a><br><a class='waves-effect waves-light modal-trigger' href='#modal2'>Add Presenter</a><div id='modal2' class='modal modal-fixed-footer'><div class='modal-content'><h4>Modal Header</h4><p>A bunch of text</p></div><div class='modal-footer'><a href='#!' class='modal-action modal-close waves-effect waves-green btn-flat '>Agree</a></div></div></div></div></div>";
           			main.appendChild(newNode);
           		})
           }
         });
});