//remplissage automatique du champ si l'utilisateur est connecté
fetch(window.location.origin + "/api/users/me", {
    method: "GET",
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
}).then(async function (res) {
    if (res.ok) {
        let result = await res.json();
        result.email ? (document.getElementsByName("contact_email")[0].value = result.email) : null;
    }
});

let sendForm = function() {
    let contact_email = document.getElementsByName("contact_email")[0].value;
    if(checkMail(contact_email)) {
        console.log("TODO => POST request with value '" + contact_email + "'");
    }
};

//Gestion de la validité du mail
let checkMail = function (mail) {
    document.getElementById("mail-input-group").classList.contains("fr-input-group--error")
        ? document.getElementById("mail-input-group").classList.toggle("fr-input-group--error")
        : null;
    document.getElementById("input-mail-messages-group").innerHTML = "";
    if (!mail || !mail.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/)) {
        document.getElementById("mail-input-group").classList.toggle("fr-input-group--error");
        document.getElementById("input-mail-messages-group").innerHTML = "<p class='fr-error-text'> Veuillez saisir une adresse email valide </p>";
        return false;
    } else {
        return true;
    }
};

