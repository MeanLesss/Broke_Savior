btnLogin.onclick = function() {
    // let username = document.getElementById("txtUsername");
    // let password = document.getElementById("txtPassword");
    let username = txtUsername.value;
    let password = txtPassword.value;
    let user = new User(username, password);

    if (user.username == "mean" && user.password == 123) {
        alert("Login successfully !!");
        window.location.href = "http://www.youtube.com";
    } else {
        alert("Login failed !!");
    }
}