window.onload = function(){

const user = localStorage.getItem("user");

if(user){

const data = JSON.parse(user);

const login = document.getElementById("login");
const app = document.getElementById("app");
const welcome = document.getElementById("welcome");

if(login) login.style.display="none";

if(app) app.style.display="block";

if(welcome)
welcome.innerHTML = "Welcome " + data.name;

}

}
