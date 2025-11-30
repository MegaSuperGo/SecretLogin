const API = "https://secretloginbackend.onrender.com";

async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include"
    });

    const data = await res.json();
    document.getElementById("msg").innerText = data.message || data.error;
}
