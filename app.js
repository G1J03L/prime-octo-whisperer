var source = $("#message-template").html();
var template = Handlebars.compile(source);
var uid = "Joel";
var newMessage = "";

$(".btn").click( function () {
	newMessage = $("#message").val().toString();
	
	// Local timestamp for chat records
	var currentTime = new Date();
	var localeStamp = currentTime.toLocaleString();
	
	var data = {
		uid: uid,
		date: localeStamp,
		message: newMessage
	};
	
	if ($("#message").val().length == 0) {
		$("#message").focus();
		return;
	}
	else {
		console.log(data); 		// Testing
		$("#thread").append($(template(data)).html() + "\n");
		$("#message").val("").focus();
	}
	
	// Not working - also, not sure why?
	/*$('#thread').on('change', function(e) { 
		console.log('Do you sense something?');
		e.scrollToBottom(); 
	}); */
});

// Test function for autoscrolling
/*function scrollToBottom() {
   $('#thread').scrollTop($('#thread')[0].scrollHeight);
} */

$("#message").keydown( function (event) {
	if (event.keyCode == 13 || event.keyCode == 10) 
	{
		event.preventDefault();
		$(".btn").click();
		$("#message").val("");
	}
});