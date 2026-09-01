const API_URL = "https://ppfms-api.ulaku06.workers.dev";


async function apiLogin(username,password){

    const res = await fetch(
        `${API_URL}/api/login`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username,
                password
            })
        }
    );

    return await res.json();
}


async function getExpenses(){

    const res = await fetch(
        `${API_URL}/api/expenses`
    );

    return await res.json();

}


async function addExpense(data){

    const res = await fetch(
        `${API_URL}/api/expenses`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
    );

    return await res.json();

}
