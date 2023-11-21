const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

const tl = gsap.timeline({
    scrollTrigger: {
    trigger: "#night-big-mountain",
    start: "40% 40%",
    end: "80% 35%",
   /* markers: {
        startColor: "white",
        endColor: "purple",
    },*/
    scrub: 3,
}
});

const tl2 = gsap.timeline({
    scrollTrigger: {
    trigger: "#night-small-mountain",
    start: "top 45%",
    end: "75% 40%",
   /* markers: {
        startColor: "pink",
        endColor: "blue",
    },*/
    scrub: 2,
}
});

const tl3 = gsap.timeline({
    scrollTrigger: {
    trigger: "#night-lake",
    start: "20% 80%",
    end: "55% 70%",
    /*markers: {
        startColor: "black",
        endColor: "black",
    },*/
    scrub: 2,
}
});

tl.to("#night-big-mountain", {
    scale: 3,
    x: 500,
    y: "45vh",
});
tl.to("#night-big-mountain", {
    scale: 3.7,
    x: 1500,
    y: "90vh",
    opacity: 0,
});

tl2.to("#night-small-mountain", {
scale: 2.5,
y: "45vh",
x: -400,
})
    .to("#night-small-mountain", {
        y: 1500,
        x: -1000,
        opacity: 0,
    });

tl3.to("#night-lake", {
    scale: 2.5,
    y: "68vh",
})
    .to("#night-lake", {
        scale: 0.1,
        opacity: 0,
    });

mm.add("(max-width: 800px)", () => {
    gsap.to("#moon", {
        scale: 2.5,
        y: "-70vh",
        x: 1200,
        scrollTrigger: {
            trigger: "#moon",
            start: "top 30%",
            end: "bottom 10%",
            // markers: {
            //     startColor: "white",
            //     endColor: "yellow",
            // },
            scrub: 3,
        }
    });
});
mm.add("(min-width: 801px)", () => {
    gsap.to("#moon", {
        scale: 2.5,
        y: "-70vh",
        x: 1200,
        scrollTrigger: {
            trigger: "#moon",
            start: "top 10%",
            end: "bottom 10%",
           /* markers: {
                startColor: "white",
                endColor: "yellow",
            },*/
            scrub: 3,
        }
    });
});

gsap.to("#night-sakura", {
    scale: 2,
    y: 800,
    x: 900,
    scrollTrigger: {
        trigger: "#night-sakura",
        start: "top 70%",
        end: "center 70%",
        /*markers: {
            startColor: "white",
            endColor: "yellow",
        },*/
        scrub: 1,
    }
});


mm.add("(max-width: 800px)", () => {
    gsap.to(".introduction", {
    x: -900,
    opacity: 0,
    scrollTrigger: {
        trigger: ".introduction",
        start: "45% 10%",
        end: "bottom 10%",
        // markers: {
        //     startColor: "white",
        //     endColor: "yellow",
        // },
        scrub: 2,
    }
    });
});
mm.add("(min-width: 801px)", () => {
    gsap.to(".introduction", {
        x: -900,
        opacity: 0,
        scrollTrigger: {
            trigger: ".introduction",
            start: "top 10%",
            end: "center 10%",
            // markers: {
            //     startColor: "green",
            //     endColor: "yellow",
            // },
            scrub: 2,
        }
    });
});


mm.add("(max-width: 800px)", () => {
    gsap.to("#stars-bg", {
        scale: 2,
        rotate: -20,
        opacity: 0,
        scrollTrigger: {
            trigger: "#stars-bg",
            start: "center 40%",
            end: "center top",
            // markers: {
            //     startColor: "white",
            //     endColor: "yellow",
            // },
            scrub: 3,
        }
    });
});
mm.add("(min-width: 801px)", () => {
    gsap.to("#stars-bg", {
        scale: 2,
        rotate: 30,
        opacity: 0,
        scrollTrigger: {
            trigger: "#stars-bg",
            start: "30% 20%",
            end: "center 20%",
            /*markers: {
                startColor: "white",
                endColor: "yellow",
            },*/
            scrub: 3,
        }
    });
});


mm.add("(max-width: 800px)", () => {
    gsap.to(".scroll", {
        opacity: 0,
        scrollTrigger: {
            trigger: ".scroll",
            start: "top 75%",
            end: "15% 75%",
            // markers: {
            //     startColor: "white",
            //     endColor: "yellow",
            // },
            scrub: 1,
        }
    });
});
mm.add("(min-width: 801px)", () => {
    gsap.to(".scroll", {
        opacity: 0,
        scrollTrigger: {
            trigger: ".scroll",
            start: "center 80%",
            end: "center 80%",
            // markers: {
            //     startColor: "white",
            //     endColor: "yellow",
            // },
            scrub: 1,
        }
    });
});


