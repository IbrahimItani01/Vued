const featuredContainer = document.getElementById("featured-container");
const featuredContainerLarge = document.getElementById("featured-container-large");

document.addEventListener("DOMContentLoaded",()=>{
    axios
    .post(
      "http://localhost/Vued/backend/movies/featuredMovies.php",
      {
        movieId: Math.floor(Math.random() * (168 - 127)) + 127,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response)=>{
        response.data.array.forEach((movie)=>{
            featuredContainer.innerHTML+= `
                <div class="featured-card" key="${movie.id}">
                    <div class="featured-img">
                        <img src="${movie.image_url}" alt="movie-title">
                    </div>
                    <h2>${movie.title}</h2>
                </div>
            `
        })
    })

})