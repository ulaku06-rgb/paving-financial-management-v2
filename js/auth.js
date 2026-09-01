async function login(){

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;


let result = await apiLogin(
    username,
    password
);


if(result.user){

localStorage.setItem(
"user",
JSON.stringify(result.user)
);


document.getElementById("login").style.display="none";

document.getElementById("app").style.display="block";

document.getElementById("welcome").innerHTML =
"Welcome " + result.user.name;


}
else{

document.getElementById("msg").innerHTML =
"Login gagal";

}

}
