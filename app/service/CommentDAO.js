var dbsession;

CommentDAO = function(dbsession){
	 this.dbsession = dbsession;
	 
};

CommentDAO.prototype.getSize = function(){
	this.dbsession.collection('comment', function(error, data){
	 	data.find().toArray(function(error, results){
	 		console.log('Size of comment DB is '+results.length);
	 	});
	 });

};

CommentDAO.prototype.addComment = function(comment){
		this.dbsession.collection('comment', function(error, data){
	 	data.insert(comment, function(error, results){
	 		if(error != null){
	 			console.log('Error adding Comment: '+error);
	 		} else {
	 			console.log('Successfully retrieved comment '+results);	
	 			return results;
	 		}
	 		
	 	});
	 });

};



App.require("config/database.js")


exports.CommentDAO = CommentDAO;