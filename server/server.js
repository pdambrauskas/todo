var PORT = 3040
var app = require('./app');

app.set('port', PORT);

var server = app.listen(process.env.PORT || PORT);
