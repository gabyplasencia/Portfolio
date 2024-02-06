gsap.registerPlugin(ScrollTrigger);

const tlMoon = gsap.timeline({
    scrollTrigger: {
        trigger: "#project",
        start: "top 65%",
        end: "75% 75%",
        pin: "#moon2",
        // markers: {
        //     startColor: "white",
        //     endColor: "yellow",
        // },
        scrub: 2,
    }
});

tlMoon.to("#moon2", {
    scale: 2.7,
    x: "-25vw",
}) 
    .to("#moon2" , {
    scale: 2.5,
    })

mm.add("(max-width: 800px)", () => {
    gsap.to("#stars2-bg", {
        scale: 2,
        opacity: 1,
        rotation: -5,
        y: "130vh",
        scrollTrigger: {
            trigger: "#project",
            start: "top 70%",
            end: "80% center",
            // markers: { 
            //     startColor: "white",
            //     endColor: "yellow",
            // },
            scrub: 3,
        }
    });
});
mm.add("(min-width: 801px)", () => {
    gsap.to("#stars2-bg", {
        scale: 1.5,
        opacity: 1,
        rotation: -8,
        y: "130vh",
        scrollTrigger: {
            trigger: "#project",
            start: "top 95%",
            end: "80% 30%",
            // markers: {
            //     startColor: "white",
            //     endColor: "yellow",
            // },
            scrub: 3,
        }
    });
});


