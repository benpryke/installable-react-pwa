/**
 * Inspired by https://web.dev/customize-install/
 */

// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = event;
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});

export async function showInstallPrompt() {
  // Show the install prompt
  deferredPrompt.prompt();
  // We've used the prompt, and can't use it again, throw it away
  deferredPrompt = null;
}

export function isInstalled(event) {
  const isStandalone = event
    ? event.matches
    : window.matchMedia("(display-mode: standalone)").matches;
  return (
    isStandalone ||
    navigator.standalone ||
    document.referrer.startsWith("android-app://")
  );
}
