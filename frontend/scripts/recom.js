const movies = [
    {
        title: "Harry Potter et la chambre des secrets",
        duration: "2h30",
        genre: "Fantastique",
        imageUrl: "https://media.pathe.fr/movie/alex/HO00002590/poster/md/31/movie&uuid=17C49091-AF19-4C4F-853E-C9F16F326428",
        releaseDate: "Sortie : 04 déc. 2002",
        description: "Alors que l'oncle Vernon, la tante Pétunia et son cousin Dudley reçoivent d'importants invités à dîner, Harry Potter est contraint de passer la soirée dans sa chambre. Dobby, un elfe, fait alors son apparition..."
    },
    {
        title: "Le Dîner de cons",
        duration: "1h20",
        genre: "Comédie",
        imageUrl: "https://media.pathe.fr/movie/900176/poster/md/6/film_8807.jpg",
        releaseDate: "Sortie : 11 mars 1998",
        description: "Tous les mercredis, Pierre Brochant et ses amis organisent un dîner où chacun doit amener un con. Celui qui a trouvé le plus spectaculaire est déclaré vainqueur..."
    },
];

function getMovieRecommendation() {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const movie = movies[randomIndex];
    displayMovieRecommendation(movie);
}

function displayMovieRecommendation(movie) {
    const resultDiv = document.getElementById('recommendation-result');
    resultDiv.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.imageUrl}" alt="${movie.title}" class="movie-image">
        <p><strong>Duration:</strong> ${movie.duration}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
        <p>${movie.description}</p>
    `;
}

document.getElementById('chatbot-btn').addEventListener('click', function() {
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('close-chatbot').addEventListener('click', function() {
    document.getElementById('chatbot-container').style.display = 'none';
});

document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("chat-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") sendMessage();
});

async function sendMessage() {
    const userMessage = document.getElementById("chat-input").value.trim();
    if (!userMessage) return;

    addChatMessage("User", userMessage);

    try {
        const aiResponse = await getAIResponse(userMessage);
        addChatMessage("Chatbot", aiResponse);
    } catch (error) {
        addChatMessage("Chatbot", "Sorry, I couldn't fetch a recommendation at the moment.");
        console.error("Error:", error);
    }
    document.getElementById("chat-input").value = "";
}

function addChatMessage(sender, message) {
    const chatHistory = document.getElementById("chat-history");
    const messageElement = document.createElement("p");
    messageElement.textContent = `${sender}: ${message}`;
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

async function getAIResponse(userMessage) {
    const apiKey = "Ysk-proj-RlQ2GfHTTc0VONWf5_a9EMHA4EuWUrO4m-RSImhv4rdvO9bHQfQ9upnmsqgzr3zui_j5XqOBZuT3BlbkFJWgofH_9xn5ib8QrUeP_-qVfvhz6rhwBQ24G782h0g1yLD1rtcsjYyC9WYcCRyVJwTfgUPgqCUA"; // Replace with your actual API key
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful movie recommendation assistant." },
                { role: "user", content: userMessage }
            ],
            max_tokens: 100
        })
    });

    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
}