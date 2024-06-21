/*=============== SWIPER ===============*/
let swiperHome = new Swiper(".merch-swiper", {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    grabCursor: true,
    slidesPerView: "auto",

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    breakpoints: {
        768: { slidesPerView: 3, centeredSlides: "auto" },
        1152: { centeredSlides: "auto", spaceBetween: -64 },
    },
});

let swiperPartner = new Swiper(".partners-swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    autoplay: {
        delay: 1500, // Delay between transitions in milliseconds (5 seconds in this case)
        disableOnInteraction: false, // Continue autoplay even when user interacts with swiper
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    slidesPerView: 4,
    spaceBetween: 10,
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    //reset: true //animations repeat
});

sr.reveal(".merch-swiper");
sr.reveal(".merch-circle", { scale: 1.5, delay: 300 });
sr.reveal(".merch-subcircle", { scale: 1.5, delay: 500 });
sr.reveal(".merch-title", { scale: 1, origin: "bottom", delay: 1200 });
sr.reveal(".swiper-button-prev, .swiper-button-next", { origin: "bottom" });

/*=============== particles config ===============*/
// particlesJS(
//     "particles-js",

//     {
//         particles: {
//             number: {
//                 value: 120,
//                 density: {
//                     enable: true,
//                     value_area: 800,
//                 },
//             },
//             color: {
//                 value: "#000000",
//             },
//             shape: {
//                 type: "edge",
//                 stroke: {
//                     width: 2,
//                     color: "#ffdf00",
//                 },
//                 polygon: {
//                     nb_sides: 5,
//                 },
//                 image: {
//                     src: "img/github.svg",
//                     width: 100,
//                     height: 100,
//                 },
//             },
//             opacity: {
//                 value: 0.5,
//                 random: false,
//                 anim: {
//                     enable: false,
//                     speed: 1,
//                     opacity_min: 0.1,
//                     sync: false,
//                 },
//             },
//             size: {
//                 value: 4,
//                 random: true,
//                 anim: {
//                     enable: false,
//                     speed: 40,
//                     size_min: 0.1,
//                     sync: false,
//                 },
//             },
//             line_linked: {
//                 enable: true,
//                 distance: 150,
//                 color: "#ffffff",
//                 opacity: 0.4,
//                 width: 1,
//             },
//             move: {
//                 enable: true,
//                 speed: 6,
//                 direction: "none",
//                 random: false,
//                 straight: false,
//                 out_mode: "out",
//                 bounce: false,
//                 attract: {
//                     enable: false,
//                     rotateX: 600,
//                     rotateY: 1200,
//                 },
//             },
//         },
//         interactivity: {
//             detect_on: "canvas",
//             events: {
//                 onhover: {
//                     enable: true,
//                     mode: "repulse",
//                 },
//                 onclick: {
//                     enable: true,
//                     mode: "push",
//                 },
//                 resize: true,
//             },
//             modes: {
//                 grab: {
//                     distance: 400,
//                     line_linked: {
//                         opacity: 1,
//                     },
//                 },
//                 bubble: {
//                     distance: 400,
//                     size: 40,
//                     duration: 2,
//                     opacity: 8,
//                     speed: 3,
//                 },
//                 repulse: {
//                     distance: 160,
//                     duration: 0.4,
//                 },
//                 push: {
//                     particles_nb: 4,
//                 },
//                 remove: {
//                     particles_nb: 2,
//                 },
//             },
//         },
//         retina_detect: true,
//     }
// );
