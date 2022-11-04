const apiKey = "91b89138e6c4e9412f5ce87e1e9d3520"
const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWI4OTEzOGU2YzRlOTQxMmY1Y2U4N2UxZTlkMzUyMCIsInN1YiI6IjYzNjQ3MTY1N2YxZDgzMDA3Yzk0YjMyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.USyxrOb6-JOIYPMklCHVVKOe2tVbbRNs4wydBLwqWJs"
const searchButton = document.querySelector('.search-button')

function displayResults(event){
    event.preventDefault();
    location.assign('./results.html')
}
searchButton.addEventListener("click", displayResults)
