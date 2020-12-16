function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    bannerText: document.querySelector("#bannerText").value,
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#bannerText").value = result.bannerText || "Scan this code to open this page.";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("bannerText");
  getting.then(setCurrentChoice, onError);

}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
