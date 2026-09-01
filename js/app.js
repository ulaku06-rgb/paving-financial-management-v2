const user = JSON.parse(localStorage.getItem("user"));

if(!user){

document.body.innerHTML = `
<h1>PPFMS Login</h1>

<input id="username" placeholder="Username">

<input id="password" 
type="password" 
placeholder="Password">

<button onclick="login()">
Login
</button>

<p id="msg"></p>
`;

}else{


document.body.innerHTML = `

<h1>PPFMS v2</h1>

<h2>
Welcome ${user.name}
</h2>

<hr>


<div class="dashboard">


<div>
<h3>RAB</h3>
<h2 id="rab">
Rp 0
</h2>
</div>


<div>
<h3>Biaya</h3>
<h2 id="biaya">
Rp 0
</h2>
</div>


<div>
<h3>Pendapatan</h3>
<h2 id="income">
Rp 0
</h2>
</div>


<div>
<h3>Profit</h3>
<h2 id="profit">
Rp 0
</h2>
</div>


</div>


<br>


<button onclick="logout()">
Logout
</button>


`;

}



async function login(){


let username =
document.getElementById("username").value;


let password =
document.getElementById("password").value;



let result =
await apiLogin(
username,
password
);



if(result.user){


localStorage.setItem(
"user",
JSON.stringify(result.user)
);


location.reload();


}else{


document.getElementById("msg").innerHTML =
"Login gagal";


}


}



function logout(){

localStorage.removeItem("user");

location.reload();

}
