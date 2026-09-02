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

}
else{


document.body.innerHTML = `

<h1>PPFMS v2</h1>

<h2>
Welcome ${user.name}
</h2>


<hr>


<h3>RAB</h3>
<h2 id="rab">Rp 0</h2>


<h3>Biaya</h3>
<h2 id="biaya">Rp 0</h2>


<h3>Pendapatan</h3>
<h2 id="income">Rp 0</h2>


<h3>Profit</h3>
<h2 id="profit">Rp 0</h2>


<br>

<button onclick="logout()">
Logout
</button>


`;


ambilDashboard();


}



async function login(){


let username =
document.getElementById("username").value;


let password =
document.getElementById("password").value;



let hasil = await apiLogin(
username,
password
);



if(hasil.user){


localStorage.setItem(
"user",
JSON.stringify(hasil.user)
);


location.reload();


}

else{


document.getElementById("msg").innerHTML =
"Login gagal";


}


}





async function ambilDashboard(){


try{


let response = await fetch(
"https://ppfms-api.ulaku06.workers.dev/api/dashboard"
);



let data = await response.json();



document.getElementById("rab").innerHTML =
"Rp " + Number(data.rab || 0)
.toLocaleString("id-ID");



document.getElementById("biaya").innerHTML =
"Rp " + Number(data.biaya || 0)
.toLocaleString("id-ID");



document.getElementById("income").innerHTML =
"Rp " + Number(data.income || 0)
.toLocaleString("id-ID");



document.getElementById("profit").innerHTML =
"Rp " + Number(data.profit || 0)
.toLocaleString("id-ID");


}

catch(error){

console.log(error);

}


}



function logout(){

localStorage.removeItem("user");

location.reload();

}
