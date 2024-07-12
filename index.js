function runTime() {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  hr.textContent = hour > 12 ? (hour = `0${hour - 12}`) : hour;
  min.textContent = minutes < 10 ? (minutes = `0${minutes}`) : minutes;
  sec.textContent = seconds < 10 ? (seconds = `0${seconds}`) : seconds;
  if (seconds == 0) {
    gsap.from("#min", {
      y: 52,
      opacity: 0,
      scale: 0.6,
      duration: 0.3,
    });
  }
  if (minutes == 0 && seconds == 0) {
    gsap.from("#hr", {
      y: 52,
      opacity: 0,
      duration: 0.3,
      scale: 0.6,
    });
  }
}
runTime();

gsap.from(".load", {
  y: 52,
  opacity: 0,
  scale: 0.6,
  duration: 0.3,
  stagger: 0.2,
});

gsap.from(".clock-body", {
  scale: 0.5,
  opacity: 0,
});

setInterval(() => {
  runTime();
  gsap.from("#sec", {
    y: 52,
    scale: 0.5,
    duration: 0.3,
    opacity: 0,
    color: "white",
  });
}, 1000);
