const timer = (deadline) => {
  document.querySelectorAll(".count_1>span").forEach((item) => {
    item.id = "timer-days";
  });
  document.querySelectorAll(".count_2>span").forEach((item) => {
    item.id = "timer-hours";
  });
  document.querySelectorAll(".count_3>span").forEach((item) => {
    item.id = "timer-minutes";
  });
  document.querySelectorAll(".count_4>span").forEach((item) => {
    item.id = "timer-seconds";
  });

  const timerDays = document.querySelectorAll("#timer-days");
  const timerHours = document.querySelectorAll("#timer-hours");
  const timerMinutes = document.querySelectorAll("#timer-minutes");
  const timerSeconds = document.querySelectorAll("#timer-seconds");

  timerDays.forEach((days) => {
    days.textContent = "00";
  });
  timerHours.forEach((hours) => {
    hours.textContent = "00";
  });
  timerMinutes.forEach((minutes) => {
    minutes.textContent = "00";
  });
  timerSeconds.forEach((seconds) => {
    seconds.textContent = "00";
  });

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, days, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();
    timerDays.forEach((days) => {
      days.textContent = ("0" + getTime.days).slice(-2);
    });
    timerHours.forEach((hours) => {
      hours.textContent = ("0" + getTime.hours).slice(-2);
    });
    timerMinutes.forEach((minutes) => {
      minutes.textContent = ("0" + getTime.minutes).slice(-2);
    });
    timerSeconds.forEach((seconds) => {
      seconds.textContent = ("0" + getTime.seconds).slice(-2);
    });
  };

  setTimeout(() => {
    let getTime = getTimeRemaining();
    if (getTime.timeRemaining > 0) {
      updateClock();
    } else if (getTime.timeRemaining === 0) {
      clearTimeout(updateClock);
    }
  });

  setInterval(() => {
    let getTime = getTimeRemaining();
    if (getTime.timeRemaining > 0) {
      updateClock();
    } else if (getTime.timeRemaining === 0) {
      clearInterval(updateClock);
    }
  }, 1000);
};

export default timer;
