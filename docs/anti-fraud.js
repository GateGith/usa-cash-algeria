// Nuclear Fraud Protection
const badPatterns = [
    "Headless", "PhantomJS", "Selenium",
    "Puppeteer", "Bot", "Crawler",
    "Scrapy", "Automation", "Lighthouse"
];

if(new RegExp(badPatterns.join("|"), "i").test(navigator.userAgent)) {
    document.body.innerHTML = '<h1 style="color:red">🛑 ACCESS VIOLATION DETECTED</h1>';
    window.stop();
}

// Algerian Carrier Check
if(!/Djezzy|Ooredoo|Mobilis/i.test(navigator.userAgent)) {
    setTimeout(() => {
        window.location.href = "https://github.com/GateGith/usa-cash-algeria/issues";
    }, 3000);
}

// Screenshot Killer
if(window.outerWidth - window.innerWidth > 50 || window.outerHeight - window.innerHeight > 50) {
    document.body.innerHTML = '<h1>📸 SCREENSHOT BLOCKED - USE SHARE BUTTON</h1>';
}
