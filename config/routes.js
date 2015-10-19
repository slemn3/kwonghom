var VersionSetterMiddleware      = App.require("app/middleware/versionSetter")
module.exports = function(app) {
  // ROOT ROUTES
  app.all('/*', VersionSetterMiddleware())
  var CommentController = App.require("app/controllers/commentcontroller")
  app.get('/', CommentController.index)
  app.get('/comment/:who/:what', CommentController.addComment);


}
