
//signup
const username = document.getElementById('username-input');
const fav_genre= document.getElementById('genre');
const email = document.getElementById('signin-email');
const password = document.getElementById('signup-pass')
const signup_btn = document.getElementById('signup-btn');

signup_btn.addEventListener('click',async (e)=>{
    e.preventDefault()

    const data = new FormData();
    data.append("name",username.value);
    data.append("fav_genre",fav_genre.value);
    data.append("password",password.value);
    data.append("email",email.value);
    try{
        const result = await fetch('http://localhost/vued/backend/signup.php',{
                method: 'POST',
                body: data,
            })
            
        const responseData = await result.json();
        console.log(responseData);
        }catch(error){

        }
})
