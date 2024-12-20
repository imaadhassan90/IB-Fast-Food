const login= document.getElementById("login")
login.addEventListener("submit", function(event){
    event.preventDefault()
    const user= "user";
    const pass = "123";

    const userName = document.getElementById("user").value
    const password = document.getElementById("pass").value
    console.log(userName, password);
    if (user==userName && pass==password){
        alert('login successfull')
        window.location.href='./homepage/index.html'
    }
    
})