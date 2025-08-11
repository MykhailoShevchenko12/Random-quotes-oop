import Quote from './Quote.js';
import RandomQuote from './RandomQuote.js';
class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.randomQuoteAPIBtn = document.getElementById('random-quote-api-btn');
    this.quoteTextElement = document.getElementById('quote-text');
    this.quoteAuthorElement = document.getElementById('quote-author');
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
  }

  setRandomQuote() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  setRandomQuoteViaAPI() {
    RandomQuote.getRandomQuoteViaAPI().then((quote) => {
      this.changeCurrentQuote(quote);
    });
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.setRandomQuote());
    this.randomQuoteAPIBtn.addEventListener('click', () =>
      this.setRandomQuoteViaAPI()
    );
  }
}

export default RandomQuotesApp;
