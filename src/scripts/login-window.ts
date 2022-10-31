const window = document.querySelector('.log-in-window') as HTMLDialogElement
const backdrop = document.querySelector('.log-in-backdrop') as HTMLDivElement

backdrop.addEventListener('click', event => closeLogInWindow())

export function openLogInWindow() {
    window.open = true
    backdrop.classList.add('backdrop-visible')
}

export function closeLogInWindow() {
    window.open = false
    backdrop.classList.remove('backdrop-visible')
}

export function switchToForm(formClassName : string) {
    window.querySelectorAll('.account-form').forEach(form => {
        const accountForm = form as HTMLFormElement

        if(!accountForm.classList.contains(formClassName)) {
            accountForm.hidden = true
        }
        else if(accountForm.classList.contains(formClassName)) {
            accountForm.hidden = false
        }
    })
}