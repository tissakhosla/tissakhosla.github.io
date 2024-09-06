window.addEventListener('scroll', function () {
    const scrollDown = document.getElementById('scroll-down');
    if (window.scrollY > 0) {
        scrollDown.classList.add('arrow-hidden');
    } else {
        scrollDown.classList.remove('arrow-hidden');
    }
});

document.getElementById("menu-button").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");

    // Temporarily set width to auto to calculate the natural width
    sidebar.style.width = "auto";
    const naturalWidth = sidebar.offsetWidth; // Get the natural width of the sidebar

    // Reset to 0 and trigger the transition to the calculated width
    sidebar.style.width = "0";
    setTimeout(() => {
        sidebar.style.width = naturalWidth + "px"; // Apply the calculated width
    }, 10); // Small delay to allow transition
});

document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("sidebar").style.width = "0"; // Close the sidebar with transition
});