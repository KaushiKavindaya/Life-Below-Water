const nav = document.querySelector(".navbar-hold");

fetch("/Navbar.html")
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data;
        
        const menuToggle = document.querySelector(".menu-toggle");
        if (menuToggle) {
            menuToggle.addEventListener("click", toggleMenu);
        }
        
        const closeBtn = document.querySelector(".close-btn");
        if (closeBtn) {
            closeBtn.addEventListener("click", toggleMenu);
        }
        
        function toggleMenu() {
            document.getElementById("navbar").classList.toggle("show");
        }
        
        function toggleDropdown(event, dropdownId) {
            event.preventDefault();
            document.getElementById(dropdownId).classList.toggle("show");
        }
    })
    .catch(error => {
        console.error("Error fetching or injecting navbar:", error);
    });