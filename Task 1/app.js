// weather api
const weatherApi = {
  key: "aeb34c86dcc7189ee864dd464352287f",
  baseUrl: "https://api.openweathermap.org/data/2.5/onecall/timemachine",
};

// input controls
const latitudeInput = document.getElementById("latitude");
const logitudeInput = document.getElementById("longitude");

// generate time stamp
const toTimestamp = (today) => {
  const dt = Date.parse(today);
  return dt / 1000;
};

// today date
let today = new Date();
today.setDate(today.getDate());
let todaySubDate =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
let todayTime = 4 + ":" + 00 + ":" + 00;
let todayDateTime = todaySubDate + " " + todayTime;
let todayFullDate = toTimestamp(todayDateTime);

// day before date
let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
let yesterdaySubDate =
  yesterday.getFullYear() +
  "-" +
  (yesterday.getMonth() + 1) +
  "-" +
  yesterday.getDate();
let yesterdayTime = 4 + ":" + 00 + ":" + 00;
let yesterdayDateTime = yesterdaySubDate + " " + yesterdayTime;
let yesterdayFullDate = toTimestamp(yesterdayDateTime);

// day before  yesterday
let overmorrow = new Date();
overmorrow.setDate(overmorrow.getDate() - 2);
let overmorrowSubDate =
  overmorrow.getFullYear() +
  "-" +
  (overmorrow.getMonth() + 1) +
  "-" +
  overmorrow.getDate();
let overmorrowTime = 4 + ":" + 00 + ":" + 00;
let overmorrowDateTime = overmorrowSubDate + " " + overmorrowTime;
let overmorrowFullDate = toTimestamp(overmorrowDateTime);

// get weather details on submit
const getWeather = () => {
  if (latitudeInput.value && logitudeInput.value) {
    document.querySelector(".weather-body").style.display = "block";
    getTodayWeatherReportPressure(
      latitudeInput.value,
      logitudeInput.value,
      todayFullDate
    );
    getYesterDayWeatherReportPressure(
      latitudeInput.value,
      logitudeInput.value,
      yesterdayFullDate
    );
    getOvermorrowWeatherReportPressure(
      latitudeInput.value,
      logitudeInput.value,
      overmorrowFullDate
    );
  }
};

const getTodayWeatherReportPressure = async (latitude, logitude, date) => {
  const response = await fetch(
    `${weatherApi.baseUrl}?lat=${latitude}&lon=${logitude}&dt=${date}&appid=${weatherApi.key}`
  );
  const data = await response.json();

  showTodayWeatherReportPressure(data);
};
const getYesterDayWeatherReportPressure = async (latitude, logitude, date) => {
  const response = await fetch(
    `${weatherApi.baseUrl}?lat=${latitude}&lon=${logitude}&dt=${date}&appid=${weatherApi.key}`
  );
  const data = await response.json();

  showYesterDayWeatherReportPressure(data);
};
const getOvermorrowWeatherReportPressure = async (latitude, logitude, date) => {
  const response = await fetch(
    `${weatherApi.baseUrl}?lat=${latitude}&lon=${logitude}&dt=${date}&appid=${weatherApi.key}`
  );
  const data = await response.json();
  showOvermorrowWeatherReportPressure(data);
};

// show weather report pressure
const showTodayWeatherReportPressure = (weather) => {
  const uiDate_1 = document.getElementById("date1");
  uiDate_1.innerText = `${todaySubDate}`;
  const pressure_1 = document.getElementById("pressure1");
  pressure_1.innerText = `${weather.hourly[4].pressure}`;
};
const showYesterDayWeatherReportPressure = (weather) => {
  const uiDate_2 = document.getElementById("date2");
  uiDate_2.innerText = `${yesterdaySubDate}`;

  const pressure_2 = document.getElementById("pressure2");
  pressure_2.innerText = `${weather.hourly[4].pressure}`;
};
const showOvermorrowWeatherReportPressure = (weather) => {
  const uiDate_3 = document.getElementById("date3");
  uiDate_3.innerText = `${overmorrowSubDate}`;

  const pressure_3 = document.getElementById("pressure3");
  pressure_3.innerText = `${weather.hourly[4].pressure}`;
};
