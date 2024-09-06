// Create a repeating timeline with GSAP
var tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

// Add jitter effect at the beginning
tl.to(".box", {
  x: "+=5",
  y: "+=2",
  rotation: 2,
  duration: 0.1,
})
  .to(".box", {
    x: "-=5",
    y: "-=2",
    rotation: -2,
    duration: 0.1,
  })
  .to(".box", {
    x: "+=3",
    y: "+=1",
    rotation: 1,
    duration: 0.1,
  })
  .to(".box", {
    x: "-=3",
    y: "-=1",
    rotation: -1,
    duration: 0.1,
  })
  .to(".box", {
    x: 0,
    y: 0,
    rotation: 0,
    duration: 0.1,
  });

// Add circular turn before take-off
tl.to(".box", {
  motionPath: {
    path: [
      { x: 0, y: 0 },
      { x: 200, y: -100 },
      { x: 150, y: -300 },
      { x: 0, y: -400 },
    ], // Define the curve
    curviness: 1.5, // Smoothness of the curve
    autoRotate: true, // Makes the rocket rotate along the path
  },
  duration: 2, // Duration of the circular turn
  ease: "power1.inOut", // Easing effect for the turn
});

// Add rocket take-off animation
tl.to(".box", {
  x: 0,
  y: -1000,
  duration: 2,
  ease: "power2.in",
});
