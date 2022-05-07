const puppeteer = require('puppeteer');
const express = require('express');

const app = express();
const port = 3000
const googleUrl='https://www.google.com/search?q='

const ppt = (async (pesquisa) => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(`${googleUrl}${pesquisa}`);
  await page.screenshot({ path: 'example.png' });

  await browser.close();
});


app.get('/alura', (req, res) => {
    ppt('alura');
  res.send('aluraa!')
})

app.get('/', (req, res) => {
    ppt();
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})