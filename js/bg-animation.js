gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
    trigger: "#night-big-mountain",
    start: "35% 45%",
    end: "bottom top",
    markers: true,
    scrub: 2,
}
})

tl.to("#night-big-mountain", {
    scale: 4,
    y: "150vh",
});


/*tl.to("#night-small-mountain", {
    ScrollTrigger: {
    trigger: "#night-small-mountain",
    start: "center top",
    end: "bottom bottom",
    markers: true,
},
scale: 2,
y: "20vh",
x: "-70vw",
duration: 5,
scrub: 1,

});*/