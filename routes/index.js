var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('get all the movies');
  connect.query(`SELECT * FROM tbl_movies m, tbl_genre g, tbl_mov_genre mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id`, (error, rows)=>{
    if (error){
      console.log(error);
    }else{
      res.render('home', {
        defaultMovie : rows[Math.floor(Math.random() * rows.length)],
        data : JSON.stringify(rows),
        mainpage : true,
        videopage : false
      });
    }
  });
});

// COMMENTS
router.get('/movies/:id/:movie', (req, res) => {
  console.log(req.params.id, req.params.movie);
  connect.query(`SELECT * FROM tbl_comments WHERE comments_movie = "${req.params.id}"`, (error, rows) => {
    if (error){
      console.log(error);
    }else{
      console.log(rows);
      res.render('moviePage', {
        movie : req.params.id,
        moviesrc : req.params.movie,
        data : JSON.stringify(rows),
        mainpage : false,
        videopage : true
      });
    }
  });
});

module.exports = router;
