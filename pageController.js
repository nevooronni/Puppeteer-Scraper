const pageScraper = require('./pageScraper');

async function scrapeAll(browserInstance) {
  let broswer;
  try {
    browser = await browserInstance;
    await pageScraper.scraper(browser);
  } catch (err) {
    console.log('could not resolve the broswer instance => ', err);
  }
}

module.exports = (browserInstance) => scrapeAll(browserInstance) 