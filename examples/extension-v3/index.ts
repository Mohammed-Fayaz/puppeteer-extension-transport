chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log({msg});
  const element = document.querySelector('body > div');
  if (element) {
    element.innerHTML = 'Listing Created';
  }
});

console.log('content', document.querySelector('body > div')?.innerHTML);
