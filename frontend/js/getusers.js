const getusers= async () =>{
    try{
        const result = await fetch('http://localhost/vued/backend/getusers.php')
        const response = await result.json()
            response.forEach(user => {
                console.log(user.email)
                // Create user div
                const userDiv = document.createElement("div");
                userDiv.className = "user flex space-between";
                userDiv.id = "user";
    
                // Create and populate the email paragraph
                const emailPara = document.createElement("p");
                emailPara.className = "user-email";
                emailPara.id = "user-email";
                emailPara.textContent = user.email;
    
                // Create the button with user ID as its own ID
                const banButton = document.createElement("button");
                banButton.id = user.id;
                banButton.textContent = "Ban";
    
                // Append email and button to user div
                userDiv.appendChild(emailPara);
                userDiv.appendChild(banButton);
    
                // Append user div to users container
                usersContainer.appendChild(userDiv);
            });
        
    }catch(error){
    }   
}

document.addEventListener('DOMContentLoaded', getusers);