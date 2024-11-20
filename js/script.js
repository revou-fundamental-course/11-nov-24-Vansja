let currentSlide = 0;

// Fungsi untuk menampilkan slide di carousel utama
function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentSlide = (index + totalSlides) % totalSlides; // Looping slide
    slides.style.transform = `translateX(-${currentSlide * 100}%)`; // Geser ke slide berikutnya
}

// Fungsi untuk menambah atau mengurangi slide
function plusSlides(n) {
    showSlide(currentSlide + n);
}

// Slide otomatis setiap 5 detik
setInterval(() => {
    plusSlides(1);
}, 5000); // Setiap 5 detik

// Inisialisasi slide pertama
showSlide(currentSlide);

// Popup Handling
// Fungsi untuk menampilkan popup dengan gambar carousel berbeda
function showPopup(title, description, images) {
    // Menampilkan data di console untuk debugging
    console.log("Popup Triggered:", title, description, images);

    // Update judul dan deskripsi
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').textContent = description;

    // Update gambar slider di popup
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.innerHTML = ''; // Kosongkan kontainer gambar sebelum menambahkan yang baru

    // Menambahkan gambar-gambar dari array images
    images.forEach((imageSrc, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = `Image ${index + 1}`;
        imgElement.classList.add('carousel-slide');
        carouselImages.appendChild(imgElement);
    });

    // Menampilkan popup
    document.getElementById('popup').style.display = 'flex';

    // Menampilkan slide pertama di popup
    slideIndex = 0; // Reset slide index saat popup muncul
    showSlideInPopup(slideIndex);
}

// Fungsi untuk menutup popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Menampilkan slide di dalam popup
function showSlideInPopup(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    slideIndex = (index + slides.length) % slides.length; // Looping gambar carousel
    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex) ? 'block' : 'none'; // Menampilkan gambar yang dipilih
    });
}

// Fungsi untuk menggerakkan slide di popup
function moveSlide(n) {
    showSlideInPopup(slideIndex + n);
}

const fakeReviews = [
    {
        name: "Andi",
        email: "andi@example.com",
        rating: 5,
        comment: "Sangat puas dengan layanan ini!",
        color: getRandomColor()
    },
    {
        name: "Budi",
        email: "budi@example.com",
        rating: 4,
        comment: "Pengalaman yang menyenangkan!",
        color: getRandomColor()
    },
    {
        name: "Citra",
        email: "citra@example.com",
        rating: 5,
        comment: "Layanan cepat dan ramah.",
        color: getRandomColor()
    },
    {
        name: "Dewi",
        email: "dewi@example.com",
        rating: 3,
        comment: "Cukup memuaskan, tapi masih bisa lebih baik.",
        color: getRandomColor()
    },
    {
        name: "Eko",
        email: "eko@example.com",
        rating: 4,
        comment: "Akan merekomendasikan kepada teman!",
        color: getRandomColor()
    }
];

let currentReviewIndex = 0;
let autoplayInterval;

// Function to display the current review
function displayFakeReview() {
    const review = fakeReviews[currentReviewIndex];
    document.getElementById('fakeReviewBox').innerHTML = `
        <div class="review-item">
            <div class="profile">
                <div class="profile-pic" style="background-color: ${review.color};">
                    ${review.name.charAt(0)}
                </div>
                <div>
                    <h4>${review.name}</h4>
                    <p>${review.email}</p>
                </div>
            </div>
            <div class="rating-stars">${'⭐'.repeat(review.rating)}</div>
            <p class="comment">${review.comment}</p>
        </div>
    `;
}

// Function to go to the previous review
function prevReview() {
    currentReviewIndex = (currentReviewIndex - 1 + fakeReviews.length) % fakeReviews.length;
    displayFakeReview();
    resetAutoplay();
}

// Function to go to the next review
function nextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % fakeReviews.length;
    displayFakeReview();
    resetAutoplay();
}

// Function to start autoplay
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        nextReview();
    }, 3000); // Change slide every 3 seconds
}

// Function to stop autoplay
function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Function to reset autoplay when navigating manually
function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
}

// Generate a random color for the profile picture
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Initialize the slider
displayFakeReview();
startAutoplay();

// Optional: Add event listeners for pause on hover
const reviewBox = document.getElementById('fakeReviewBox');
reviewBox.addEventListener('mouseenter', stopAutoplay);
reviewBox.addEventListener('mouseleave', startAutoplay);

let rating = 0;
    

   
// Initialize the first fake review
displayFakeReview();

// Fungsi untuk menghasilkan warna acak
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener untuk bintang
document.querySelectorAll('.rating span').forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        // Hover untuk mengubah warna bintang sesuai posisi
        rate(index + 1);
    });

    star.addEventListener('click', () => {
        // Klik untuk menetapkan rating
        rating = index + 1;
        rate(rating);
    });

    star.addEventListener('mouseout', () => {
        // Mengembalikan bintang ke keadaan semula jika tidak diklik
        if (rating === 0) {
            rate(0);
        } else {
            rate(rating); // Menjaga rating tetap
        }
    });
});

// Fungsi untuk menampilkan pop-up
function showPopup(event) {
    event.preventDefault();  // Mencegah pengiriman form
    const popup = document.getElementById("subscriptionPopup");
    popup.style.display = "flex";  // Menampilkan pop-up

    // Reset form setelah pop-up ditampilkan
    const form = document.querySelector(".subscription-form form");
    form.reset(); // Mengosongkan input form
}

// Fungsi untuk menutup pop-up dan reset form
function closePopup() {
    const popup = document.getElementById("subscriptionPopup");
    popup.style.display = "none";  // Menyembunyikan pop-up
}


