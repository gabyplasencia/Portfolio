gsap.registerPlugin(ScrollTrigger);

const tlBgColor = gsap.timeline({
    scrollTrigger: {
        trigger: "#project",
        start: "0% bottom",
        end: "bottom center",
        // markers: {
        //     startColor: "white",
        //     endColor: "yellow",
        // },
        scrub: 1,
    }
});

const tlBgColor2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
        start: "top bottom",
        end: "50% 85%",
        // markers: {
        //     startColor: "white",
        //     endColor: "black",
        // },
        scrub: 1,
    }
});

tlBgColor.to(".bg-color", {
    "--_color-top": "#00000E",
    "--_color-medium": "#0E0C45",
    "--_color-bottom": "#0E0C45",
})
    .to(".bg-color", {
        "--_color-top": "#0E0C45",
        "--_color-medium": "#0E0C45",
        "--_color-bottom": "#323097",
    })
    .to(".bg-color", {
        "--_color-top": "#0E0C45",
        "--_color-medium": "#3632EC",
        "--_color-bottom": "#8886F5",
    })

tlBgColor2.to(".bg-color", {
    "--_color-top": "#3632EC",
    "--_color-medium": "#8886F5",
    "--_color-bottom": "#8886F5",
})    
    .to(".bg-color", {
    "--_color-top": "#8886F5",
    "--_color-medium": "#E66239",
    "--_color-bottom": "#FCFF61",
    })