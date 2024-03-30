function showGreetingPopup() {
    let popup = document.getElementById("greetingPopup");
    popup.classList.toggle("show");
}

function closeGreetingPopup() {
    let popup = document.getElementById("greetingPopup");
    popup.classList.remove("show");
}

document.addEventListener("click", function (event) {
    let popup = document.getElementById("greetingPopup");
    if (event.target !== popup && !popup.contains(event.target)) {
        popup.classList.remove("show");
    }
});
