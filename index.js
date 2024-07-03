function updateTime(){
  const now = new Date();
  const utcTime = now.toUTCString();
  document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
}
function updateDay() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const now = new Date();
  const day = days[now.getUTCDay()];
  document.querySelector('[data-testid="currentDay"]').textContent = day;
}
updateTime();
updateDay();
setInterval(updateTime, 1000);