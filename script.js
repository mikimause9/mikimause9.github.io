document.getElementById("passwordForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var password = document.getElementById("passwordInput").value;
    if (password === "idkwtwt") {
        window.location.href = "letter.html?haslo=" + encodeURIComponent(password);
    } else {
        window.location.href = "letter.html";
    }
});
