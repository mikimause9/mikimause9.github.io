var urlParams = new URLSearchParams(window.location.search);
var infoParam = urlParams.get('info');

if (infoParam === "urodzinki19") {
    window.location.href = "zaproszenie_urodzinki_19.html";
}

document.getElementById("passwordForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var password = document.getElementById("passwordInput").value;
    //        if (password === "urodzinki19") {
    //            window.location.href = "zaproszenie_urodzinki_19.html";
    //        } else {
    window.location.href = "default.html?haslo=" + encodeURIComponent(password);
    //        }


});

