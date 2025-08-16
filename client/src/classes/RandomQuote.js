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

  static async getRandomQuoteViaAPI() {
    //Request quote via API
    const url = 'https://quoteslate.vercel.app/api/quotes/random';
    const options = { headers: { 'Content-type': 'application/json' } };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const { id, quote, author } =
        Array.isArray(data) && data.length === 1 ? data[0] : data;
      //Resolves promise to Quote
      return new Quote(id, quote, author);
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomQuote;
