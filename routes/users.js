var express = require('express');
var router = express.Router();

/* GET user listing. */

projection = function(req,res){
  pagination(req, res, req.query.fields, 'user');
};

router.get('/', function(req, res){
	if(req.query.fields)
		return projection(req, res);
	else
		return pagination(req, res, '*', 'user');
});
//e.g http://localhost:3000/users?offset=0&limit=10

module.exports = router;
