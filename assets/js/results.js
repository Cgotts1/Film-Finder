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

        let movieListEl = `<ul class = "fs-3">
                            <li>Actors: ${result.Actors !== undefined ? result.Actors : "Sorry"}
                            <li>Director: ${result.Director !== undefined ? result.Director : "For"}
                            <li>Writers: ${result.Writer !== undefined ? result.Writer : "The"}
                            <li>Release Date: ${result.Released !== undefined ? result.Released : "Inconvenience"}
                            <li>Movie Rating: ${result.Rated !== undefined ? result.Rated : "No"}
                            <li>Genre: ${result.Genre !== undefined ? result.Genre : "Movie"}
                            <li>Runtime: ${result.Runtime !== undefined ? result.Runtime : "Information"}
                            <li>Plot Summary: ${result.Plot !== undefined ? result.Plot : "Available"}
                            <p>
                            <p>Ratings:
                            <li>${result.Ratings !== undefined ? result.Ratings[0].Source :"Please"} ${result.Ratings !== undefined ? result.Ratings[0].Value : ""}
                            <li>${result.Ratings !== undefined ? result.Ratings[1].Source :"Try"} ${result.Ratings !== undefined ? result.Ratings[1].Value : ""}
                            <li>${result.Ratings !== undefined ? result.Ratings[2].Source :"Google.com"} ${result.Ratings !== undefined ? result.Ratings[2].Value : ""}
                            <ul>`
        
        omdbInfo.innerHTML = movieListEl               
        console.log(result)})
    .catch(error => console.log('error', error));
        