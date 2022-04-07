

setInterval(() => {
  var refreshButton =document.querySelector('.me-refresh-btn');
 
  if (refreshButton) {
    console.log('click in ', refreshButton);
    refreshButton.click();
  }

}, 2000);

