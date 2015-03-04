// get tweets

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	sql.query('SELECT * FROM Tweets',function(err,rows,fields){
	if(err) throw_err(err,res);
	res.json({'Tweets':rows});
});

});

function throw_err(err, res) {
    res.json({ 'error': {
        message: err.message,
        error: err
    }});
    throw err;
}

var projection = function(req,res){
  pagination(req, res, req.query.fields, 'Tweets');
};


router.get('/:search', function(req, res) {
	console.log(req.params.search);
	var blah = "SELECT * FROM Tweets WHERE Text like '%" +req.params.search +"%'";
	
	console.log(blah);
	sql.query( blah, function(err,rows,fields){
	if(err) throw_err(err,res);
	res.json({'Tweets':rows});
});

});


module.exports = router;