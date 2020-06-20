$(document).ready(function () {


    const controller = new ScrollMagic.Controller();

    gsap.timeline()
        .to(".header__initial-animation_top", {y: -8000, duration: 8.3, delay: 0}, 0)
        .to(".header__initial-animation_opacity", {opacity: 0, duration: 3, delay: 0.6}, 0)
        .from(".Header__logo-top", {x: 400, duration: 0.8, delay: 0.6}, 0)
        .from(".Header__logo-bottom", {x: -400, duration: 0.8, delay: 0.6}, 0)
        .from(".nav__container", {y: 200, duration: 1.3, delay: 0.4}, 0);

    const pekeMedialab = gsap.timeline()
        .fromTo(".Header__logo-top", {x: 0}, {x: window.innerWidth}, 0)
        .fromTo(".Header__logo-bottom", {x: 0}, {x: -window.innerWidth}, 0)
        .fromTo('.header-opacity', {opacity: 1}, {opacity: 0}, 0);


    new ScrollMagic.Scene({
        triggerElement: ".content",
        triggerHook: .9

    })
        .setClassToggle(".nav__text-info", "nav-tex-logo-margin")
        .addIndicators()
        .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: ".content",
        triggerHook: .9

    })
        .setClassToggle(".nav__logo_center-animated", "nav-logo-margin")
        .addIndicators()
        .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: ".Header",
        duration: 700,
        triggerHook: 0
    })
        .setTween(pekeMedialab)
        .addIndicators()
        .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: ".customers-info__slider",
        triggerHook: .1
    })
        .setClassToggle(".background-style", "background-style-ff")
        .addIndicators()
        .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: ".customers-info__slider",
        triggerHook: .1

    })
        .setClassToggle(".nav__logo-text", "logo-black")
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".pml-live",
        triggerHook: .1

    })
        .setClassToggle(".nav__logo-text", "logo-white")
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section-integration",
        triggerHook: .1

    })
        .setClassToggle(".nav__logo-text", "logo-black-2")
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section-experience",
        triggerHook: .1

    })
        .setClassToggle(".nav__logo-text", "logo-white-2")
        .addIndicators()
        .addTo(controller);

    const countUp = gsap.timeline();
    countUp
        .from("#customers-info__statistics-1", {
            y: 100,
            opacity: 0,
            onStart: () => {
                $('#number1').animateNumber(
                    {
                        number: 10000,
                        numberStep: $.animateNumber.numberStepFactories.separator(' ')
                    },
                    {
                        easing: 'linear',
                        duration: 700
                    }
                );
            }
        }, 0)
        .from("#customers-info__statistics-2", {
            y: 100,
            opacity: 0,
            delay: .3,
            onStart: () => {
                $('#number2').animateNumber(
                    {
                        number: 20
                    },
                    {
                        easing: 'linear',
                        duration: 700
                    }
                );
            }
        }, 0)
        .from("#customers-info__statistics-3", {
            y: 100,
            opacity: 0,
            delay: .6,
            onStart: () => {
                $('#number3').animateNumber(
                    {
                        number: 50
                    },
                    {
                        easing: 'linear',
                        duration: 700
                    }
                );
            }
        }, 0)
        .from("#customers-info__statistics-4", {
            y: 100,
            opacity: 0,
            delay: .9,
            onStart: () => {
                $('#number4').animateNumber(
                    {
                        number: 20
                    },
                    {
                        easing: 'linear',
                        duration: 700
                    }
                );
            }
        }, 0)
        .from(".customers-info__control", {y: 200, duration: .7, delay: .1}, 0)
        .from(".control", {opacity: 0, duration: 1.5, delay: 1}, 0)
        .from(".customers-info__slider", {x: 800, duration: 1.7, delay: .6}, 0)
    new ScrollMagic.Scene({
        triggerElement: '.customers-info__statistics',
        triggerHook: 1,
        reverse: false
    })
        .setTween(countUp)
        .addTo(controller);


    const mediaHab = gsap.timeline();
    mediaHab
        .from("#MediaHab-img-1", {y: 200, duration: 1, delay: .8}, 0)
        .from("#MediaHab-h2-1", {y: 200, duration: 1, delay: .4}, 0)
        .from("#MediaHab-ul-1", {y: 200, duration: 1, delay: 1}, 0)
    new ScrollMagic.Scene({
        triggerElement: '.MediaHab',
        triggerHook: 1,
        offset: 50,
        reverse: false
    })
        .setTween(mediaHab)
        .addTo(controller);

    const digitalArchive = gsap.timeline();
    digitalArchive
        .from("#Digital-archive-img-1", {y: 200, duration: 1, delay: .8}, 0)
        .from("#Digital-archive-h2-1", {y: 200, duration: 1, delay: .4}, 0)
        .from("#Digital-archive-pc-logo", {y: 200, duration: 1.2, delay: .6}, 0)
        .from("#Digital-archive-ul-1", {y: 200, duration: 1, delay: 1}, 0)
    new ScrollMagic.Scene({
        triggerElement: '.Digital-archive',
        triggerHook: 1,
        offset: 50,
        reverse: false
    })
        .setTween(digitalArchive)
        .addTo(controller);


    const signalcreation = gsap.timeline();
    signalcreation
        .from("#Signal-creation-img-1", {y: 200, duration: 1, delay: .8}, 0)
        .from("#Signal-creation-h2-1", {y: 200, duration: 1, delay: .4}, 0)
        .from("#Signal-creation-ul-1", {y: 200, duration: 1, delay: 1}, 0)
    new ScrollMagic.Scene({
        triggerElement: '.Signal-creation',
        triggerHook: 1,
        offset: 50,
        reverse: false
    })
        .setTween(signalcreation)
        .addTo(controller);


    const creaturePromo = gsap.timeline();
    creaturePromo
        .from("#Creature-promo-img-1", {y: 200, duration: 1, delay: .8}, 0)
        .from("#Creature-promo-h2-1", {y: 200, duration: 1, delay: .4}, 0)
        .from("#Creature-promo-pc-logo", {y: 200, duration: 1.2, delay: .6}, 0)
        .from("#Creature-promo-ul-1", {y: 200, duration: 1, delay: 1}, 0)
    new ScrollMagic.Scene({
        triggerElement: '.Creature-promo',
        triggerHook: 1,
        offset: 50,
        reverse: false
    })
        .setTween(creaturePromo)
        .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: ".pml-live",
        triggerHook: .5

    })
        .setClassToggle(".pml-live__text_top", "pml-live__text_top-hide-non")
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section-integration__content",
        triggerHook: .5
    })
        .setClassToggle(".pml-live__text_top", "hide-right")
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".pml-live",
        triggerHook: .5

    })
        .setClassToggle(".pml-live__text_center", "pml-live__text_center-hide-non")
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section-integration__content",
        triggerHook: .5
    })
        .setClassToggle(".pml-live__text_center", "hide-right")
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".pml-live",
        triggerHook: .5

    })
        .setClassToggle(".pml-live__text_bottom", "pml-live__text_bottom-hide-non")
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section-integration__content",
        triggerHook: .5
    })
        .setClassToggle(".pml-live__text_bottom", "hide-right")
        .addIndicators()
        .addTo(controller);


    const sectionIntegration = gsap.timeline();
    sectionIntegration
        .from(".section-integration__box", {x: -250, opacity: 0, duration: 2, delay: .6}, 0)
        .from(".section-integration__box_mobil", {x: -250, opacity: 0, duration: 2, delay: .6}, 0)
        .from(".section-integration__text", {x: -250, opacity: 0, duration: 2, delay: 1}, 0)
    new ScrollMagic.Scene({
        triggerElement: '.section-integration__content',
        triggerHook: .9,
        offset: 50,
        reverse: false
    })
        .setTween(sectionIntegration)
        .addTo(controller);


    const sectionExperience = gsap.timeline();
    sectionExperience
        .from(".experience__Slider", {x: 500, duration: 1.5, delay: .6}, 0)
    new ScrollMagic.Scene({
        triggerElement: '.section-experience',
        triggerHook: .8,
        offset: 50,
        reverse: false
    })
        .setTween(sectionExperience)
        .addTo(controller);


    const communication = gsap.timeline();
    communication
        .from("#section-communication-h2-1", {y: 300, duration: .5, delay: .2}, 0)
        .from(".section-communication__text", {y: 300, duration: 1.2, delay: .6}, 0)
        .from(".section-communication__form", {y: 300, duration: 1.5, delay: .6}, 0)
    new ScrollMagic.Scene({
        triggerElement: '.section-communication',
        triggerHook: .8,
        offset: 50,
        reverse: false
    })
        .setTween(communication)
        .addTo(controller);


    $('.customers-info__slider').slick({ // Слайдер
        variableWidth: true,
        arrows: true,
        slidesToShow: 3,
        infinite: false,
        nextArrow: '#customers-info__slider_next',
        prevArrow: '#customers-info__slider_previous',
        responsive: [{
            breakpoint: 1441,
            settings: {
                slidesToShow: 2,
            }
        },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                }
            }]
    });
    $('.experience__Slider').slick({ // Слайдер
        variableWidth: true,
        arrows: true,
        slidesToShow: 3,
        infinite: false,
        nextArrow: '#experience__slider_next',
        prevArrow: '#experience__slider_previous',
        responsive: [{
            breakpoint: 1441,
            settings: {
                slidesToShow: 2,
            }
        },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                }
            }]
    });

    $("#phone").inputmask({mask: "+7 (999) 999-99-99", jitMasking: true, showMaskOnHover: null});
    $("input[id='phone']").blur(() => {
        if ($("input[id='phone']").val().length < 18) {
            $('#phone').css('border-color', 'red')
        } else if ($("input[id='phone']").val().length = 18) {
            $('#phone').css('border-color', 'white')
        }
    });
    $("input[id='phone']").focus(() => {
        $('#phone').css('color', 'white')
    })
    $("input[id='name']").blur(() => {
        if ($("input[id='name']").val().length > 0) {
            $('#name').css('border-color', 'white')
        }

    });
    $("textarea[id='message']").blur(() => {
        if ($("textarea[id='message']").val().length > 0) {
            $('#message').css('border-color', 'white')
        }

    });

    $('#button-form').click(() => {
        if ($("input[id='name']").val().length < 1) {
            alert('Не корректно заполнена форма')
        } else if ($("input[id='phone']").val().length < 18) {
            alert('Не корректно заполнена форма')
        } else if ($("textarea[id='message']").val().length < 1) {
            alert('Не корректно заполнена форма')
        } else {
            alert('Отправлено!')
            $("input[id='name']").val('')
            $("input[id='phone']").val('')
            $("textarea[id='message']").val('')
        }
    })

    $("#phone1").inputmask({mask: "+7 (999) 999-99-99", jitMasking: true, showMaskOnHover: null});
    $("input[id='phone1']").blur(() => {
        if ($("input[id='phone1']").val().length < 18) {
            $('#phone1').css('border-color', 'red')
        } else if ($("input[id='phone1']").val().length = 18) {
            $('#phone1').css('border-color', 'white')
        }
    });
    $("input[id='phone1']").focus(() => {
        $('#phone1').css('color', 'white')
    })
    $("input[id='name1']").blur(() => {
        if ($("input[id='name1']").val().length > 0) {
            $('#name1').css('border-color', 'white')
        }

    });
    $("textarea[id='message1']").blur(() => {
        if ($("textarea[id='message1']").val().length > 0) {
            $('#message1').css('border-color', 'white')
        }

    });

    $('#button-form1').click(() => {
        if ($("input[id='name1']").val().length < 1) {
            alert('Не корректно заполнена форма')
        } else if ($("input[id='phone1']").val().length < 18) {
            alert('Не корректно заполнена форма')
        } else if ($("textarea[id='message1']").val().length < 1) {
            alert('Не корректно заполнена форма')
        } else {
            alert('Отправлено!')
            $("input[id='name1']").val('')
            $("input[id='phone1']").val('')
            $("textarea[id='message1']").val('')
        }
    })

    const spinningLogo = new gsap.timeline();
    spinningLogo
        .to("#rotateText1", {rotation: 360}, 0)

    new ScrollMagic.Scene({
        triggerElement: ".Digital-archive",
        duration: 1800,
        triggerHook: 1
    })
        .setTween(spinningLogo)
        .addIndicators()
        .addTo(controller);

    const spinningLogoSix = new gsap.timeline();
    spinningLogoSix
        .to("#rotateText2", {rotation: 360}, 0)

    new ScrollMagic.Scene({
        triggerElement: ".Creature-promo",
        duration: 1800,
        triggerHook: 1
    })
        .setTween(spinningLogoSix)
        .addIndicators()
        .addTo(controller);

    $('.nav__button').click(() => {
        $(".pop-up").toggleClass("pop-up-activate")
    });

    $('.exit').click(() => {
        $(".pop-up").toggleClass("pop-up-activate", false)
    });



    SmoothScroll({animationTime: 500, stepSize: 50})

});
