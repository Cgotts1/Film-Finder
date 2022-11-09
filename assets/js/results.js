const moviePosterResults = document.querySelector('.movie-poster-results')
const omdbInfo = document.querySelector('.omdb-info')

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
        console.log(result)
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
                            <li>${result.Ratings === undefined ? "IMDB rating unavailable": result.Ratings[0].Source} ${result.Ratings === undefined ? "" : result.Ratings[0].Value}
                            <li>${result.Ratings === undefined ? "Rotten Tomatoes rating unavailable" : result.Ratings[1].Source} ${result.Ratings === undefined ? "" : result.Ratings[1].Value}
                            <li>${result.Ratings === undefined ? "Metacritic rating unavailable" : result.Ratings[2].Source} ${result.Ratings === undefined ? "" : result.Ratings[2].Value}
                            <ul>`
        
        omdbInfo.innerHTML = movieListEl               
        console.log(result)})
    .catch(error => console.log('error', error));
        