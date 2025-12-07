// RTL Toggle Logic
function toggleRTL() {
    const html = document.documentElement;
    const currentDir = html.getAttribute('dir');
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';

    html.setAttribute('dir', newDir);
    localStorage.setItem('dir', newDir);

    // Dispatch event for other components to react
    const event = new CustomEvent('rtlChanged', { detail: { dir: newDir } });
    html.dispatchEvent(event);

    updateRTLUI(newDir);
}

function updateRTLUI(dir) {
    console.log('RTL UI Updated to:', dir);
    const toggles = document.querySelectorAll('.rtl-toggle-btn');
    toggles.forEach(btn => {
        // In the future, we can rotate icons here if needed
        // btn.style.transform = dir === 'rtl' ? 'rotate(180deg)' : 'none';
    });
}

// Initialize RTL on load
document.addEventListener('DOMContentLoaded', () => {
    const savedDir = localStorage.getItem('dir') || 'ltr';
    document.documentElement.setAttribute('dir', savedDir);
    updateRTLUI(savedDir);
});

// Expose globally
window.toggleRTL = toggleRTL;
