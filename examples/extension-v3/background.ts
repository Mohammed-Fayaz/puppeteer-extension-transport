import puppeteer from 'puppeteer-core/lib/cjs/puppeteer/web';
import {ExtensionDebuggerTransport} from '../../lib';

const run = async (tabId: number) => {
  const extensionTransport = await ExtensionDebuggerTransport.create(tabId);
  const browser = await puppeteer.connect({
    transport: extensionTransport,
    defaultViewport: null,
  });

  // use first page from pages instead of using browser.newPage()
  // const [page] = await browser.pages();

  // await page.goto('https://wikipedia.org');

  // const screenshot = await page.screenshot({
  //   encoding: 'base64',
  // });
  // console.log(`data:image/png;base64,${screenshot}`);

  // const englishButton = await page.waitForSelector('#js-link-box-en > strong');
  // await englishButton?.click();

  // const searchBox = await page.waitForSelector('#searchInput');
  // await searchBox?.type('telephone');
  // await page.keyboard.press('Enter');

  // await page.close();

  const [page] = await browser.pages();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 1636,
      height: 710,
    });
  }
  {
    const targetPage = page;
    const promises: any = [];
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    };
    startWaitingForEvents();
    await targetPage.goto(
      'https://docs.google.com/forms/d/e/1FAIpQLScdIWgDR_F42UCWflRz2wbe6YFjdhjp5jrVfxq--PU-F2pHHw/viewform'
    );
    await Promise.all(promises);
  }
  {
    const targetPage = page;
    // const s55 = await targetPage.waitForSelector('div.uHMk6b');
    const s55 = await targetPage?.$x('//*[@id="i5"]/div[2]');
    await s55?.[0]?.click({
      offset: {
        x: 6,
        y: 9.46875,
      },
    });

    // await puppeteer.Locator.race([
    //   targetPage.locator('div.uHMk6b'),
    //   targetPage.locator('::-p-xpath(//*[@id=\\"i5\\"]/div[2])'),
    //   targetPage.locator(':scope >>> div.uHMk6b'),
    // ])
    //   .setTimeout(timeout)
    //   .click({
    //     offset: {
    //       x: 6,
    //       y: 9.46875,
    //     },
    //   });
  }
  {
    const targetPage = page;
    // const s80 = await targetPage.waitForSelector(
    //   'label:nth-of-type(5) div.vd3tt > div'
    // );
    const s80 = await targetPage?.$x(
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/span/div/label[5]/div[2]/div/div/div[3]/div'
    );
    await s80?.[0]?.click({
      offset: {
        x: 2.9478759765625,
        y: 7.1353759765625,
      },
    });

    // await puppeteer.Locator.race([
    //   targetPage.locator('label:nth-of-type(5) div.vd3tt > div'),
    //   targetPage.locator(
    //     '::-p-xpath(//*[@id=\\"mG61Hd\\"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/span/div/label[5]/div[2]/div/div/div[3]/div)'
    //   ),
    //   targetPage.locator(':scope >>> label:nth-of-type(5) div.vd3tt > div'),
    // ])
    //   .setTimeout(timeout)
    //   .click({
    //     offset: {
    //       x: 2.9478759765625,
    //       y: 7.1353759765625,
    //     },
    //   });
  }
  {
    const targetPage = page;
    const promises: any = [];
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    };
    // const s111 = await targetPage.waitForSelector('div.lRwqcd span > span');
    const s111 = await targetPage?.$x(
      '//*[@id="mG61Hd"]/div[2]/div/div[3]/div/div[1]/div/span/span'
    );
    await s111?.[0]?.click({
      offset: {
        x: 17.6666259765625,
        y: 21.46875,
      },
    });
    // await puppeteer.Locator.race([
    //   targetPage.locator('div.lRwqcd span > span'),
    //   targetPage.locator(
    //     '::-p-xpath(//*[@id=\\"mG61Hd\\"]/div[2]/div/div[3]/div/div[1]/div/span/span)'
    //   ),
    //   targetPage.locator(':scope >>> div.lRwqcd span > span'),
    //   targetPage.locator('::-p-text(Submit)'),
    // ])
    //   .setTimeout(timeout)
    //   .on('action', () => startWaitingForEvents())
    //   .click({
    //     offset: {
    //       x: 17.6666259765625,
    //       y: 21.46875,
    //     },
    //   });
    await Promise.all(promises);
  }
};

chrome.commands.onCommand.addListener(command => {
  if (command === 'test') {
    console.log('test');
    chrome.tabs.create(
      {
        active: true,
        url: 'https://www.google.co.in',
      },
      tab => (tab.id ? run(tab.id) : null)
    );
  }
});
