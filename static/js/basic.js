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
		   		// alert(x.response.message); 
		   	}
		});
	});

});

function paintComments(commentObj){
	console.log('a');
	if(commentObj != null){
		var outputString = "";
		$.each(commentObj, function(i,e){
			outputString+="<div id='"+e.id+"'>";
			outputString+=e.date+" <br/>";
			outputString+=e.submitter+":  "+e.content+" <br/>";
			outputString+="</div>";


		});
	}
	$("#commentpane").html("");
	$("#commentpane").html(outputString);

}

function submitComment(){
	var who = "";
	var what = "";
	who = $("#name").val();
	what = $("#message").val();
	if(who != "" && what != "" && who != null && what != null){
		 $.ajax({
		    url: "http://ec2-54-149-119-45.us-west-2.compute.amazonaws.com:3000/comment/"+who+"/"+what+"?callback=paintComments",
		    type: 'GET',
		    dataType: 'jsonp',
		    cache: false,
		    jsonp: 'paintComments',
		    success: function(data){
		    	console.log(data);
		    },
		   	error: function (x, t, r) {	}
		});
	} else {
		console.log("Not a valid comment");
	}

}


