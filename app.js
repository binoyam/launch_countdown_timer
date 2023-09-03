const timer = [
    {
        className: "days",
        label: "Days",
    },
    {
        className: "hours",
        label: "Hours",
    },
    {
        className: "minutes",
        label: "Minutes",
    },
    {
        className: "seconds",
        label: "Seconds",
    },
];

const countdownContainer = document.querySelector(".countdown");
const countToDate = new Date().setHours(new Date().getHours() + 240);
let previous;

function showTimer() {
    timer.forEach((element) => {
      const div = document.createElement("div");
      div.classList.add(element.className);
      div.innerHTML = `
        <div class="flip-card">
          <div class="top">00</div>
          <div class="bottom">00</div>
        </div>
        <p class="title">${element.label}</p>
      `;
  
      countdownContainer.append(div);
    });
  }