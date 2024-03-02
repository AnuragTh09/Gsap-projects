// GSAP animation for #page1 #circle
gsap.from("#page1 #circle", {
    scale: 0,
    delay: 1,
    duration: 1,
    rotate: 720,
});

// GSAP animation for #page3 #circle
gsap.from("#page3 #circle", {
    scale: 0,
    delay: 1,
    duration: 1,
    rotate: 720,
});

// ScrollTrigger for #page2 #circle animation
ScrollTrigger.create({
    trigger: "#page2 #circle",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 30%",
    scrub: true,
    onEnter: () => {
        gsap.from("#page2 #circle", {
            scale: 0,
            duration: 1,
            rotate: 720,
        });
    }
});
