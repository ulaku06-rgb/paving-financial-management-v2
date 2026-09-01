async function login(){
const r=await fetch(API_URL+'/api/login',{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
username:username.value,
password:password.value
})
})

const d=await r.json()

if(d.user){
localStorage.user=JSON.stringify(d.user)
document.getElementById('login').style.display='none'
document.getElementById('app').style.display='block'
welcome.innerHTML='Halo '+d.user.name+' ('+d.user.role+')'
}else{
alert('Login gagal')
}
}
