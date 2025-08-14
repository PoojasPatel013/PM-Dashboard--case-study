let currentSlide = 0
const totalSlides = 8
const slidesWrapper = document.getElementById("slidesWrapper")
const navDots = document.querySelectorAll(".nav-dot")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")

function updateSlide(slideIndex) {
  currentSlide = slideIndex
  const translateX = -(slideIndex * 12.5)
  slidesWrapper.style.transform = `translateX(${translateX}%)`

  navDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === slideIndex)
  })
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    updateSlide(currentSlide + 1)
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    updateSlide(currentSlide - 1)
  }
}

// Navigation event listeners
navDots.forEach((dot, index) => {
  dot.addEventListener("click", () => updateSlide(index))
})

nextBtn.addEventListener("click", nextSlide)
prevBtn.addEventListener("click", prevSlide)

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " ") {
    e.preventDefault()
    nextSlide()
  } else if (e.key === "ArrowLeft") {
    e.preventDefault()
    prevSlide()
  }
})

// Touch/swipe support
let startX = 0
let endX = 0

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX
})

document.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX
  const diff = startX - endX

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
})

// Initialize presentation
document.addEventListener("DOMContentLoaded", () => {
  updateSlide(0)
})
