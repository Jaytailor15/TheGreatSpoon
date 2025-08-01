// Splash Screen Functionality
document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    
    // Show splash screen
    splashScreen.style.display = 'flex';
    
    // Set minimum display time (in milliseconds)
    const minDisplayTime = 1000; // 3.5 seconds
    
    // Function to hide splash screen
    const hideSplash = () => {
        splashScreen.classList.add('hidden');
        
        // Remove from DOM after animation completes
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 1200); // Match this with CSS transition time
    };
    
    // Hide splash screen after page is fully loaded or after min display time, whichever comes last
    const hideAfterLoad = () => {
        // If page is already loaded, hide splash screen after min display time
        if (document.readyState === 'complete') {
            setTimeout(hideSplash, minDisplayTime);
        } else {
            // If page is still loading, wait for it to finish then hide
            window.addEventListener('load', function() {
                setTimeout(hideSplash, minDisplayTime);
            });
        }
    };
    
    // Start the hide process
    hideAfterLoad();
});
