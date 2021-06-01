let getDayOfWeek = (dateStr) => {
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = new Date(dateStr);
  return dayNames[date.getDay()];
};

console.log(getDayOfWeek("05/27/2021")); //mm/dd/yyyy
