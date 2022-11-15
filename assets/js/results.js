const moviePosterResults = document.querySelector('.movie-poster-results')
const omdbInfo = document.querySelector('.omdb-info')


//takes the movie title from local storage to get information for the movie
var requestOptionsTwo = {
    method: 'GET',
    redirect: 'follow'
  };
var movieTitle = localStorage.getItem("selectedMovie")
  fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=90097123`, requestOptionsTwo)
    .then(response => response.json())
    .then(function (result) {
        let movieImage = document.createElement("img");
        movieImage.src = localStorage.getItem("selectedPoster")
        movieImage.classList = "w-100 h-100 rounded-5 py-3"
        moviePosterResults.append(movieImage)
        
        //checks to see if movie is not found, if not found it displayed a message and a gif
        if(result.Error === 'Movie not found!'){
            var errorEl = `<img class = "d-block mx-auto rounded-5 w-100" src = "./assets/images/JT.gif">
                            <p class = "text-center gif text-wrap">Sorry no information available`
            omdbInfo.innerHTML = errorEl
            return 
        
        //if information is found then it is pulled from the api and displayed. if certain categories are missing, an unavailable message will show  
        } else {
        let movieListEl = `<ul class = "fs-3">
                            <li>Actors: ${result.Actors !== undefined ? result.Actors : "Actors information unavailable"}
                            <li>Director: ${result.Director !== undefined ? result.Director : "Directors information unavailable"}
                            <li>Writers: ${result.Writer !== undefined ? result.Writer : "Writers information unavailable"}
                            <li>Release Date: ${result.Released !== undefined ? result.Released : "Release date information unavailable"}
                            <li>Movie Rating: ${result.Rated !== undefined ? result.Rated : "Movie rating information unavailable"}
                            <li>Genre: ${result.Genre !== undefined ? result.Genre : "Genre information unavailable"}
                            <li>Runtime: ${result.Runtime !== undefined ? result.Runtime : "Runtime information unavailable"}
                            <li>Plot Summary: ${result.Plot !== undefined ? result.Plot : "Plot information unavailable"}
                            <p>
                            <p>Ratings:
                            <li>${result.Ratings && result.Ratings[0] ? result.Ratings[0].Source : "IMDB rating unavailable"} ${result.Ratings && result.Ratings[0] ? result.Ratings[0].Value : ""}
                            <li>${result.Ratings && result.Ratings[1] ?  result.Ratings[1].Source : "Rotten Tomatoes rating unavailable"} ${result.Ratings && result.Ratings[1] ? result.Ratings[1].Value : "" }
                            <li>${result.Ratings && result.Ratings[2] ? result.Ratings[2].Source : "Metacritic rating unavailable"} ${result.Ratings && result.Ratings[2] ? result.Ratings[2].Value : ""}
                            <ul>`
        omdbInfo.innerHTML = movieListEl}               
        })
    .catch(error => console.log('error', error));
        