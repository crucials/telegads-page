import { keysTranslations } from './language'

let indicatorHideTimeoutID : number
let mobileIndicatorTimeoutID : number

const mobileMenu = document.querySelector('.mobile-menu')

export function showIndicator(event : MouseEvent) {
    window.clearTimeout(indicatorHideTimeoutID)

    const indicator = document.querySelector('.menu-indicator') as HTMLLIElement
    const hoveredMenuItem = (event.target as HTMLLIElement)
    const itemKey = hoveredMenuItem.querySelector('a')?.getAttribute('data-translatable')

    let indicatorLeft : number

    if(itemKey == 'aboutUsLink') {
        indicatorLeft = hoveredMenuItem.offsetLeft - 30
    }
    else if(itemKey == 'advantagesLink') {
        indicatorLeft = hoveredMenuItem.offsetLeft - 5
    }
    else if(itemKey == 'servicesLink' || itemKey == 'contactsLink') {
        indicatorLeft = hoveredMenuItem.offsetLeft - 20
    }
    else {
        indicatorLeft = hoveredMenuItem.offsetLeft
    }

    indicator.classList.add('menu-indicator-visible')
    indicator.style.left = `${indicatorLeft}px`
}

export function hideIndicator() {
    indicatorHideTimeoutID = window.setTimeout(() => {
        document.querySelector('.menu-indicator')?.classList.remove('menu-indicator-visible')
    }, 500)
}

export function changeLanguage(event : Event) {
    const newLanguage = (event.target as HTMLSelectElement).value

    document.querySelectorAll('[data-translatable]').forEach(translatableElement => {
        const translateKey = translatableElement.getAttribute('data-translatable')
        
        if(translateKey) {
            const translation = (keysTranslations.get(translateKey) as Map<string, string>).get(newLanguage)
            
            if(translation) {
                if(translateKey.startsWith('title:')) {
                    (translatableElement as HTMLElement).title = translation
                }
                else {
                    translatableElement.textContent = translation 
                }

                localStorage.setItem('language', newLanguage)
                document.querySelectorAll('.language-select').forEach(select => {
                    (select as HTMLSelectElement).value = newLanguage
                })
            }
        }
    })
}

export function showMobileIndicator(event : MouseEvent) {
    const indicator = document.querySelector('.mobile-menu-indicator') as HTMLLIElement
    const hoveredMenuItem = (event.target as HTMLLIElement)
    const itemKey = hoveredMenuItem.querySelector('a')?.getAttribute('data-translatable')

    indicator.style.display = 'block'
    indicator.style.top = `${hoveredMenuItem.offsetTop}px`
}

export function openMobileMenu() {
    mobileMenu?.classList.add('menu-opened')
}

export function closeMobileMenu() {
    mobileMenu?.classList.remove('menu-opened')
}