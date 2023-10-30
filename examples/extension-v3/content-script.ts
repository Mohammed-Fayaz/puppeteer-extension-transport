document
  .querySelector('div.Y5sE8d > span > span')
  ?.addEventListener('click', async () => {
    await chrome.runtime.sendMessage({event: 'SUBMIT'});
  });
