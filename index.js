// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// --- Hero slider ---
const heroSlides = document.querySelectorAll('.hero-slide')
const heroDots = document.querySelectorAll('.hero-slider__dot')
const heroPrev = document.getElementById('heroPrev')
const heroNext = document.getElementById('heroNext')

let currentSlide = 0
let slideTimer

function showSlide(index) {
  currentSlide = (index + heroSlides.length) % heroSlides.length

  heroSlides.forEach((slide, i) => {
    slide.classList.toggle('hero-slide--active', i === currentSlide)
  })
  heroDots.forEach((dot, i) => {
    dot.classList.toggle('hero-slider__dot--active', i === currentSlide)
  })
}

function startSlideTimer() {
  clearInterval(slideTimer)
  slideTimer = setInterval(() => showSlide(currentSlide + 1), 5000)
}

if (heroSlides.length > 0) {
  heroPrev.addEventListener('click', () => {
    showSlide(currentSlide - 1)
    startSlideTimer() // restart the 5s timer after a manual click
  })

  heroNext.addEventListener('click', () => {
    showSlide(currentSlide + 1)
    startSlideTimer()
  })

  heroDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      showSlide(Number(dot.dataset.slide))
      startSlideTimer()
    })
  })

  startSlideTimer()
}
