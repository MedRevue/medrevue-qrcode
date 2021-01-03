"use strict";

let btn = document.getElementById("generate-qr-code");
let urlInput = document.getElementById("form-url");
let canvas = document.getElementById("qr-code-canvas");

btn.addEventListener("click", function (e) {
  QRCode.toCanvas(cavnvas, 'sample text', function (error) {
    if (error) console.error(error)
    console.log('success!');
  })
});
