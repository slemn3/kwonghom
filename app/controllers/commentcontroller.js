exports.index = function (req,res) {
	console.log("CONTROLLER");
	console.log(App.env);
	commentService.test();
	res.send("aaa");
};

exports.addComment = function (req,res) {
	var current_date = (new Date()).valueOf().toString();
	var random = Math.random().toString();
	var id = crypto.createHash('sha1').update(current_date + random).digest('hex');
	res.send(id);
};



App.require('app/service/CommentService');
var crypto = require('crypto')
