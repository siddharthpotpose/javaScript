let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById("password");

eyeicon.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eyeicon.src = "https://static.thenounproject.com/png/4334035-200.png";
    } else {
        password.type = "[password]";
        eyeicon.src = "https://www.svgrepo.com/show/390427/eye-password-see-view.svg";


    }
}