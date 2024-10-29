document.addEventListener("DOMContentLoaded", function() {
    const skillItems = document.querySelectorAll(".skill-item");
    certificateImages.forEach(image => {
        image.addEventListener("click", function() {
            const description = this.nextElementSibling; // Mengambil elemen <p> setelah gambar
            if (description.style.display === "none" || description.style.display === "") {
                description.style.display = "block"; // Tampilkan deskripsi
            } else {
                description.style.display = "none"; // Sembunyikan deskripsi
            }
        });
    });


    skillItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("expanded");
            const description = item.querySelector("p");
            description.classList.toggle("show");
            if (description.classList.contains("show")) {
                description.style.display = "block"; // Tampilkan deskripsi
            } else {
                description.style.display = "none"; // Sembunyikan deskripsi
            }
        });
    });

    // Menambahkan kelas show untuk animasi gambar sertifikat
    const certificateItems = document.querySelectorAll(".certificate-item");
    certificateItems.forEach(item => {
        item.classList.add("show");
    });
    document.querySelectorAll('.certificate-image').forEach(image => {
        image.onclick = function() {
            const modal = document.getElementById("modal");
            const modalImage = document.getElementById("modal-image");
            const captionText = document.getElementById("caption");
            
            modal.style.display = "block";
            modalImage.src = this.src;
            captionText.innerHTML = this.getAttribute('data-description');
        }
    });
    
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        const modal = document.getElementById("modal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah pengiriman form
        alert("Pesan Anda telah dikirim!"); // Notifikasi
        contactForm.reset(); // Reset form setelah pengiriman
    });

    // Menyoroti link navigasi saat bagian terlihat
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});
