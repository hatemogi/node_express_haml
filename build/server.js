(function() {
  var app, express;
  express = require('express');
  app = express.createServer();
  app.configure(function() {
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
    app.use(express.logger());
    app.use(express.bodyParser());
    return app.register('haml', require('hamljs'));
  });
  app.get('/', function(req, res) {
    return res.render('index.haml');
  });
  app.listen(4000);
}).call(this);
