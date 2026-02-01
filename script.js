// Get the form from the HTML
const form = document.getElementById("akanForm");

// When the user submits the form it won't refresh
form.addEventListener("submit", function (event) {
  e.preventDefault();

  // Acquire values from user inputs
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.getElementById("gender").value;

  // Simple validation
  
  if (day < 1 || day > 31 || month < 1 || month > 12 || gender === "") {
    alert("Please enter a valid date and select a specific gender")
    return ;
}

  // Split the year into century and last two digits
  const CC = Math.floor(year / 100);
  const YY = year % 100;

  // Calculate the day of the week
  let dayOfWeek =
    (CC - 2 * CC - 1) +
    Math.floor((5 * YY) / 4) +
    Math.floor((26 * (month + 1)) / 10) +
    day;

  dayOfWeek = ((dayOfWeek % 7) + 7) % 7; // make sure it’s not negative

  // Akan names
  const maleNames = [
    "Kwasi", "Kwadwo", "Kwabena",
    "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

  const femaleNames = [
    "Akosua", "Adwoa", "Abenaa",
    "Akua", "Yaa", "Afua", "Ama"
  ];

  const days = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  // Pick the correct Akan name
  let akanName;
  if (gender === "male") {
    akanName = maleNames[dayOfWeek];
  } else {
    akanName = femaleNames[dayOfWeek];
  }

  // Show result on the page
  document.getElementById("result").textContent =
    "You were born on a " + days[dayOfWeek] +
    ". Your Akan name is " + akanName + ".";

  // Clear the form
  form.reset();
});

