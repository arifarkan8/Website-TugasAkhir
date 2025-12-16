function toggleMenu() {
            var menu = document.getElementById("navMenu");
            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
            } else {
                menu.classList.add("active");
            }
        }

        function kirimPesan() {
            var nama = document.getElementById("inputNama").value;
            var pesan = document.getElementById("inputPesan").value;

            if (nama === "" || pesan === "") {
                alert("Harap isi Nama dan Pesan terlebih dahulu!");
            } else {
                alert("Terima kasih, " + nama + "! Ulasan Anda berhasil dikirim.");
                // Reset Form
                document.getElementById("inputNama").value = "";
                document.getElementById("inputEmail").value = "";
                document.getElementById("inputPesan").value = "";
            }
        }