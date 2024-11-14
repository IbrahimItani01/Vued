const username = document.getElementById('admin-name')
const email = document.getElementById('admin-email')
const password = document.getElementById('admin-password')
const add_btn = document.getElementById('add-admin-btn')

add_btn.addEventListener('click',async(e)=>{
    e.preventDefault();

    if(!username.value || !email.value || !password.value){
        alert('Please fill in all fields.')
        return
    }

    const data = new FormData();
    data.append("name",username)
    data.append("email",email)
    data.append("password",password)

    try{
        const result = await fetch('http://localhost/vued/backend/addadmin.php',{
            method: 'POST',
            body: data
        })
        const response = await result.json()
        console.log(response)
    }catch(error){}
})