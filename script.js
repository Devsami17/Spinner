const spinnerItems = document.querySelectorAll(".spinner-item");
const emailSubject = document.querySelector(".subject");
const emailBody = document.querySelector("textarea");

spinnerItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("spin-button")) {
      emailSubject.value = "Lunch meeting";
      emailBody.value = `Hey Mark,\nWhen are you available for a call?\nI am in the office until 5:00.\n\nThanks,\nBrian`;
    } else {
      alert(`Clicked: ${item.textContent}`);
    }
  });
});

document.getElementById('togglebar').addEventListener('click',function(){
  document.querySelector('.respo-spinner').classList.toggle('active');
})