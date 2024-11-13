// login
const login_email = document.getElementById('login-email');
const login_pass = document.getElementById('login-pass');
const login_btn = document.getElementById('login-btn');


login_btn.addEventListener("click", (e)=>{
    e.preventDefault()

    const data = new FormData();
    data.append("login_email", login_email.value);
    data.append("login_pass", login_pass.value);

    fetch("http://localhost/vued/backend/login.php",{
        method: "POST",
        body: data

    })
    .then(response=>response.json())
    .then(data=>{
        if(data.status == "login-failed"){
            const pass_msg= document.getElementById('pass-msg');
            pass_msg.classList.remove('d-none')
            pass_msg.textContent = "Wrong password"
        }
        if(data.status == "not-found"){
            const email_msg = document.getElementById('email-msg')
            email_msg.classList.remove('d-none')
            email_msg.textContent = "Wrong email"
        }
        if(data.status == "admin"){
            window.location.href = "http://localhost/vued/frontend/admin.html"
        }
        // if(data.status == "banned"){
        //     window.location.href = 
        // }
        // if(data.status == "normal"){
        //     window.location.href =
        // }
    })
    .catch(error=> console.error(error))
        
})
