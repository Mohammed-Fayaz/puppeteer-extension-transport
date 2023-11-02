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
      width: 1263,
      height: 630,
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
      'https://docs.google.com/forms/d/e/1FAIpQLSddpZp10fEU3CMmyADJV03PFIzJHzvuf3xwVubsUYqT1QQsKg/viewform'
    );
    await Promise.all(promises);
  }
  {
    const targetPage = page;
    const s = await targetPage.waitForSelector(
      'div.o3Dpx > div:nth-of-type(1) input'
    );
    s?.click({
      offset: {
        x: 163.66665649414062,
        y: 5.135406494140625,
      },
    });
  }
  {
    const targetPage = page;
    const s = await targetPage.waitForSelector(
      'div.o3Dpx > div:nth-of-type(1) input'
    );
    await s?.type('4140374');
  }
  {
    const targetPage = page;
    const s = await targetPage.waitForSelector(
      'div.o3Dpx > div:nth-of-type(2) input'
    );
    s?.click({
      offset: {
        x: 113.66665649414062,
        y: 5.8020782470703125,
      },
    });
  }
  {
    const targetPage = page;
    const s = await targetPage.waitForSelector(
      'div.o3Dpx > div:nth-of-type(2) input'
    );
    await s?.type('Walkaroo');
  }
  {
    const targetPage = page;
    const s = await targetPage.waitForSelector(
      'div.o3Dpx > div:nth-of-type(3) div.PfQ8Lb > div > div:nth-of-type(1) input'
    );
    s?.click({
      offset: {
        x: 5.666656494140625,
        y: 10.46875,
      },
    });
  }
  {
    const targetPage = page;
    const s = await targetPage.waitForSelector(
      'div.o3Dpx > div:nth-of-type(3) div.PfQ8Lb > div > div:nth-of-type(1) input'
    );
    await s?.type('01');
  }
  {
    const targetPage = page;
    const s = await targetPage.waitForSelector(
      'div.o3Dpx > div:nth-of-type(3) div.PfQ8Lb > div > div:nth-of-type(3) input'
    );
    await s?.click({
      offset: {
        x: 4.666656494140625,
        y: 17.46875,
      },
    });
  }
  {
    const targetPage = page;
    const s = await targetPage.waitForSelector(
      'div.o3Dpx > div:nth-of-type(3) div.PfQ8Lb > div > div:nth-of-type(3) input'
    );
    await s?.type('00');
  }
  {
    const targetPage = page;
    const s = await targetPage.waitForSelector(
      'div:nth-of-type(4) div.PfQ8Lb > div > div:nth-of-type(1) input'
    );
    await s?.click({
      offset: {
        x: 5.666656494140625,
        y: 9.802078247070312,
      },
    });
  }
  {
    const targetPage = page;
    const s = await targetPage.waitForSelector(
      'div:nth-of-type(4) div.PfQ8Lb > div > div:nth-of-type(1) input'
    );
    await s?.type('01');
  }
  {
    const targetPage = page;
    const s = await targetPage.waitForSelector('div:nth-of-type(4) div.IDmXx');
    await s?.click({
      offset: {
        x: 10.666656494140625,
        y: 11.802078247070312,
      },
    });
  }
  {
    const targetPage = page;
    const s = await targetPage.waitForSelector(
      'div:nth-of-type(4) div.PfQ8Lb > div > div:nth-of-type(3) input'
    );
    await s?.click({
      offset: {
        x: 4.666656494140625,
        y: 12.802078247070312,
      },
    });
  }
  {
    const targetPage = page;
    const selector =
      'div:nth-of-type(4) div.PfQ8Lb > div > div:nth-of-type(3) input';
    const element = await targetPage.waitForSelector(selector);
    if (element) {
      await element.type('15');
    }
  }

  {
    const targetPage = page;
    const selector = 'div:nth-of-type(5) input';
    const element = await targetPage.waitForSelector(selector);
    if (element) {
      await element.click({
        offset: {
          x: 120.66665649414062,
          y: 8.46875,
        },
      });
    }
  }
  {
    const targetPage = page;
    const selector = 'div:nth-of-type(5) input';
    const element = await targetPage.waitForSelector(selector);
    if (element) {
      await element.click({
        offset: {
          x: 12.666664123535156,
          y: 10.135414123535156,
        },
      });
    }
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down('1');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('1');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down('0');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('0');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down('3');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('3');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down('0');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('0');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down('2');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('2');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down('0');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('0');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down('2');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('2');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down('3');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('3');
  }
  // {
  //   const targetPage = page;
  //   const selector = 'div:nth-of-type(5) input';
  //   const element = await targetPage.waitForSelector(selector);
  //   if (element) {
  //     await element.type('2023-10-28');
  //   }
  // }
  {
    const targetPage = page;
    const selector = 'div:nth-of-type(6) textarea';
    const element = await targetPage.waitForSelector(selector);
    if (element) {
      await element.click({
        offset: {
          x: 38.666656494140625,
          y: 7.46875,
        },
      });
    }
  }
  {
    const targetPage = page;
    const selector = 'div:nth-of-type(6) textarea';
    const element = await targetPage.waitForSelector(selector);
    if (element) {
      await element.type('Mysore');
    }
  }
  {
    const targetPage = page;
    const selector = 'div:nth-of-type(7) textarea';
    const element = await targetPage.waitForSelector(selector);
    if (element) {
      await element.click({
        offset: {
          x: 38.666656494140625,
          y: 8.135406494140625,
        },
      });
    }
  }
  {
    const targetPage = page;
    const selector = 'div:nth-of-type(7) textarea';
    const element = await targetPage.waitForSelector(selector);
    if (element) {
      await element.type('Thiruvallur');
    }
  }
  {
    const targetPage = page;
    const promises: any = [];
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    };
    const selector = 'div.lRwqcd span > span';
    const element = await targetPage.waitForSelector(selector);
    if (element) {
      await element.click({
        offset: {
          x: 16.33331298828125,
          y: 23.46875,
        },
      });
    }
    await Promise.all(promises);
  }
  {
    const targetPage = page;
    const s = await targetPage.waitForSelector(
      'div.o3Dpx > div:nth-of-type(2) input'
    );
    await s?.click({
      offset: {
        x: 75.66665649414062,
        y: 8.46875,
      },
    });
  }
  {
    const targetPage = page;
    const s = await targetPage.waitForSelector(
      'div.o3Dpx > div:nth-of-type(2) input'
    );
    await s?.type('32ft sxl');
  }
  {
    const targetPage = page;
    const selector = 'div.KKjvXb';
    const element = await targetPage.waitForSelector(selector);
    if (element) {
      await element.click({
        offset: {
          x: 101,
          y: 9.802078247070312,
        },
      });
    }
  }
  {
    await page.waitForTimeout(1000);
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down('ArrowDown');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('ArrowDown');
  }
  // {
  //   const targetPage = page;
  //   await targetPage.keyboard.down('1');
  // }
  // {
  //   const targetPage = page;
  //   await targetPage.keyboard.up('1');
  // }
  {
    const targetPage = page;
    await targetPage.keyboard.down('Enter');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('Enter');
  }
  // {
  //   const targetPage = page;
  //   const selector = 'div.OA0qNb > div.KKjvXb > span';
  //   const element = await targetPage.waitForSelector(selector);
  //   if (element) {
  //     await element.click({
  //       offset: {
  //         x: 74,
  //         y: 11.166664123535156,
  //       },
  //     });
  //   }
  // }
  {
    const targetPage = page;
    const selector = 'div:nth-of-type(4) input';
    const element = await targetPage.waitForSelector(selector);
    if (element) {
      await element.click({
        offset: {
          x: 110.66665649414062,
          y: 11.46875,
        },
      });
    }
  }
  {
    const targetPage = page;
    const selector = 'div:nth-of-type(4) input';
    const element = await targetPage.waitForSelector(selector);
    if (element) {
      await element.type('Footwear');
    }
  }
  {
    const targetPage = page;
    const selector = 'div:nth-of-type(5) input';
    const element = await targetPage.waitForSelector(selector);
    if (element) {
      await element.click({
        offset: {
          x: 71.66665649414062,
          y: 9.135414123535156,
        },
      });
    }
  }
  {
    const targetPage = page;
    const selector = 'div:nth-of-type(5) input';
    const element = await targetPage.waitForSelector(selector);
    if (element) {
      await element.type('19000');
    }
  }
  // {
  //   const targetPage = page;
  //   const promises: any = [];
  //   const startWaitingForEvents = () => {
  //     promises.push(targetPage.waitForNavigation());
  //   };
  //   const s = await targetPage.waitForSelector('div.Y5sE8d > span > span');
  //   await s?.click({
  //     offset: {
  //       x: 11.71875,
  //       y: 5.46875,
  //     },
  //   });
  //   await Promise.all(promises);
  // }

  await chrome.runtime.sendMessage({event: 'WAITING_FOR_USER_REVIEW'});

  const queryOptions = {active: true, lastFocusedWindow: true};
  const [tab] = await chrome.tabs.query(queryOptions);
  await chrome.debugger.detach({tabId: tab.id!});
};

chrome.commands.onCommand.addListener(command => {
  if (command === 'test') {
    console.log('test');

    chrome.tabs.create(
      {
        active: true,
        url: 'https://www.google.co.in',
      },
      tab => {
        if (tab.id) {
          run(tab.id);

          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          chrome.sidePanel.open({tabId: tab.id});
        }
      }
    );
  }
});

chrome.action.onClicked.addListener(tab => {
  if (tab.id) {
    run(tab.id);
  }
});

chrome.sidePanel.setPanelBehavior({openPanelOnActionClick: true});
