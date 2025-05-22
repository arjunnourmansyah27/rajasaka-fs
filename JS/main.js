// JavaScript for slider navigation / gambar hero awal
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const sliderImages = document.getElementById("slider-images");

let currentIndex = 0;
const totalImages = 3;

// Function to show the next image
function showNextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to show the previous image
function showPrevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Add event listeners to buttons
nextButton.addEventListener("click", showNextImage);
prevButton.addEventListener("click", showPrevImage);

// Mendapatkan elemen hamburger dan menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

// Menambahkan event listener pada hamburger
hamburger.addEventListener("click", function () {
  // Toggle kelas untuk menampilkan menu dan mengubah ikon hamburger
  mobileMenu.classList.toggle("show");
  hamburger.classList.toggle("open");
});

// Menambahkan event listener pada setiap item menu di mobile
const menuItems = mobileMenu.querySelectorAll("a");
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Menutup menu dan mengubah ikon hamburger kembali ke bentuk semula saat item dipilih
    mobileMenu.classList.remove("show");
    hamburger.classList.remove("open");
  });
});

function toggleAccordion(element) {
  const content = element.nextElementSibling;
  const svgIcon = element.querySelector("svg");

  if (content.classList.contains("hidden")) {
    // Tutup semua accordion dulu
    document
      .querySelectorAll("section .space-y-4 > div > div")
      .forEach((div) => div.classList.add("hidden"));
    document
      .querySelectorAll("section .space-y-4 > div > button svg")
      .forEach((icon) => icon.classList.remove("rotate-180"));

    // Buka yang diklik
    content.classList.remove("hidden");
    svgIcon.classList.add("rotate-180");
  } else {
    // Kalau klik yang sudah terbuka -> tutup
    content.classList.add("hidden");
    svgIcon.classList.remove("rotate-180");
  }
}

// button lihat keseluruhan produk
const btn = document.getElementById('lihat-produk-btn');
        const produkCards = document.querySelectorAll('#produk-grid .produk-card');
    
        btn.addEventListener('click', () => {
          produkCards.forEach((card) => {
            card.classList.remove('hidden');
          });
          btn.style.display = 'none'; // sembunyikan tombol setelah klik
        });