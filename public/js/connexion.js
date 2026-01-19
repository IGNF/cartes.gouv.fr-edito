fetch(window.location.origin + "/api/users/me", {
    method: "GET",
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
}).then(async function (res) {
    if (res.ok) {
        let result = await res.json();
        result.email ? (document.getElementById("user-mail").innerText = result.email) : null;
        result.user_name ? (document.getElementById("user-name").innerText = result.user_name) : null;
        if(!document.getElementById("isNotLogged").classList.contains("hidden")){
            document.getElementById("isNotLogged").classList.add("hidden");
        }
        if(document.getElementById("isLogged").classList.contains("hidden")){
            document.getElementById("isNotLogged").classList.remove("hidden");
        }
    }
});