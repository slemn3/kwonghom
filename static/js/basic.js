$(document).ready(function(){
	if(window.location.href.indexOf("?ready") > -1){
		console.log("ready");
		$("#life").show();
	} else {
		$("body").hide();
	}
	
});

$("div.nav").bind('click', function(e){
	console.log($(this).html());
	$(".detail").hide();
	$("#"+$(this).text().toLowerCase()).show();
});
