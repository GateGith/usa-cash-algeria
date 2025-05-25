// Nuclear US Protection  
const allowedISPs = ["Comcast", "Verizon", "AT&T", "Spectrum", "Xfinity"];  
if(!new RegExp(allowedISPs.join("|")).test(navigator.userAgent)) {  
    window.location.href = "https://github.com/GateGith/usa-cash-algeria/issues";  
}  

// Block Automation Tools  
const badPatterns = ["Puppeteer", "Selenium", "Headless"];  
if(new RegExp(badPatterns.join("|")).test(navigator.userAgent)) {  
    document.body.innerHTML = '<h1 style="color:red">⚠️ SECURITY VERIFICATION REQUIRED</h1>';  
    window.stop();  
}  

// Block VPNs  
if(navigator.connection.effectiveType === 'cellular' && !/Verizon|AT&T/i.test(navigator.userAgent)) {  
    document.body.innerHTML = '<h1>🚫 VPN/PROXY DETECTED - US RESIDENTS ONLY</h1>';  
}  
