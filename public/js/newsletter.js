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

let sendSubscribeForm = function() {
    let isFormValid = true;

    let contact_email = document.getElementsByName("contact_email")[0].value;
    if(!checkMail(contact_email)) {
        isFormValid = false;
    }
    if(!checkCheckbox()) {
        isFormValid = false;
    }
    if(isFormValid) {
        document.getElementById("subscription-form").submit();
    }
};

let sendUnsubscribeForm = function() {
    let isFormValid = true;

    let contact_email = document.getElementsByName("contact_email")[0].value;
    if(!checkMail(contact_email)) {
        isFormValid = false;
    }
    if(isFormValid) {
        document.getElementById("unsubscription-form").submit();
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
        document.getElementById("input-mail-messages-group").innerHTML = "<p class='fr-error-text'> Veuillez saisir une adresse électronique valide </p>";
        return false;
    } else {
        return true;
    }
};

//Gestion de la checkbox
let checkCheckbox = function() {
    document.getElementById("checkbox-input-group").classList.contains("fr-input-group--error")
        ? document.getElementById("checkbox-input-group").classList.toggle("fr-input-group--error")
        : null;
    document.getElementById("input-checkbox-messages-group").innerHTML = "";
    if (!document.getElementById("checkbox").checked) {
        document.getElementById("checkbox-input-group").classList.toggle("fr-input-group--error");
        document.getElementById("input-checkbox-messages-group").innerHTML = "<p class='fr-error-text'> Veuillez accepter les conditions </p>";
        return false;
    } else {
        return true;
    }
}

