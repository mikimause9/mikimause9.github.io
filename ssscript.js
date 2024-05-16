var urlParams = new URLSearchParams(window.location.search);
var infoParam = urlParams.get('info');
var infoParam1 = urlParams.get('haslo');

if (infoParam === "urodzinki19") {
    window.location.href = "zaproszenie_urodzinki_19.html";
}
else if (infoParam === "pokaz") {
    window.location.href = "pokazowastrona.html";
}

if (infoParam1 === "elemental") {
    window.location.href = "kasztn.html";
}

document.getElementById("passwordForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var password = document.getElementById("passwordInput").value;
    console.log(password);
    if (password === "elemental") {
        window.location.href = "default.html?haslo=" + encodeURIComponent(password) + "&title=elemental";
    } else {
        window.location.href = "default.html?haslo=" + encodeURIComponent(password);
    }


});
