$(document).ready(function(){
	var height = $(window).height();
	$(".fittoheight").css("height", height);

	$('li a[href*="more"]').bind('click', function(event){
		console.log('trigger');

	   $.ajax({
		    url: "http://ec2-54-149-119-45.us-west-2.compute.amazonaws.com:3000?callback=paintComments",
		    type: 'GET',
		    dataType: 'jsonp',
		    cache: false,
		    jsonp: 'paintComments',
		    success: function(data){
		    	console.log(data);
		    },
		   	error: function (x, t, r) { 
		   		alert(x.response.message); 
		   	}
		});
	});

});

function paintComments(commentObj){
	console.log('a');
	alert('b '+commentObj);
}



