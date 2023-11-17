gsap.registerPlugin(ScrollTrigger);

const tlBgScene3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
        start: "0% bottom",
        end: "50% center",
        // markers: {
        //     startColor: "white",
        //     endColor: "yellow",
        // },
        scrub: 1,
    }
});

