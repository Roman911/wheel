import { useI18n } from './i18n.js';
import { useWheelAnimation } from './animation.js';

$(document).ready(() => {
    const currencies = [''];
    const currentCurrency = currencies[0];

    const {
        locale,
        translation,
        applyTranslation
    } = useI18n();
    const {
        setupAnimation
    } = useWheelAnimation(translation, currentCurrency);

    applyTranslation();
    setupAnimation();

    const closeModal = () => {
        $('#final-modal').fadeOut()
        $('#stage-modal').fadeOut()
    };

    $('.modal__close').on('click', closeModal)

    $('#regBtn').on('click', function () {
        const link = "https://afftrafi.co/ktVmDV?";
        const sPageURL = window.location.search.substring(1);
        const mainLink = link + "&" + sPageURL;
        window.location.href = mainLink;
    });

    if (locale && ['es-BR', 'es-CL', 'es-PE'].includes(locale)) {
        if(window.screen.width <= 600) {
            $('.wheel__text').css('font-size', '10px');
        } else $('.wheel__text').css('font-size', '15px');
    }
})
