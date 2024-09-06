gsap.registerPlugin(ScrollTrigger);

// start and end

// gsap.to(".square", {
//   // x: 700,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".square",
//     start: "top 30%",
//     // end: "center 20%",
//     end: () => `+=${document.querySelector(".square").offsetHeight}`,
//     markers: true,
//     toggleClass: "red",
//     // markers: {
//     //   startColor: "purple",
//     //   endColor: "fuchsia",
//     //   fontSize: "4rem",
//     //   indent: 200,
//     // },
//   },
// });

// toggleActions

// gsap.to(".square", {
//   x: 1000,
//   duration: 8,
//   scrollTrigger: {
//     trigger: ".square",
//     start: "top 60%",
//     end: "top 40%",
//     toggleActions: "restart pause resume complete",
//     //              onEnter onLeave onEnterBack onLeaveBack
//     markers: {
//       startColor: "purple",
//       endColor: "fuchsia",
//       fontSize: "3rem",
//     },
//   },
// });

// scrub

// gsap.to(".square", {
//   x: 1000,
//   duration: 8,
//   scrollTrigger: {
//     trigger: ".square",
//     start: "top 80%",
//     end: "top 30%",
//     scrub: 4,
//     toggleActions: "restart none none none",
//     pin: true,
//     markers: {
//       startColor: "purple",
//       endColor: "fuchsia",
//       fontSize: "3rem",
//     },
//   },
// });

// pinning #1
// gsap.to(".square", {
//   x: 1000,
//   duration: 8,
//   scrollTrigger: {
//     trigger: ".square",
//     start: "top 80%",
//     end: "top 30%",
//     scrub: 4,
//     toggleActions: "restart none none none",
//     pin: true,
//     markers: {
//       startColor: "purple",
//       endColor: "fuchsia",
//       fontSize: "3rem",
//     },
//   },
// });

// pinning #2
gsap.to(".square", {
  // x: 1000,
  duration: 8,
  scrollTrigger: {
    trigger: ".square2",
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
    toggleActions: "restart none none none",
    pin: ".square",
    pinSpacing: true, // adds padding at the bottom of the element that we want to be pinned
    markers: {
      startColor: "purple",
      endColor: "fuchsia",
      fontSize: "3rem",
    },
  },
});
