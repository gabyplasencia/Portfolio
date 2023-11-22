gsap.registerPlugin(ScrollTrigger);

gsap.to("#top-stars", {
    opacity: 1.5,
    y: "10vh",
    scrollTrigger: {
        trigger: "#top-stars",
        start: "0% 70%",
        end: "bottom 40%",
        // markers: {
        //     startColor: "white",
        //     endColor: "yellow",
        // },
        scrub: 2,
    }
});

gsap.to("#day-big-mountain", {
    x: "20%",
    scrollTrigger: {
        trigger: "#day-big-mountain",
        start: "0% 70%",
        end: "bottom 70%",
        // markers: {
        //     startColor: "white",
        //     endColor: "yellow",
        // },
        scrub: 2,
    }
});

gsap.to("#day-small-mountain", {
    x: "30vw",
    scrollTrigger: {
        trigger: "#day-small-mountain",
        start: "0% 70%",
        end: "bottom 70%",
        // markers: {
        //     startColor: "white",
        //     endColor: "yellow",
        // },
        scrub: 3,
    }
});

gsap.to("#day-lake", {
    opacity: 1,
    scrollTrigger: {
        trigger: "#day-lake",
        start: "0% bottom",
        end: "10% bottom",
        // markers: {
        //     startColor: "white",
        //     endColor: "yellow",
        // },
        scrub: 0,
    }
});

gsap.to("#day-sakura-island", {
    scale: 1,
    x: "-15vw",
    scrollTrigger: {
        trigger: "#day-sakura-island",
        start: "0% bottom",
        end: "85% center",
        // markers: {
        //     startColor: "white",
        //     endColor: "yellow",
        // },
        scrub: 3,
    }
});

gsap.to("#sun", {
    scale: 1.2,
    y: "-20vh",
    scrollTrigger: {
        trigger: "#sun",
        start: "0% 75%",
        end: "center 75%",
        // markers: {
        //     startColor: "white",
        //     endColor: "yellow",
        // },
        scrub: 2,
    }
});
