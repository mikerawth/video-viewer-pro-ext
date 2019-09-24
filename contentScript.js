console.log("contentScript.js loaded");

chrome.runtime.onMessage.addListener(request => {
  if (request.message == "react") {
    var video = document.querySelector('video');
    if (video !== document.pictureInPictureElement) {
      video.requestPictureInPicture();
    } else {
      document.exitPictureInPicture();
    }
  }
});