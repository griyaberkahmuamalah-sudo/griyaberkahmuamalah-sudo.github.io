const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');


menuIcon.addEventListener('click', () => { 
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
});


// Fungsi untuk menonaktifkan semua link dan elemen aktif lainnya
const activePage = () => {
    const header = document.querySelector('header');
    const barBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barBox.classList.remove('active');
    setTimeout(() => {
        barBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
}

// Fungsi untuk menonaktifkan semua link navigasi
const deactivateLinks = () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
};

// Menambahkan event listener untuk setiap link navigasi
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

// Menambahkan event listener untuk logo link
// Fungsi untuk menonaktifkan semua link dan section
function deactivateAll() {
    navLinks.forEach(link => link.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));
}

// Event listener untuk logo
logoLink.addEventListener('click', () => {
    // Pastikan hanya berfungsi ketika halaman home belum aktif
    if (!navLinks[0].classList.contains('active')) {
        // Nonaktifkan semua link dan section terlebih dahulu
        deactivateAll();

        // Aktifkan link dan section pertama (home)
        navLinks[0].classList.add('active');
        
        // Tambahkan sedikit jeda sebelum mengaktifkan section home
        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});


// Event listener untuk tombol resume
const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

// Fungsi untuk mengaktifkan portfolio carousel
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;
const maxIndex = 5; // Sesuaikan dengan jumlah maksimum slide Anda

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
};

// Fungsi untuk memperbarui status tombol
const updateButtons = () => {
    if (index <= 0) {
        arrowLeft.classList.add('disabled');
        arrowRight.classList.remove('disabled');
    } else if (index >= maxIndex) {
        arrowRight.classList.add('disabled');
        arrowLeft.classList.remove('disabled');
    } else {
        arrowLeft.classList.remove('disabled');
        arrowRight.classList.remove('disabled');
    }
};

// Event listener untuk tombol Next (Right Arrow)
arrowRight.addEventListener('click', () => {
    if (index < maxIndex) {
        index++;
        activePortfolio();
        updateButtons();
    }
});

// Event listener untuk tombol Prev (Left Arrow)
arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        activePortfolio();
        updateButtons();
    }
});

// Inisialisasi status tombol saat pertama kali
updateButtons();

function sendWhatsApp(event) {
    event.preventDefault(); // Mencegah form melakukan submit standar

    // Ambil data dari form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Buat pesan untuk dikirim
    const waMessage = `Halo, Saya ${name}.\n\nEmail: ${email}\nNomor Telepon: ${phone}\nSubjek: ${subject}\nPesan: ${message}`;

    // Nomor WhatsApp tujuan (ganti dengan nomor Anda)
    const waNumber = "6289516090938"; // Format internasional (628xxx untuk Indonesia)

    // Buka URL WhatsApp dengan pesan
    const waURL = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
    window.open(waURL, "_blank");
}

