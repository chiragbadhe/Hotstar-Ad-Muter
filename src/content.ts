// content.ts

let isAdMutingActive = false;
let observer: MutationObserver | undefined;
let intervalId: number | undefined;

function startAdMuting() {
  if (isAdMutingActive) return;

  isAdMutingActive = true;
  const videoPlayer = document.querySelector('video');

  if (!videoPlayer) {
    console.warn("No video player found");
    return;
  }

  function checkForAd() {
    // Replace with actual ad detection logic
    return videoPlayer!.classList.contains('ad-playing');
  }

  observer = new MutationObserver(() => {
    const adPlaying = checkForAd();
    if (adPlaying) {
      videoPlayer!.muted = true;
      console.log("Ad started, video muted");
    } else {
      videoPlayer!.muted = false;
      console.log("Ad ended, video unmuted");
    }
  });

  observer.observe(videoPlayer, { attributes: true, childList: true, subtree: true });

  intervalId = window.setInterval(() => {
    const adPlaying = checkForAd();
    if (adPlaying) {
      videoPlayer!.muted = true;
      console.log("Ad started, video muted");
    } else {
      videoPlayer!.muted = false;
      console.log("Ad ended, video unmuted");
    }
  }, 1000);
}

function stopAdMuting() {
  if (!isAdMutingActive) return;

  isAdMutingActive = false;
  if (observer) observer.disconnect();
  if (intervalId) clearInterval(intervalId);

  const videoPlayer = document.querySelector('video');
  if (videoPlayer) videoPlayer.muted = false;
  console.log("Ad muting stopped, video unmuted");
}

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === 'start') {
    startAdMuting();
  } else if (request.action === 'stop') {
    stopAdMuting();
  }
});
