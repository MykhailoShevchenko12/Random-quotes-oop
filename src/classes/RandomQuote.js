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

  /**
   * 1. Each async function returns promise
   * 2. If on the await line of code promise is rejected, code in the same block below 'await' is not executed
   * 3. Promise returned by the getRandomQuoteViaAPI will be always fulfilled
   * because we catch all possible errors
   * 4. Result of the fulfilled promise will be either Quote or undefined
   * 5. Therefore there is no need for try/catch block where we call this function
   */
  static async getRandomQuoteViaAPI() {
    //Request quote via API
    const url = 'https://quoteslate.vercel.app/api/quotes/random';
    const options = { headers: { 'Content-type': 'application/json' } };
    try {
      const response = await fetch(url, options);
      const { id, quote, author } = await response.json();
      //Resolves promise to Quote
      return new Quote(id, quote, author);
    } catch (error) {
      console.error(error);
      /**
       * 1. Returns undefined implicitly (resolves promise to undefined)
       * 2. Promise will become 'fulfilled'
       */
    }
  }
}

export default RandomQuote;
