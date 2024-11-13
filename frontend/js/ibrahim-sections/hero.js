const movieImage = document.getElementById("hero-movie-img");
const movieTitle = document.getElementById("hero-movie-title");
const movieYear = document.getElementById("hero-movie-year");
const movieGenre = document.getElementById("hero-movie-genre");
const movieDuration = document.getElementById("hero-movie-duration");

document.addEventListener("DOMContentLoaded", () => {
  axios.post(
    "http://localhost/Vued/backend/movies/getMovieData.php",
    {
      'movieId': Math.floor(Math.random() * (167-127)) + 127,
    }
  ).then((response)=>{
    console.log(response.data.array);
    movieImage.src = response.data.array.image_url;
    movieTitle.innerText = response.data.array.title;
    movieYear.innerText = response.data.array.release_date;
    movieGenre.innerText = response.data.array.genre;
    movieDuration.innerText = response.data.array.duration;
  }).catch((error)=>{   
    console.log(error)
  })
});
