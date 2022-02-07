if (!!window.IntersectionObserver) {
  let video = document.querySelector("video");
  let isPaused = false; /* flag for auto-pausing of the video */
  let observer = new IntersectionObserver(
    (entries, observer) => {
      console.log(entries, observer);
      entries.forEach((entry) => {
        if (entry.intersectionRatio != 1 && !video.paused) {
          video.pause();
          isPaused = true;
        } else if (isPaused) {
          video.play();
          isPaused = false;
        }
      });
    },
    { threshold: 1 },
  );
  console.log("observer", observer);
  observer.observe(video);
} else document.querySelector("#warning").style.display = "block";
