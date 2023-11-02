chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
  console.log({msg});
  const element = document.querySelector('body > div');
  console.log(msg);
  if (element) {
    if (msg.event === 'WAITING_FOR_USER_REVIEW') {
      element.innerHTML = 'Waiting for user review...';
    } else {
      const queryOptions = {active: true, lastFocusedWindow: true};
      const [tab] = await chrome.tabs.query(queryOptions);
      element.innerHTML = 'Listing Created Successfully';
      await chrome.debugger.detach({tabId: tab.id!});
    }
  }
});

console.log('content', document.querySelector('body > div')?.innerHTML);
