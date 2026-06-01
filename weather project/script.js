// http://api.weatherapi.com/v1/current.json?key= 0b893061e5244334995123929263105&q=peshawar&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandTimeField = document.querySelector(
  ".time_location p:nth-child(2)",
);
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");

form.addEventListener("submit", searchForLocation);

const fetchResults = async (targetloction) => {
  let url = `http://api.weatherapi.com/v1/current.json?key= 0b893061e5244334995123929263105&q=${targetloction}&aqi=no`;

  const res = await fetch(url);

  const data = await res.json();

  console.log(data);

  let locationName = data.location.name;
  let time = data.location.localtime;

  let temp = data.current.temp_c;

  let condition = data.current.condition.text;

  updateDetails(temp, locationName, time, condition);
};

function updateDetails(temp, locationName, time, condition) {
  temperatureField.innerText = temp;
  locationField.innerText = locationName;
  dateandTimeField.innerText = time;
  conditionField.innerText = condition;
}

function searchForLocation(e) {
  e.preventDefault();

  target = searchField.value;
  fetchResults(target);
}

fetchResults(target);
