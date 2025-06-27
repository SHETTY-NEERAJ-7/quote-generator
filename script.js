const quotes = [
    "Believe in yourself!",
    "Keep pushing forward.",
    "You are stronger than you think.",
    "Stay positive, work hard, make it happen.",
    "Great things never come from comfort zones."
  ];
  
  function generateQuote() {
    const quoteElement = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
  