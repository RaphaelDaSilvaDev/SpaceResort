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
