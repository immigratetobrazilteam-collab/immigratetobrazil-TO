document.addEventListener("DOMContentLoaded", () => {
    fetch("/partials/header.html")
        .then(r => r.text())
        .then(html => document.body.insertAdjacentHTML("afterbegin", html));
    fetch("/partials/footer.html")
        .then(r => r.text())
        .then(html => document.body.insertAdjacentHTML("beforeend", html));
});