var commentDAO;

CommentService = function(dbsession){	
		//	startup: function(host, port, dbname, callback){
		this.commentDAO = new CommentDAO(dbsession);
};


CommentService.prototype.test = function(){
	console.log("------------- Starting Twitter Stream ------------ "+ this.commentDAO.getSize());
}

App.require('app/models/Comment');
App.require('config/database');


exports.CommentService = CommentService;