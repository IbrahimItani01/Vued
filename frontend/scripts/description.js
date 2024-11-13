const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

async function fetchMovieDetails(id) {
    try {
        const response = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ movieId: id })
        });

        const data = await response.json();

        if (response.ok && data.status === 'success') {
            const movie = data.array;

            document.getElementById('movie-title').textContent = movie.title;
            document.getElementById('movie-poster').src = movie.imageUrl;
            document.getElementById('release-date').textContent = movie.releaseDate;
            document.getElementById('genre').textContent = movie.genre;
            document.getElementById('duration').textContent = movie.duration;
            document.getElementById('description').textContent = movie.description;

        } else {
            console.error("Movie details not found:", data.message);
            document.querySelector('.movie-content').innerHTML = `<p>Movie details not available.</p>`;
        }
    } catch (error) {
        console.error("Error fetching movie details:", error);
    }
}

if (movieId) {
    fetchMovieDetails(movieId);
} else {
    console.error("No movie ID found in URL.");
}