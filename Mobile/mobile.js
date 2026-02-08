document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu").addEventListener("click", function() {
        document.getElementById("my-modal").classList.add("open");
    });

    const modal = document.getElementById("my-modal");

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("open");
        }
    });
});
