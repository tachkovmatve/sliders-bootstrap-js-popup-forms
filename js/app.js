$(document).ready(function(){
    //HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        navText: ['PREV','NEXT'],
        smartSpeed: 1000,
        responsive:{
            0:{
                nav: false,
            },
            768:{
                nav: true,
            },
            1000:{
                
            }
        }
    })



     //PROJECT SLIDER
     $('#project-slider').owlCarousel({
        loop:true,
        margin:24,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2,
            },
            1140:{
                items: 2,
                center: true,
            }
        }
    })


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        items: 1,
        smartSpeed: 1000,
    })
});