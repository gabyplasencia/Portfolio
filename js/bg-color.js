gsap.registerPlugin(ScrollTrigger);

gsap.to(".bg-color", {
    "--dark-blue": "#00000E",
    "--deep-blue": "#0E0C45",
    scrollTrigger: {
        trigger: "#project",
        start: "top bottom",
        end: "50% center",
        // markers: {
        //     startColor: "white",
        //     endColor: "yellow",
        // },
        scrub: 1,
    }
});

gsap.to(".bg-color", {
    "--dark-blue": "blue",
    "--deep-blue": "orange",
    scrollTrigger: {
        trigger: "#contact",
        start: "top bottom",
        end: "50% center",
        markers: {
            startColor: "white",
            endColor: "yellow",
        },
        scrub: 1,
    }
});