let text = document.querySelector('.text')
let title = document.querySelector('.title')
let hero = document.querySelector('.heroImage')
let mediaQuery = window.matchMedia('(min-width: 800px)')

changeTextFoward()
changeTextBack()

function changeTextFoward (){
    if(text.classList.contains('a')){

        title.innerText = `We are available all across the globe`
        text.innerText = `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`
        if(mediaQuery.matches) {
            hero.src = '../images/desktop-image-hero-2.jpg'
        }else {
            hero.src = '../images/mobile-image-hero-2.jpg'
        }
        text.classList.remove('a')
        text.classList.add('b')
        return;
    }
    if(text.classList.contains('b')){
        title.innerText = `Manufactured with the best materials`
        text.innerText = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
        if(mediaQuery.matches){
            hero.src = '../images/desktop-image-hero-3.jpg'
        }else {
            hero.src = '../images/mobile-image-hero-3.jpg'
        }
        text.classList.remove('b')
        text.classList.add('c')
        return;
    }
    if(text.classList.contains('c')) {
        title.innerText = `Discover innovative ways to decorate`
        text.innerText = `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`
        if(mediaQuery.matches){
            hero.src = '../images/desktop-image-hero-1.jpg'
        }else {
            hero.src = '../images/mobile-image-hero-1.jpg'
        }
        text.classList.remove('c')
        text.classList.add('a')
        return;
    }
}

function changeTextBack () {
    if(text.classList.contains('a')){
        title.innerText = `Manufactured with the best materials`
        text.innerText = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
        if(mediaQuery.matches){
            hero.src = '../images/desktop-image-hero-3.jpg'

        }else {
            hero.src = '../images/mobile-image-hero-3.jpg'

        }
        text.classList.remove('a')
        text.classList.add('c')
        return;
    }
    if(text.classList.contains('c')) {
        title.innerText = `We are available all across the globe`
        text.innerText = `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`
        if(mediaQuery.matches){
            hero.src = '../images/desktop-image-hero-2.jpg'

        }else {
            hero.src = '../images/mobile-image-hero-2.jpg'

        }
        text.classList.remove('c')
        text.classList.add('b')
        return;
    }
    if(text.classList.contains('b')){
        title.innerText = `Discover innovative ways to decorate`
        text.innerText = `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`
        if(mediaQuery.matches){
            hero.src = '../images/desktop-image-hero-1.jpg'
        }else {
            hero.src = '../images/mobile-image-hero-1.jpg'
        }
        text.classList.remove('b')
        text.classList.add('a')
        return;
    }

}


