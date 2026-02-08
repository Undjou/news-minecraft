document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu").addEventListener("click", function() {
        document.getElementById("my-modal").classList.add("open");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("close-button").addEventListener("click", function() {
        document.getElementById("my-modal").classList.remove("open");
    });
});