// Lightbox Functions
function openLightbox(imageSrc) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  lightboxImg.src = imageSrc;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close lightbox with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

// Toggle Show More Photos
function toggleShowMore() {
  const hiddenPhotos = document.querySelectorAll('.hidden-photo');
  const showMoreBtn = document.getElementById('showMoreBtn');
  
  const isShowing = hiddenPhotos[0].classList.contains('show');
  
  hiddenPhotos.forEach(photo => {
    photo.classList.toggle('show');
  });
  
  if (isShowing) {
    showMoreBtn.innerHTML = '<i class="fas fa-images"></i> Lihat Selengkapnya';
    // Scroll to the photo grid smoothly
    document.getElementById('photoGrid').scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  } else {
    showMoreBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Sembunyikan';
  }
}
