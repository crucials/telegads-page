import './index.html'
import './index.scss'

import { CountUp } from "countup.js"

import { checkLanguage } from './scripts/language'

window.addEventListener('load', () => {
    import('./scripts/event-handler').then(() => {
        checkLanguage()
    })

    const heroHeading = document.querySelector('h1')
    const servicesList = document.querySelector('.services-list') as HTMLUListElement

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                if(entry.target == heroHeading) {
                    heroHeading.style.opacity = '1'
                    heroHeading.style.transform = 'none'
                    
                    document.querySelector('.start-button')?.classList.add('start-button-loaded')

                    observer.unobserve(heroHeading)
                }
                else if(entry.target == servicesList) {
                    servicesList.querySelectorAll('li').forEach(service => {
                        let timeoutAmount = 0
                        service.querySelectorAll('span').forEach(descriptionPart => {
                            setTimeout(() => {
                                descriptionPart.style.transform = 'none'
                                descriptionPart.style.opacity = '1'
                            }, timeoutAmount)
                            timeoutAmount += 130
                        })
                    })

                    observer.unobserve(servicesList)
                }
            }
        })
    }, { threshold: 0.3 }) 
    if(heroHeading && servicesList) {
        observer.observe(heroHeading)
        observer.observe(servicesList)
    }

    new CountUp('newUsersQuantity', 207228, {
        enableScrollSpy: true,
        scrollSpyOnce: true,
        separator: ' ',
    })
    
    new CountUp('channelsQuantity', 7754, {
        enableScrollSpy: true,
        scrollSpyOnce: true,
        separator: ' ',
    })
    
    new CountUp('ordersQuantity', 460482, {
        enableScrollSpy: true,
        scrollSpyOnce: true,
        separator: ' ',
    })
})