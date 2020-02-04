$(function(){
    // $('.header').stick(300);
    // $('.section').gridify();
    // $('.scrollex').scrollex({
    //     enter: function(){
    //         alert('entered');
    //     },
    //     leave: function(){
    //         alert('left')
    //     }
    // });
    $('.hamburger').click(function(){
        $('.mobile-nav').toggleClass('show');
        $('.hamburger').toggleClass('is-active');
    });
    $(".rslides").responsiveSlides({
        pager: true,
        nav: true,
        prevText: "",
        nextText: ""
    });
    $(".rslides2").responsiveSlides({
        pager: true,
        nav: true,
        prevText: "",
        nextText: ""
    });

    window.sr = ScrollReveal();
    sr.reveal('.about-item', { duration: 300 }, 300);
    sr.reveal('.service', { duration: 300 }, 300);
    sr.reveal('.price-cont', { duration: 300 }, 300);
    sr.reveal('.map img', { duration: 300 }, 300);

    
});