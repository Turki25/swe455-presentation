// script.js
function getRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').innerText = data.content;
        })
        .catch(error => console.error('Error fetching quote:', error));
}
