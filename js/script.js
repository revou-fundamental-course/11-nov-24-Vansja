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
    carouselImages.innerHTML = ''; 

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

//isi reveiw
const fakeReviews = [
    {
        name: "Andi",
        email: "andi42@gmail.com",
        rating: 5,
        comment: "Sangat puas dengan layanan ini! V&J Travel adalah pilihan utamaku untuk berpetualang",
        color: getRandomColor()
    },
    {
        name: "Budi",
        email: "budi21@gmail.com",
        rating: 4,
        comment: "Pengalaman yang menyenangkan ditawarkan V&J Travel tak akan pernah kulupakan",
        color: getRandomColor()
    },
    {
        name: "Citra",
        email: "citra11@gmail.com",
        rating: 5,
        comment: "Pelayanan V&J Travel adalah yagn terbaik yang saya alami",
        color: getRandomColor()
    },
    {
        name: "Dewi",
        email: "dewi321@gmail.com",
        rating: 3,
        comment: "Cukup memuaskan, tapi masih bisa lebih baik.",
        color: getRandomColor()
    },
    {
        name: "Eko",
        email: "ekopart33@gmail.com",
        rating: 4,
        comment: "Akan merekomendasikan kepada teman!",
        color: getRandomColor()
    }
];

let currentReviewIndex = 0;
let autoplayInterval;


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

// review sebelum
function prevReview() {
    currentReviewIndex = (currentReviewIndex - 1 + fakeReviews.length) % fakeReviews.length;
    displayFakeReview();
    resetAutoplay();
}

// review lanjut
function nextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % fakeReviews.length;
    displayFakeReview();
    resetAutoplay();
}

// autoplay 3 detik
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        nextReview();
    }, 3000); 
}


function stopAutoplay() {
    clearInterval(autoplayInterval);
}


function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
}

// pf warna acak
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


displayFakeReview();
startAutoplay();


const reviewBox = document.getElementById('fakeReviewBox');
reviewBox.addEventListener('mouseenter', stopAutoplay);
reviewBox.addEventListener('mouseleave', startAutoplay);

let rating = 0;
    

   

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


document.querySelectorAll('.rating span').forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        // Hover untuk mengubah warna bintang sesuai posisi
        rate(index + 1);
    });

    star.addEventListener('click', () => {
      
        rating = index + 1;
        rate(rating);
    });

    star.addEventListener('mouseout', () => {
      k
        if (rating === 0) {
            rate(0);
        } else {
            rate(rating); 
        }
    });
});

// Fungsi untuk menampilkan pop-up
function showPopup(event) {
    event.preventDefault(); 
    const popup = document.getElementById("subscriptionPopup");
    popup.style.display = "flex";  

    // Reset form setelah pop-up ditampilkan
    const form = document.querySelector(".subscription-form form");
    form.reset(); 
}

// Fungsi untuk menutup pop-up dan reset form
function closePopup() {
    const popup = document.getElementById("subscriptionPopup");
    popup.style.display = "none";  // Menyembunyikan pop-up
}



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

