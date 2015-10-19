$(document).ready(function(){
	var height = $(window).height();
	$(".fittoheight").css("height", height);

	$('li a[href*="more"]').bind('click', function(event){
		console.log('trigger');
	   $.ajax({
		    url: "http://ec2-52-24-120-210.us-west-2.compute.amazonaws.com:3000?callback=paintComments",
		    dataType: "jsonp",
		    success: function( response ) {
		    			        console.log( 'a' ); // server response

		        alert( response ); // server response
		    }
		});
	});

});

function paintComments(commentObj){
	console.log('a');
}



