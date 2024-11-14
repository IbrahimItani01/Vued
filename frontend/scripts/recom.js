document.getElementById('chatbot-btn')?.addEventListener('click', function() {
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('close-chatbot')?.addEventListener('click',  async function() {
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
document.getElementById("send-button")?.addEventListener("click", sendMessage);
document.getElementById("chat-input")?.addEventListener("keypress", function(event) {
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

const imageRow = document.getElementById("image-row");
// save favorite genre of user
let favoriteGenre;
let movieData = [];
document.addEventListener("DOMContentLoaded",()=>{
    axios
    .post(
      "http://localhost/Vued/backend/UserData/getFavoriteGenre.php",
      {
        userId: localStorage.getItem("currentUser"),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response)=>{
        favoriteGenre = response.data.array.favorite_genre;
        localStorage.setItem("favoriteGenre",favoriteGenre)
    })
    axios
    .post(
      "http://localhost/Vued/backend/movies/browseMovies.php",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response)=>{
        movieData = response.data.array;
        localStorage.setItem("movieData",JSON.stringify(movieData))

    })
    const apiKey = "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"; // Replace with your actual OpenAI API key

    axios
    .post(
      "https://api.openai.com/v1/chat/completions",
      {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "you filter data based on condition i give you. let your response be only the data filtered purely no extra words" },
                    { role: "user", content: `I have this movie data ${localStorage.getItem("movieData")} and the user favorite genre is ${localStorage.getItem("favoriteGenre")} filter the movie data accordingly make them 4 movies` }
                ],
      },
      {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
      }
    ).then((response)=>{
        const filteredData = JSON.parse(response.data.choices[0].message.content);
        console.log(filteredData);
        filteredData.forEach((filteredMovie)=>{
            imageRow.innerHTML+=`
                <div class="image-container" key="${filteredMovie.id}">
                    <img src="${filteredMovie.image_url}">
                    <p class="image-title">${filteredMovie.title}</p>
                </div>
            `
        })
        document.querySelectorAll(".image-container").forEach((movieCard)=>{
            movieCard.addEventListener("click",()=>{
              localStorage.setItem("chosenMovie",movieCard.getAttribute("key"));
              window.location.href="http://127.0.0.1:5500/frontend/sections/description.html"
            })
          })
    })
})
