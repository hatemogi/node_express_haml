express = require 'express'
app = express.createServer()

app.configure ->
  app.use express.errorHandler(dumpExceptions: true, showStack: true)
  app.use express.logger()
  app.register 'haml', require('hamljs')

app.get '/', (req, res) ->
  res.render 'index.haml'

app.listen 4000