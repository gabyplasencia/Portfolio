gsap.registerPlugin(ScrollTrigger);

const projects = gsap.utils.toArray('.project');
projects.forEach(project => {

    const tlScene2 = gsap.timeline({
        scrollTrigger: {
        trigger: project,
        start: "top 60%",
        end: "center 60%",
        markers: {
            startColor: "white",
            endColor: "yellow",
        },
        scrub: 1,
    }
    });

    let index = projects.indexOf(project);

    if(index % 2 == 0){
        tlScene2.from(project, { 
            x: "-100vw",
        });
      }else{
        tlScene2.from(project, { 
            x: "100vw",
        });
      }
});
