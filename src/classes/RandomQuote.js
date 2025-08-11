import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

//Return random quote
class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }
  static getRandomQuoteViaAPI() {
    //Request quote via API
    const url = 'https://quoteslate.vercel.app/api/quotes/random';
    const options = { headers: { 'Content-type': 'Application/json' } };

    return fetch(url, options)
      .then((response) => response.json())
      .then(({ id, quote, author }) => new Quote(id, quote, author))
      .catch((error) => console.error('Error:', error));
  }
}

export default RandomQuote;
