var express = require('express');
var connect = require('../utils/sqlConnect');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.urlencoded({extended : false}));
router.use(bodyParser.json());

router.post('/', function(req, res) {
  console.log('post a review');
  connect.query(`INSERT INTO tbl_comments (comments_id, comments_auth, comments_copy, comments_date, comments_movie, comments_rating) VALUES (NULL, NULL, "${req.body.comment}", CURRENT_TIMESTAMP(), "${req.body.id}", "${req.body.stars}")`, (error, data)=>{
    if (error){
      console.log(error);
    }else{
      res.json(data);
    }
  });
});

module.exports = router;
