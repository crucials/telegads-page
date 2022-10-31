const LANGUAGES_AVAILABLE = ['ru', 'en']

export const keysTranslations = new Map(Object.entries({
    aboutUsLink: new Map(Object.entries({
        ru: 'О нас',
        en: 'About us'
    })),

    advantagesLink: new Map(Object.entries({
        ru: 'Преимущества',
        en: 'Advantages'
    })),

    servicesLink: new Map(Object.entries({
        ru: 'Сервисы',
        en: 'Services'
    })),

    contactsLink: new Map(Object.entries({
        ru: 'Контакты',
        en: 'Contacts'
    })),

    logInButton: new Map(Object.entries({
        ru: 'ВХОД / РЕГИСТРАЦИЯ',
        en: 'LOG IN / SIGN UP'
    })),

    logInFormHeading: new Map(Object.entries({
        ru: 'Авторизация',
        en: 'Authentication'
    })),

    signUpFormHeading: new Map(Object.entries({
        ru: 'Регистрация',
        en: 'Registration'
    })),

    loginFieldLabel: new Map(Object.entries({
        ru: 'Логин',
        en: 'Login'
    })),

    passwordFieldLabel: new Map(Object.entries({
        ru: 'Пароль',
        en: 'Password'
    })),

    submitButton: new Map(Object.entries({
        ru: 'Далее',
        en: 'Forward'
    })),

    toRegistrationLink: new Map(Object.entries({
        ru: 'Регистрация',
        en: 'Registration'
    })),

    toAuthenticationLink: new Map(Object.entries({
        ru: 'Авторизация',
        en: 'Authentication'
    })),

    'title:questionIcon': new Map(Object.entries({
        ru: 'Пароль должен быть не менее 8 символов',
        en: 'Password must be at least 8 characters long'
    })),

    repeatPasswordFieldLabel: new Map(Object.entries({
        ru: 'Повторите пароль',
        en: 'Repeat your password'
    })),

    heroHeading: new Map(Object.entries({
        ru: 'Эффективная реклама в Telegram',
        en: 'Effective advertisement in Telegram'
    })),

    heroText: new Map(Object.entries({
        ru: 'Мы помогаем найти целевую аудиторию в Telegram и запускать эффективные рекламные кампании',
        en: 'We help you find your target audience in Telegram and launch effective advertising campaigns'
    })),

    startButton: new Map(Object.entries({
        ru: 'НАЧАТЬ СЕЙЧАС',
        en: 'START NOW'
    })),

    newUsersStatistic: new Map(Object.entries({
        ru: 'новых пользователей на бирже',
        en: 'new users on the market'
    })),

    checkedChannelsStatistic: new Map(Object.entries({
        ru: 'каналов, проверенных вручную',
        en: 'channels checked manually'
    })),

    ordersStatistic: new Map(Object.entries({
        ru: 'успешно реализованных заказов',
        en: 'successfully implemented orders'
    })),

    clientsHeadingPart1: new Map(Object.entries({
        ru: 'Нам',
        en: 'They'
    })),

    clientsHeadingPart2: new Map(Object.entries({
        ru: 'доверяют',
        en: 'trust us'
    })),

    registerStepTitle: new Map(Object.entries({
        ru: 'Регистрируйте аккаунт',
        en: 'Create an account'
    })),

    registerStepDescription: new Map(Object.entries({
        ru: 'Пройдите быструю регистрацию чтобы активировать аккаунт.',
        en: 'Pass a quick registration to activate your account'
    })),

    registerButton: new Map(Object.entries({
        ru: 'Регистрация',
        en: 'Registration'
    })),

    channelsStepTitle: new Map(Object.entries({
        ru: 'Каталог каналов',
        en: 'Channels catalog'
    })),

    channelsStepDescription: new Map(Object.entries({
        ru: 'Выберите подходящие каналы в каталоге.',
        en: 'Choose necessary channels in the catalog'
    })),

    paymentStepTitle: new Map(Object.entries({
        ru: 'Пополните баланс',
        en: 'Replenish your balance'
    })),

    paymentStepDescription: new Map(Object.entries({
        ru: 'Пополните баланс удобным способом:',
        en: 'Replenish your balance in a convenient way:'
    })),

    servicesHeadingPart1: new Map(Object.entries({
        ru: 'Начните работать',
        en: 'Start working'
    })),

    servicesHeadingPart2: new Map(Object.entries({
        ru: 'с нами',
        en: 'with us'
    })),

    advertServiceHeading: new Map(Object.entries({
        ru: 'Рекламодателям',
        en: 'For advertisers'
    })),

    advertServiceDescriptionPart1: new Map(Object.entries({
        ru: 'Продвигайте',
        en: 'Promote'
    })),

    advertServiceDescriptionPart2: new Map(Object.entries({
        ru: 'свой бизнес с',
        en: 'your business with'
    })),

    advertServiceDescriptionPart3: new Map(Object.entries({
        ru: 'помощью эффективной',
        en: 'the help of effective'
    })),

    advertServiceDescriptionPart4: new Map(Object.entries({
        ru: 'рекламы в Telegram',
        en: 'advertising in Telegram'
    })),
    
    adminServiceHeading: new Map(Object.entries({
        ru: 'Администраторам',
        en: 'For administrators'
    })),

    adminServiceDescriptionPart1: new Map(Object.entries({
        ru: 'Зарабатывайте',
        en: 'Earn'
    })),

    adminServiceDescriptionPart2: new Map(Object.entries({
        ru: 'деньги на раз',
        en: 'money on adver'
    })),

    adminServiceDescriptionPart3: new Map(Object.entries({
        ru: 'мещении рекламы',
        en: 'tising'
    })),

    adminServiceDescriptionPart4: new Map(Object.entries({
        ru: 'в своих каналах',
        en: 'in your channels'
    })),

    adminServiceDescriptionPart5: new Map(Object.entries({
        ru: 'и группах',
        en: 'and groups'
    })),

    channelServiceHeading: new Map(Object.entries({
        ru: 'Агентствам',
        en: 'For agencies'
    })),

    channelServiceDescriptionPart1: new Map(Object.entries({
        ru: 'Telegram -',
        en: 'Telegram -'
    })),

    channelServiceDescriptionPart2: new Map(Object.entries({
        ru: 'новый маркетинговый',
        en: 'new marketing'
    })),

    channelServiceDescriptionPart3: new Map(Object.entries({
        ru: 'канал для',
        en: 'channel for'
    })),

    channelServiceDescriptionPart4: new Map(Object.entries({
        ru: 'ваших клиентов',
        en: 'your clients'
    })),

    registrationHeading: new Map(Object.entries({
        ru: 'Регистрация',
        en: 'Registration'
    })),

    registrationDescription: new Map(Object.entries({
        ru: 'Создайте аккаунт через Telegram всего за пару кликов',
        en: 'Create an account via Telegram in just a couple of clicks'
    })),

    createButton: new Map(Object.entries({
        ru: 'СОЗДАТЬ АККАУНТ',
        en: 'CREATE AN ACCOUNT'
    })),

    contactHeading: new Map(Object.entries({
        ru: 'Возникли вопросы?',
        en: 'Any questions?'
    })),

    contactText: new Map(Object.entries({
        ru: 'Напишите нам и мы ответим Вам в ближайшее время',
        en: 'Contact us and we will respond to you soon'
    })),

    vkContact: new Map(Object.entries({
        ru: 'НАПИСАТЬ В ВКОНТАКТЕ',
        en: 'CONTACT THROUGH VKONTAKTE'
    })),

    facebookContact: new Map(Object.entries({
        ru: 'НАПИСАТЬ В FACEBOOK',
        en: 'CONTACT THROUGH FACEBOOK'
    })),

    telegramContact: new Map(Object.entries({
        ru: 'НАПИСАТЬ В TELEGRAM',
        en: 'CONTACT THROUGH TELEGRAM'
    })),

    navLinksHeading: new Map(Object.entries({
        ru: 'Навигация',
        en: 'Navigation'
    })),

    catalogLink: new Map(Object.entries({
        ru: 'Каталог каналов',
        en: 'Channels catalog'
    })),

    forAdvertisersLink: new Map(Object.entries({
        ru: 'Рекламодателям',
        en: 'For advertisers'
    })),

    forAdminsLink: new Map(Object.entries({
        ru: 'Администраторам',
        en: 'For administrators'
    })),

    forAgenciesLink: new Map(Object.entries({
        ru: 'Агентствам',
        en: 'For agencies'
    })),

    referralProgramLink: new Map(Object.entries({
        ru: 'Реферальная программа',
        en: 'Referral program'
    })),

    articlesLink: new Map(Object.entries({
        ru: 'Статьи',
        en: 'Articles'
    })),

    emailHeading: new Map(Object.entries({
        ru: 'Связь с нами',
        en: 'Contact us'
    })),

}))

export function checkLanguage() {
    const languageSelect = document.querySelector('.language-select') as HTMLSelectElement
    let language : string

    if(navigator.language == 'ru') {
        language = 'ru'
    }
    else if(navigator.language == 'en') {
        language = 'en'
    }
    else {
        return
    }

    const languageFromStorage = localStorage.getItem('language')
    if(languageFromStorage != null) {
        if(LANGUAGES_AVAILABLE.includes(languageFromStorage)) {
            language = languageFromStorage
        }
    }

    languageSelect.value = language
    languageSelect.dispatchEvent(new Event('change'))
}