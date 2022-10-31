import {
    showIndicator, hideIndicator,
    changeLanguage, showMobileIndicator,
    openMobileMenu, closeMobileMenu
} from './navigation'

import { closeLogInWindow, openLogInWindow, switchToForm } from './login-window'

/*
    Navigation
*/
document.querySelectorAll('.menu-item').forEach(menuItem => {
    menuItem.addEventListener('mouseenter', event => showIndicator(event as MouseEvent))
    menuItem.addEventListener('mouseleave', hideIndicator)
})
document.querySelectorAll('.mobile-menu-item').forEach(menuItem => {
    menuItem.addEventListener('mouseenter', event => showMobileIndicator(event as MouseEvent))
})

document.querySelectorAll('.language-select').forEach(languageSelect => {
    languageSelect.addEventListener('change', event => changeLanguage(event))
})

document.querySelectorAll('.log-in-button').forEach(button => {
    button.addEventListener('click', openLogInWindow)
})

document.querySelector('.close-window-button')?.addEventListener('click', closeLogInWindow)

document.getElementById('toAuthLink')?.addEventListener('click', () => switchToForm('log-in-form'))
document.getElementById('toRegLink')?.addEventListener('click', () => switchToForm('sign-up-form'))

document.querySelector('.open-menu-button')?.addEventListener('click', openMobileMenu)
document.querySelector('.close-menu-button')?.addEventListener('click', closeMobileMenu)

window.addEventListener('scroll', scrollEvent => {
    const navigation = document.querySelector('.navigation') as HTMLElement
    if(window.scrollY >= 130) {
        navigation.classList.add('navigation-sticky')
    }
    else if(window.scrollY < 100) {
        navigation.classList.remove('navigation-sticky')
    }
})


// Start steps section
document.querySelector('.register-button')?.addEventListener('click', event => {
    switchToForm('sign-up-form')
    openLogInWindow()
})