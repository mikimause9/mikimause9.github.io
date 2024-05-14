var urlParams = new URLSearchParams(window.location.search);
var infoParam = urlParams.get('info');

if (infoParam === "urodzinki19") {
    window.location.href = "zaproszenie_urodzinki_19.html";
}
else if (infoParam === "pokaz") {
    window.location.href = "pokazowastrona.html";
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

function runaway(id) {
    id.style.top = Math.round(Math.random() * window.screen.height / 1.2) + 'px';
    id.style.left = Math.round(Math.random() * window.screen.width / 1.2) + 'px';
    id.style.width = Math.round(Math.random() * 200) + 100 + 'px';;
    id.style.height = Math.round(Math.random() * 200) + 100 + 'px';;
    //    id.style.top =  window.screen.height/ 1.5 + 'px';
    //    id.style.left = window.screen.width/ 1.5 + 'px';

}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    var distance = Math.random() * (window.innerWidth - 50) + 25 + "px";
    heart.style.left = distance; // Random position horizontally
    heart.innerHTML = "&#9829";
    var size = Math.random() * 60 + 20 + "px";
    heart.style.fontSize = size; //#ff5470, #e3256b, #c21e56, #de3163, #e40078, #cf71af, #ff9999, #d10056, #e30b5d
    var colours =  ["#ff5470", "#e3256b", "#c21e56", "#de3163", "#e40078", "#cf71af", "#ff9999", "#d10056", "#e30b5d"];
    var randcolor = Math.floor(Math.random() * colours.length);
    heart.style.color = colours[randcolor];
    document.getElementById('heartContainer').appendChild(heart);
    //console.log();
    animateHeart(heart);
}

function animateHeart(heart) {
    let pos = window.scrollY + window.innerHeight; // Start from bottom
    const animationInterval = setInterval(frame, 10);

    function frame() {
        if (pos <= -30) {
            clearInterval(animationInterval);
            heart.remove();
        } else {
            pos -= 1; // Move heart upwards
            heart.style.top = pos + 'px';
        }
    }
}

// Create hearts periodically
