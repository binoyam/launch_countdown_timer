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
        const block = document.createElement("div");
        block.classList.add(element.className);
        block.innerHTML = `
        <div class="flip-card">
          <div class="top">00</div>
          <div class="bottom">00</div>
        </div>
        <p class="title">${element.label}</p>
      `;

        countdownContainer.append(block);
    });
}
showTimer()

setInterval(() => {
    const currentDate = new Date();
    const timeBetweenDates = Math.floor((countToDate - currentDate) / 1000);
    if (timeBetweenDates !== previous) {
        flipAllCards(timeBetweenDates);
    }
    previous = timeBetweenDates;
}, 250);