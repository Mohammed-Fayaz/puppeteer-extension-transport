chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log({msg});
  const element = document.querySelector('body > div');
  console.log(msg);
  if (element) {
    if (msg.event === 'WAITING_FOR_USER_REVIEW') {
      element.innerHTML = 'Waiting for user review...';
    } else {
      element.innerHTML = 'Listed Created Successfully';
    }
  }
});

console.log('content', document.querySelector('body > div')?.innerHTML);
