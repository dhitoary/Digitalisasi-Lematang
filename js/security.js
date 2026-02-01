// Security Monitoring Script
// Deteksi aktivitas mencurigakan dan hack

(function() {
    'use strict';
    
    // 1. Monitor perubahan DOM yang mencurigakan
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) { // Element node
                    const suspiciousPatterns = [
                        'judol', 'judi', 'slot', 'casino', 'poker', 
                        'togel', 'betting', 'gambling', 'pragmatic',
                        'pgsoft', 'habanero', 'joker123', 'sbobet'
                    ];
                    
                    const textContent = node.textContent.toLowerCase();
                    const hasScript = node.tagName === 'SCRIPT';
                    const hasIframe = node.tagName === 'IFRAME';
                    
                    // Check for suspicious content
                    const isSuspicious = suspiciousPatterns.some(pattern => 
                        textContent.includes(pattern)
                    );
                    
                    if (isSuspicious || (hasScript && !node.src.includes('desalematang')) || 
                        (hasIframe && !node.src.includes('google.com'))) {
                        console.warn('⚠️ Suspicious content detected!', node);
                        // Optional: Remove suspicious node
                        // node.remove();
                        // Optional: Report to monitoring service
                        reportSecurity('Suspicious DOM manipulation detected');
                    }
                }
            });
        });
    });

    // Start observing
    if (document.body) {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // 2. Prevent unauthorized redirects
    const originalLocation = window.location.href;
    Object.defineProperty(window, 'location', {
        get: function() {
            return originalLocation;
        },
        set: function(value) {
            // Only allow same-origin redirects
            if (value.includes(window.location.hostname)) {
                window.location.href = value;
            } else {
                console.warn('⚠️ Unauthorized redirect blocked:', value);
                reportSecurity('Redirect attempt blocked: ' + value);
            }
        }
    });

    // 3. Disable console in production (optional)
    // Uncomment in production to prevent console manipulation
    /*
    if (window.location.hostname !== 'localhost') {
        console.log = function() {};
        console.warn = function() {};
        console.error = function() {};
    }
    */

    // 4. Detect click hijacking
    document.addEventListener('click', function(e) {
        const target = e.target;
        const href = target.href || target.closest('a')?.href;
        
        if (href && !href.includes(window.location.hostname) && 
            !href.includes('google.com') && !href.includes('wa.me') &&
            !href.includes('instagram.com') && !href.includes('cdnjs.cloudflare.com')) {
            
            // Suspicious external link
            if (!confirm('Anda akan meninggalkan website Desa Lematang. Lanjutkan?')) {
                e.preventDefault();
                return false;
            }
        }
    }, true);

    // 5. Report security events
    function reportSecurity(message) {
        // Log to console
        console.error('🚨 SECURITY ALERT:', message);
        
        // Optional: Send to monitoring service
        // fetch('/api/security-log', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         message: message,
        //         url: window.location.href,
        //         timestamp: new Date().toISOString(),
        //         userAgent: navigator.userAgent
        //     })
        // });
    }

    // 6. Integrity check for critical elements
    function checkIntegrity() {
        // Check if navbar is intact
        const navbar = document.querySelector('nav') || document.querySelector('[id*="nav"]');
        if (!navbar) {
            reportSecurity('Navigation element missing');
        }

        // Check if footer is intact
        const footer = document.querySelector('footer') || document.querySelector('[id*="footer"]');
        if (!footer) {
            reportSecurity('Footer element missing');
        }

        // Check for suspicious iframes
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            if (!iframe.src.includes('google.com') && !iframe.src.includes(window.location.hostname)) {
                console.warn('⚠️ Unauthorized iframe detected:', iframe.src);
                reportSecurity('Unauthorized iframe: ' + iframe.src);
                // iframe.remove(); // Uncomment to auto-remove
            }
        });

        // Check for suspicious scripts
        const scripts = document.querySelectorAll('script[src]');
        const allowedDomains = ['cdnjs.cloudflare.com', 'desalematang', 'google.com', 'gstatic.com'];
        scripts.forEach(script => {
            const isAllowed = allowedDomains.some(domain => script.src.includes(domain));
            if (!isAllowed && script.src.trim() !== '') {
                console.warn('⚠️ Unauthorized script detected:', script.src);
                reportSecurity('Unauthorized script: ' + script.src);
            }
        });
    }

    // Run integrity check on load and periodically
    window.addEventListener('load', checkIntegrity);
    setInterval(checkIntegrity, 30000); // Check every 30 seconds

    // 7. Prevent frame hijacking
    if (window.top !== window.self) {
        console.warn('⚠️ Page loaded in iframe - possible clickjacking attempt');
        reportSecurity('Clickjacking attempt detected');
        // Force break out of frame
        window.top.location = window.self.location;
    }

    // 8. Log page info for monitoring
    console.log('✅ Security monitoring active');
    console.log('📍 URL:', window.location.href);
    console.log('🕐 Loaded:', new Date().toISOString());

})();
