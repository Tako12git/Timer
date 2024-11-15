let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval); // Останавливаем предыдущий таймер

  const inputDate = document.getElementById("target-date").value;
  const targetDate = new Date(inputDate).getTime();

  // Проверка на корректность даты
  if (isNaN(targetDate)) {
    alert("Пожалуйста, выберите корректную дату.");
    return;
  }

  countdownInterval = setInterval(() => updateCountdown(targetDate), 1000);
}

function updateCountdown(targetDate) {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "<div>Время вышло!</div>";
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  animateCountdown();
}
function animateCountdown() {
  const countdownElements = document.querySelectorAll("#countdown div");
  countdownElements.forEach(element => {
    element.classList.add("animate");
    setTimeout(() => element.classList.remove("animate"), 500);
  });
}
