const generateButton = document.getElementById("generate-button");
const textInput = document.getElementById("text-input");
const linkInput = document.getElementById("link-input");
const qrCode = document.getElementById("qr-code");

generateButton.addEventListener("click", function() {
    let input;
    if(textInput.value) {
        input = textInput.value;
    } else if(linkInput.value) {
        input = linkInput.value;
    }
    const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + input;
    qrCode.src = qrUrl;
});

qrCode.addEventListener("click", function() {
    if(linkInput.value) {
        window.open(linkInput.value, '_blank');
    }
});
const qrCodeContainer = document.getElementById("qr-code-container");

generateButton.addEventListener("click", function() {
    // Code to generate QR code
    qrCodeContainer.style.display = "block";
    downloadButton.style.display = "block";
    document.getElementById("qrcode").style.opacity = "1";
    document.getElementById("download-button").style.opacity = "1";

    document.getElementById("qrcode").classList.add("fade-in");
    document.getElementById("download-button").classList.add("fade-in");
});

const downloadButton = document.getElementById('download-button');

function downloadQRCode() {
    // Get the QR code element
    var qrcode = document.getElementById("qr-code");
    var imgData = qrcode.src;
    // Creates a link and triggers download
    var link = document.createElement("a");
    link.href = imgData;
    link.download = "qrcode.png";
    link.click();
  }
