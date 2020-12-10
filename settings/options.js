"use strict";

const [ DEFAULT_BANNER_TEXT ] = [ "Scan this QR Code to open this page on your phone!" ];

function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    bannerText: document.querySelector("#bannerText").value
  });
  alert(document.querySelector("#bannerText").value);
}

function restoreOptions() {
  browser.storage.local.get("bannerText").then(result => {
    document.querySelector("#bannerText").value = result.cellSize || DEFAULT_BANNER_TEXT;
  }, error => {
    console.log(error);
  });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
