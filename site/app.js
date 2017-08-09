var express = require('express');
var handlebars = require('express-handlebars');
var app = express();
var path = require('path');

//add static middleware
app.use(express.static(__dirname + '/public'));



//view engine setup
app.set('views',path.join(__dirname + '/views/layouts'));
app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

/*
Assigns a value to the app object's 'port' property.{port:}

If the environment port is provided use it else use port 3000.
*/

app.set('port', process.env.PORT || 3000);  
 
//app.get is the method by which we are adding routes (app.VERB) ==>get,post,etc

/*
app.get(path, function)

*/

app.get('/', function(req,res){
    res.render('home');
});
app.get('/about',function(req,res){
    res.render('about');
});

//custom 404 page
app.use(function(req,res,next){
    res.status(404);
    res.render('404');
});

//custom 500 page
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:'+
app.get('port')+'; press Ctrl+C to terminate.');
});
