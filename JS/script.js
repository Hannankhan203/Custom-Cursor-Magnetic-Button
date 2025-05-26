const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");
let mouseX = 0,
  mouseY = 0;
let posX = 0,
  posY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  gsap.to(cursor, {
    x: mouseX,
    y: mouseY,
    duration: 0.2,
    ease: "power2.out",
  });
});

gsap.ticker.add(() => {
  posX += (mouseX - posX) * 0.1;
  posY += (mouseY - posY) * 0.1;

  gsap.set(follower, {
    x: posX,
    y: posY,
  });
});

const magneticBtn = document.querySelector(".magnetic-btn");
const strength = 100;

magneticBtn.addEventListener("mousemove", (e) => {
  const btnReact = magneticBtn.getBoundingClientRect();
  const relX = e.clientX - btnReact.left - btnReact.width;
  const relY = e.clientY - btnReact.top - btnReact.height;

  gsap.to(magneticBtn, {
    x: relX,
    y: relY,
    duration: 0.3,
    ease: "power2.out",
  });
});

magneticBtn.addEventListener("mouseleave", () => {
  gsap.to(magneticBtn, {
    x: 0,
    y: 0,
    duration: 0.3,
    ease: "power2.out",
  });
});
