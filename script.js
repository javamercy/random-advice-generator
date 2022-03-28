const icon_el = document.getElementById("icon");
const adviceContent_el = document.getElementById("advice-content");
const adviceId_el = document.getElementById("advice-id");

getAdviceFromAPI().then((data) => updateUI(data.slip));

async function getAdviceFromAPI() {
  const response = await fetch("https://api.adviceslip.com/advice");

  const responseData = await response.json();

  return responseData;
}



icon_el.addEventListener("click", () => {
  getAdviceFromAPI().then((data) => updateUI(data.slip));
});

function updateUI(data) {
  adviceContent_el.textContent = data.advice;
  adviceId_el.textContent = "#" + data.id;
}
