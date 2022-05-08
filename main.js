window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  changeNavOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(depositions)
  activateMenuAtCurrentSection(about)
}

function changeNavOnScroll() {
  if (scrollY > 10) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function activateMenuAtCurrentSection(section) {
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionReachOrPassecTargetLine =
    targetLine >= sectionTop && targetLine <= sectionEndsAt
      ? menuElement.classList.add('active')
      : menuElement.classList.remove('active')
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  keyboard: true,
  simulateTouch: true,
  spaceBetween: 20,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    1023: {
      slidesPerView: 2,
      setWrapperSize: true,
      spaceBetween: 40
    }
  }
})

ScrollReveal({ origin: 'top', distance: '30px', duration: 700 }).reveal(`
#home,
#home img,
#services,
#services .card,
#depositions,
#depositions .swiper-wrapper,
#about,
#about .stats,
#contact,
footer
`)
