/* requestAnimationFrame() */

// previously: setInterval() and Element.animate()

// Benefits of reqestAnimationFrame:
// * The browser can optimize it, so animations will be smoother
// * Animations in inactive tabs will stop, allowing the CPU to chill
// * More battery-friendly

let start;
let stopId;
let progress;
let toggle = false;

let element = document.getElementById("element");
element.setAttribute(
  "style",
  "background: blue; position: absolute; width: 50px; height: 50px; top: 50px;",
);

function step(timestamp) {
  if (!start || progress > 400) start = timestamp;
  progress = (timestamp - start) / 10 + 50;
  element.style.top = progress + "px";
  stopId = window.requestAnimationFrame(step);
}

function toggleAnimation() {
  if (!toggle) {
    toggle = true;
    window.requestAnimationFrame(step);
  } else {
    toggle = false;
    cancelAnimationFrame(stopId);
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

var value = 0;
var iterationCount = 100000000;
var req = window.requestIdleCallback;

var workBtn = document.getElementById("work");
var interactionBtn = document.getElementById("interaction");
var playground = document.getElementById("play");

var expensiveCalculation = function () {
  console.log(iterationCount);
  while (iterationCount > 0) {
    value = Math.random() < 0.5 ? value + Math.random() : value + Math.random();

    iterationCount = iterationCount - 1;
  }
};

workBtn.addEventListener("click", expensiveCalculation);

interactionBtn.addEventListener("click", function (event) {
  if (playground.style.backgroundColor === "green") {
    playground.style.backgroundColor = "red";
  } else {
    playground.style.backgroundColor = "green";
  }
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

var value1 = 0;
var iterationCount1 = 10000000;
var req = window.requestIdleCallback;

var workBtn1 = document.getElementById("work");
var interactionBtn1 = document.getElementById("interaction");
var playground1 = document.getElementById("play");

var expensiveCalculation1 = function (deadline) {
  console.log(deadline, deadline.timeRemaining(), iterationCount1);
  while (iterationCount1 > 0 && deadline.timeRemaining() > 1) {
    value1 =
      Math.random() < 0.5 ? value1 + Math.random() : value1 + Math.random();

    iterationCount1 = iterationCount1 - 1;
  }

  req(expensiveCalculation1);
};

workBtn1.addEventListener("click", function (event) {
  req(expensiveCalculation1);
});

interactionBtn1.addEventListener("click", function (event) {
  if (playground1.style.backgroundColor === "green") {
    playground1.style.backgroundColor = "red";
  } else {
    playground1.style.backgroundColor = "green";
  }
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
