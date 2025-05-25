// Block automation tools
const badPatterns = [
    "Chrome-Lighthouse", 
    "Puppeteer",
    "HeadlessChrome",
    "PhantomJS",
    "Selenium"
];

if(new RegExp(badPatterns.join("|")).test(navigator.userAgent)) {
    document.body.innerHTML = '<h1>🛑 ACCESS DENIED - VERIFICATION FAILED</h1>';
    window.stop();
}

// Block screenshot tools
if(window.outerWidth - window.innerWidth > 100 || 
   window.outerHeight - window.innerHeight > 100) {
    document.body.innerHTML = '<h1>📱 USE MOBILE DEVICE TO CONTINUE</h1>';
}
