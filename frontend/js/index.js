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
            alert("Wrong password")
        }
        if(data.status == "not-found"){
            alert("wrong email")
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
