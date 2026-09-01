const loginBox = `
<div class="login">

<h2>PPFMS Login</h2>

<input id="username" placeholder="Username">

<input id="password" type="password" placeholder="Password">

<button onclick="login()">
Login
</button>

<p id="msg"></p>

</div>
`;

document.body.innerHTML = loginBox;


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

location.reload();

}
else{

document.getElementById("msg").innerHTML =
"Login gagal";

}

}