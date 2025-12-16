function toggleMenu() {
    const menu = document.getElementById("navMenu");
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
    }
}

function toggleMenu() {
    const menu = document.getElementById("navMenu");
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
    }
}

        function prosesLangganan() {
            var inputEmail = document.getElementById("emailLangganan");
        
            if (inputEmail.value === "") {
                alert("Mohon isi email terlebih dahulu!");
            } else {
                alert("Terima kasih! Anda telah berlangganan newsletter kami.");
                
                inputEmail.value = ""; 
            }
        }
