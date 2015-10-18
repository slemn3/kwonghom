exports.index = function (req,res) {
	console.log("CONTROLLER");
	console.log(App.env);
	commentService.test();
	res.send("aaa");
};

exports.addComment = function (req,res) {
	console.log(req.param("text"));
	var response = commentService.newComment(req.param("text"));
	res.send(response);
};



App.require('app/service/CommentService');