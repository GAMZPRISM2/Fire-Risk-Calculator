document.addEventListener('DOMContentLoaded', () => {
  const tempInput = document.getElementById('temp');
  const humidityInput = document.getElementById('humidity');
  const windInput = document.getElementById('wind');

  const submitButton = document.querySelector('input[type="submit"]');
  submitButton.addEventListener('click', calculateFireDanger);

  function calculateFireDanger(event) {
    event.preventDefault();

    const temp = parseFloat(tempInput.value);
    const humidity = parseFloat(humidityInput.value);
    const wind = parseFloat(windInput.value);

    // calculate the Fire Danger Index
    const fdi = (9/5) * temp - 0.05 * humidity * (100 - 50) + 6 * wind;

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

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Fire Danger Index: ${fdi.toFixed(2)}<br>Fire Danger Rating: ${rating}`;

    console.log(`Fire Danger Index: ${fdi.toFixed(2)}`);
    console.log(`Fire Danger Rating: ${rating}`);
  }
});
