const form = document.getElementById("akanForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function(e) {
  event.preventDefault();

  // Get user input
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.getElementById("gender").value;

  // Check for invalid input
  if (!day || !month || !year || !gender || day < 1 || day > 31 || month < 1 || month > 12) {
    alert = "Please enter a valid date and select your gender.";
    return;
  }
    // Calculate day of the week using the given formula
   const CC = Math.floor(year / 100);
  const YY = year % 100;

  let dayOfWeek =
    ( (4 * CC - 2 * CC - 1) +
      Math.floor((5 * YY) / 4) +
      Math.floor((26 * (month + 1)) / 10) +
      day
    ) % 7;

  // Akan names
  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Pick the right Akan name
  const akanName = gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

  // Show the result
  resultDiv.textContent = `You were born on a ${days[dayOfWeek]}. Your Akan name is ${akanName}.`;

  // Clear the form so user can try again
  form.reset();
});
