var myVideoApp = {

  movieReviews(data, reviews){
    data.forEach(review => {
      myVideoApp.vm.reviews.push(review);
    })
  },

  vm : new Vue ({
    delimiters : ["${", "}"],
    el : "#video",
    data : {
      reviews : [],
      numStars : 3,
      review : ""
    },
    methods : {
      // do a post with all the new review stuff
      addReview(){
        //fetch here
        let movieId = document.querySelector('.movId').textContent;

        fetch('/api',{
          method : 'post',
          headers : {
            'Accept' : 'applications/json, text-plain, */*',
            'Content-type' : 'application/json'
          },
          body : JSON.stringify({
            id : movieId,
            stars : this.numStars,
            comment : this.review
            })
          })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) =>{
            console.log(error);
          })
        }
      }
    })
};
myVideoApp.movieReviews(appData.movies);
