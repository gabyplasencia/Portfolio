const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger);

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

const tl4 = gsap.timeline({
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

const tl5 = gsap.timeline({
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

const tl6 = gsap.timeline({
    scrollTrigger: {
    trigger: ".introduction",
    start: "top 10%",
    end: "center 10%",
    /*markers: {
        startColor: "white",
        endColor: "yellow",
    },*/
    scrub: 2,
}
});

const tl7 = gsap.timeline({
    scrollTrigger: {
    trigger: ".scroll",
    start: "center 80%",
    end: "center 80%",
   /* markers: {
        startColor: "white",
        endColor: "yellow",
    },*/
    scrub: 1,
}
});

const tl8 = gsap.timeline({
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

const tl9 = gsap.timeline({
    scrollTrigger: {
    trigger: "#stars2-bg",
    start: "top 25%",
    end: "center 25%",
    /*markers: {
        startColor: "white",
        endColor: "yellow",
    },*/
    scrub: 3,
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
    y: "70vh",
})
    .to("#night-lake", {
        opacity: 0,
    });

tl4.to("#moon", {
    scale: 3,
    y: "-20vh",
    x: 700,
});

tl5.to("#night-sakura", {
    scale: 2,
    y: 800,
    x: 900,
});

tl6.to(".introduction", {
    x: -900,
    opacity: 0,
});

tl7.to(".scroll", {
    opacity: 0,
});

tl8.to("#stars-bg", {
    scale: 2,
    rotate: 30,
    opacity: 0,
});

tl9.to("#stars2-bg", {
    scale: 2,
    x: 300,
    opacity: 1,
});