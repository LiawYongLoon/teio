document.addEventListener("DOMContentLoaded", function() {
    const headerTitle = document.getElementById("topp");

    headerTitle.addEventListener("click", function() {
        headerTitle.style.animation = "moveFromTop 2s forwards";
    });
});
