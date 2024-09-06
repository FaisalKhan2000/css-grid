// Create a timeline for the loader animation
let tl = gsap.timeline({
  delay: 0.3,
  repeat: -1, // Infinite repeats
  repeatDelay: 0.3, // Delay between repeats
  yoyo: true,
  defaults: {
    duration: 0.5, // Duration of each animation
    ease: "power1.inOut", // Animation easing
  },
  smoothChildTiming: true,
});

// Select all the boxes
const boxes = document.querySelectorAll(".box");

// Animate each box individually
boxes.forEach((box, index) => {
  tl.to(box, {
    y: -25, // Move the box up by 20 pixels
    backgroundColor: "#ffa31a", // Change color to yellow during the bounce
    duration: 0.15, // Shorter duration for bounce effect
    ease: "power1.inOut", // Smooth easing
  })
    .to(box, {
      y: 25, // Return the box to its original position
      backgroundColor: "#555", // Change color back to original
      duration: 0.15, // Duration for return
      ease: "power1.inOut", // Smooth easing
    })
    .to(
      box,
      {
        y: 0, // Return the box to its original position
        backgroundColor: "#555", // Change color back to original
        duration: 0.15, // Duration for return
        ease: "power1.inOut", // Smooth easing
      }
      // "+=0.1"
    ); // Small delay before starting the next animation
});
