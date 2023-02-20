const imgs = document.querySelectorAll('.img img')
const navItems = document.querySelectorAll('.nav-menu-item')

imgs[0].classList.add('active')
navItems[0].classList.add('active')

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
        clearActive()
        navItems[i].classList.add('active')
        imgs[i].classList.add('active')
    })
}

function clearActive() {
    navItems.forEach(item => {
        item.classList.remove('active')
    })

    imgs.forEach(img => {
        img.classList.remove('active')
    })
}