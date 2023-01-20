const puppeteer = require('puppeteer');

async function startBrowser() {
  let browser;
  try {
    console.log('opening browser........');
    browser = await puppeteer.launch({
      headless: false, //false means it will run with an interface while true means it will not should be set to true if you want to deploy it to the cloud
      args: ['--disable-setuid-sandbox'],
      'ignoreHttpErrors': true, // allows you to visit websites that aren’t hosted over a secure HTTPS protocol and ignore any HTTPS-related errors.
    });
  } catch (err) {
    console.log('could not create a browser instance => : ', err);
  }
  return browser;
}

module.exports = {
  startBrowser
};

