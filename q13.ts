enum Weekday {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
  }
  function isWeekend(day: Weekday): boolean {
    return day === Weekday.Saturday || day === Weekday.Sunday;
  }
  console.log(isWeekend(Weekday.Saturday)); // Output: true
console.log(isWeekend(Weekday.Tuesday));  // Output: false