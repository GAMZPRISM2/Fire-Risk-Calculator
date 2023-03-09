// wrap the code in a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
  // get references to the input fields
  const tempInput = document.getElementById('temp');
  const humidityInput = document.getElementById('humidity');
  const windInput = document.getElementById('wind');

  // add event listener to the submit button
  const submitButton = document.querySelector('input[type="submit"]');
  submitButton.addEventListener('click', calculateFireDanger);

  // function to calculate Fire Danger Index and Rating
  function calculateFireDanger(event) {
    event.preventDefault();

    // get user inputs and convert to numbers
    const temp = parseFloat(tempInput.value);
    const humidity = parseFloat(humidityInput.value);
    const wind = parseFloat(windInput.value);

    // calculate the Fire Danger Index
    const fdi = (9/5) * temp - 0.05 * humidity * (100 - 50) + 6 * wind;

    // calculate the Fire Danger Rating based on the FDI
    let rating;
    if (fdi < 5) {
      rating = 'Low';
    } else if (fdi < 12) {
      rating = 'Moderate';
    } else if (fdi < 25) {
      rating = 'High';
    } else if (fdi < 50) {
      rating = 'Very high';
    } else {
      rating = 'Extreme';
    }

    // display the results to the user
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Fire Danger Index: ${fdi.toFixed(2)}<br>Fire Danger Rating: ${rating}`;

    // log the results to the console
    console.log(`Fire Danger Index: ${fdi.toFixed(2)}`);
    console.log(`Fire Danger Rating: ${rating}`);
  }
});
