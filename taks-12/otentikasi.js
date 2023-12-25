function Login(){
    // tangkap nilai yang di input user
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "satrio" && password === "student-nf23"){
        alert("login sukses");
        window.location.href = "Sukses.html";
        
    } 
    else {
        alert("Login Failed!");
    }
}