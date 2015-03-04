var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
fs.readFile('/Users/rishina/desktop/TwitterMap/twitheatmap.html', function (err, html) {
    if (err) {
        throw err; 
    }       
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();
});
  // res.render('index', { title: 'Express' });
});

module.exports = router;
