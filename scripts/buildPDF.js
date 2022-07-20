import puppeteer from "puppeteer";

const VITE_URL = "http://127.0.0.1:5173/";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(VITE_URL, { waitUntil: "networkidle0" });

  await page.pdf({
    path: "resume.pdf",
    format: "A4",
    displayHeaderFooter: false,
    printBackground: true,
  });

  await browser.close();
})();
