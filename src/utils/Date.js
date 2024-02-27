export const getDay = (dateStr) => {
  const date = new Date(dateStr).getDay();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  return days[date];
};

export const formateDate = (dateStr) => {
  const date = new Date(dateStr);
  console.log(date);

  return `${date.getDay()}/ ${date.getMonth()}/${date.getFullYear()}`;
};
