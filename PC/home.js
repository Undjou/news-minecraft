document.getElementById("button").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open");
});

document.getElementById("close-button").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open");
 });