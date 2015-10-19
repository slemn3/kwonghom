var 	commentDAO
	,	crypto = require('crypto')


CommentService = function(dbsession){	
		//	startup: function(host, port, dbname, callback){
		this.commentDAO = new CommentDAO(dbsession);
};


CommentService.prototype.test = function(){
	console.log("------------- Starting Twitter Stream ------------ "+ this.commentDAO.getSize());
}

CommentService.prototype.processComments = function(data, res){
	console.log("Found data: "+ data);
	res.send("paintComments("+data+")");
}

CommentService.prototype.getComments = function(offset, pagesize, res){
	var results = this.commentDAO.getCommentsPaginate(offset, pagesize, res, this.processComments);
}

CommentService.prototype.newComment = function(input){
	var current_date = (new Date()).valueOf().toString();
	var random = Math.random().toString();
	var id = crypto.createHash('sha1').update(current_date + random).digest('hex');
	console.log("New Comment ID is "+ id);

	//id, submitter, date, content
	var commentObj = new Comment(id, "default", new Date(), input);
	console.log(commentObj.toString());

	console.log("Before add: "+this.commentDAO.getSize());
	this.commentDAO.addComment(commentObj);
	console.log("After add: "+this.commentDAO.getSize());

}

App.require('app/models/Comment');
App.require('config/database');


exports.CommentService = CommentService;