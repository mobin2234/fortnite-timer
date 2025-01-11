// تاریخ پایان سیزن فورتنایت: 21 فوریه 2025
const endDate = new Date('2025-02-21T00:00:00');

// انتخاب بخش‌های تایمر
const monthsElement = document.getElementById('months');
const weeksElement = document.getElementById('weeks');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// تابع به‌روزرسانی تایمر
function updateTimer() {
  const now = new Date();
  const remainingTime = endDate - now;

  if (remainingTime <= 0) {
    document.querySelector('.timer').innerHTML = '<h2>Season Ended!</h2>';
    clearInterval(timerInterval);
    return;
  }

  const totalDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const months = Math.floor(totalDays / 30);
  const weeks = Math.floor((totalDays % 30) / 7);
  const days = totalDays % 7;
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  const seconds = Math.floor((remainingTime / 1000) % 60);

  monthsElement.textContent = months;
  weeksElement.textContent = weeks;
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

// به‌روزرسانی تایمر هر ثانیه
const timerInterval = setInterval(updateTimer, 1000);

// اجرای اولیه تایمر
updateTimer();
