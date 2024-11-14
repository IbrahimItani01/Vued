const moviesContainer = document.getElementById("movies-container");

document.addEventListener("DOMContentLoaded",()=>{
    axios
    .post(
      "http://localhost/Vued/backend/movies/browseMovies.php",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response)=>{
        console.log(  response.data.array)
        response.data.array.forEach((movie)=>{
            moviesContainer.innerHTML+= `
                  <div class="movie-card" key="${movie.id}">
                    <div class="movie-image"><img src="${movie.image_url}" alt="movie"></div>
                    <h2>${movie.title}</h2>
                </div>
            `
        })
    })

})