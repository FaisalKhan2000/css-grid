// from: in from method you don't have to specify the initial state (it will figure out itself)

// gsap.from(".box1", {
//   y: -200,
//   duration: 3,
//   ease: "liner",
//   repeat: -1,
//   yoyo: true,
// });

// fromTo. in fromTo method you have to specify the default value, and also the new animation state

gsap.fromTo(
  ".box2",
  { y: 50 },
  {
    opacity: 1,
    y: -50,
    duration: 1,
    ease: "liner",
    repeat: -1,
    yoyo: true,
  }
);
