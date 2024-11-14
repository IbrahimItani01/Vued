const urlParams = new URLSearchParams(window.location.search);
const movieId = localStorage.getItem('movieId');

const bgblurimage = document.getElementById("bg-img");

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('http://localhost/Vued/backend/movies/getMovieData.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "movieId" : movieId })
        });

        const data = await response.json();

        if (response.ok && data.status === 'success') {
            const movie = data.array;
            console.log(movie);
            document.getElementById('movie-title').textContent = movie.title;
            document.getElementById('movie-poster').src = movie.image_url;
            document.getElementById('release-date').textContent = movie.release_date;
            document.getElementById('genre').textContent = movie.genre;
            document.getElementById('duration').textContent = movie.duration;
            document.getElementById('description').textContent = movie.description;
            bgblurimage.style.backgroundImage = `url(${movie.image_url})`;

        } else {
            console.error("Movie details not found:", data.message);
            document.querySelector('.movie-content').innerHTML = `<p>Movie details not available.</p>`;
        }
    } catch (error) {
        console.error("Error fetching movie details:", error);
    }
})

