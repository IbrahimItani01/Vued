// login
const login_email = document.getElementById('login-email');
const login_pass = document.getElementById('login-pass');
const login_btn = document.getElementById('login-btn');


login_btn.addEventListener("click", (e)=>{
    e.preventDefault()

    const data = new FormData();
    data.append("login_email", login_email.value);
    data.append("login_pass", login_pass.value);

    fetch("http://localhost/vued/backend/authentication/login.php",{
        method: "POST",
        body: data

    })
    .then(response=>response.json())
    .then(data=>{
        localStorage.setItem("currentUser",data.id);
        if(data.status == "login-failed"){
            alert("Wrong password")
        }
        if(data.status == "not-found"){
            alert("wrong email")
        }
        if(data.status == "admin"){
            window.location.href = "http://127.0.0.1:5500/frontend/admin.html"
        }
        if(data.status == "banned"){
            return;
        }
        if(data.status == "normal"){
            window.location.href = "http://127.0.0.1:5500/frontend/sections/Ibrahim.html"
        }
    })
    .catch(error=> console.error(error))
        
})
