function tampilkanPreview() {
    const input = document.getElementById('inputFoto');
    const previewArea = document.getElementById('areaPreview');
    const gambar = document.getElementById('gambarPreview');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            gambar.src = e.target.result;
            previewArea.style.display = "block";
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function simulasiKirim() {
    const input = document.getElementById('inputFoto');
    
    if (input.files.length === 0) {
        alert("Pilih foto terlebih dahulu sebelum mengirim!");
    } else {
        alert("Terima kasih! Foto berhasil dikirim ke Admin Wonderful Indonesia.");
        
        input.value = "";
        document.getElementById('areaPreview').style.display = "none";
    }
}