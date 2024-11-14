document.getElementById('chatbot-btn').addEventListener('click', function() {
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'block' : 'none';
});

    

document.getElementById('close-chatbot').addEventListener('click',  async function() {
    document.getElementById('chatbot-container').style.display = 'none';

    try{
        const response = await fetch('http://localhost/Vued/backend/insertChat.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"ai_messages" : AIMessages,
                "user_messages" :userMessages,
                "chats_id" : 1
            })
        });

        if (response.ok){
            console.log("Chatbot logged successfully.");
        }else{
            console.log("Failed to log chatbot.");
        }
    }catch(error){
        console.error("Error calling API", error);
    }

});


document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("chat-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") sendMessage();
});

async function sendMessage() {
    const userMessage = document.getElementById("chat-input").value.trim();
    if (!userMessage) return;

    addChatMessage("User", userMessage);

    let responseMessage;
        responseMessage = await getAIResponse(userMessage);


    addChatMessage("Chatbot", responseMessage);
    document.getElementById("chat-input").value = "";
}

let userMessages = [];
let AIMessages = [];

function addChatMessage(sender, message) {
    const chatHistory = document.getElementById("chat-history");
    const messageElement = document.createElement("p");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;

    if (sender == "Chatbot"){
        AIMessages.push(message)
    }else{
        userMessages.push(message)
    };
    console.log(userMessages);
    console.log(AIMessages);
}

async function getMovieRecommendationFromAPI() {
    try {
        const response = await fetch("http://localhost/Vued/backend/browseMovies.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        if (data.status === "success" && Array.isArray(data.array) && data.array.length > 0) {
            // Select a random movie from the fetched movies
            const randomIndex = Math.floor(Math.random() * data.array.length);
            const movie = data.array[randomIndex];
            return formatMovieRecommendation(movie);
        } else {
            throw new Error("No movies found in the API response.");
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
        return "Sorry, I couldn't fetch a movie recommendation at the moment.";
    }
}

function formatMovieRecommendation(movie) {
    return `
        <strong>${movie.title}</strong><br>
        <img src="${movie.image_url}" alt="${movie.title}" style="width:100px; height:auto; border-radius:5px;"><br>
        <strong>Duration:</strong> ${movie.duration}<br>
        <strong>Genre:</strong> ${movie.genre}<br>
        <strong>Release Date:</strong> ${movie.release_date}<br>
        <p>${movie.description}</p>
    `;
}

async function getAIResponse(userMessage) {
    const apiKey = "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"; // Replace with your actual OpenAI API key
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a movie chatbot and do not answer any other questions that are not related to movies, your answers are consize and does not exceed 100 characters." },
                    { role: "user", content: userMessage }
                ],
                max_tokens: 100
            })
        });

        if (!response.ok) {
            throw new Error(`AI API request failed with status ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content.trim();
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return "Sorry, I couldn't fetch a response at the moment.";
    }
}