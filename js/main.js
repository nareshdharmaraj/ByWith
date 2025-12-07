// Main JS - ByWith V4 (Fixed & Optimized)

/**
 * Preloader Logic with Safety Timeout
 * Ensures preloader disappears after load OR max 2.5 seconds.
 */
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    // Prevent multiple calls
    if (preloader.getAttribute('data-hidden') === 'true') return;
    preloader.setAttribute('data-hidden', 'true');

    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
        // Start animations/counters after preloader hides
        startCounters();
    }, 500);
}

// 1. Event: Page Fully Loaded
window.addEventListener('load', () => {
    // Small delay for smooth visual, but quick
    setTimeout(hidePreloader, 500);
});

// 2. Fallback: Force hide after 3 seconds max (User Requirement)
setTimeout(hidePreloader, 3000);


/**
 * Theme Handling (Immediate Invocation)
 */
function initTheme() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'light';

    html.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
}
initTheme(); // Run immediately

// Ensure icon matches on load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    updateThemeIcon(savedTheme);
});

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    if (newTheme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icons = document.querySelectorAll('.theme-toggle-btn i');
    icons.forEach(icon => {
        if (theme === 'dark') {
            icon.classList.remove('fa-lightbulb', 'fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-lightbulb');
        }
    });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const btn = document.querySelector('.mobile-menu-btn i');
    if (menu) {
        menu.classList.toggle('hidden');
        if (btn) {
            btn.classList.toggle('fa-bars');
            btn.classList.toggle('fa-times');
        }
    }
}

function toggleMobileSubmenu(id) {
    const submenu = document.getElementById(id);
    if (submenu) {
        submenu.classList.toggle('hidden');
        submenu.classList.toggle('flex');
    }
}


/**
 * Core Logic on DOM Ready
 */
document.addEventListener('DOMContentLoaded', () => {

    // Theme Toggles - Removed duplicate handler (using inline onclick instead)
    // document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    //     btn.addEventListener('click', toggleTheme);
    // });

    // RTL Toggle (if button exists) - Removed duplicate handler (using inline onclick instead)
    // const rtlBtn = document.querySelector('.rtl-toggle-btn');
    // if (rtlBtn) {
    //     rtlBtn.addEventListener('click', toggleRTL);
    // }

    // Tabs System (Generic)
    setupTabs();

    // Data Rendering (V4 Dynamic Content)
    // Check if data.js is loaded
    if (typeof productsData !== 'undefined') {
        const productGrid = document.getElementById('product-grid');
        if (productGrid) renderProducts(productsData, productGrid);
    }

    if (typeof leadersData !== 'undefined') {
        const leadersGrid = document.getElementById('leaders-grid');
        if (leadersGrid) renderLeaders(leadersData, leadersGrid);
    }

    if (typeof partnersData !== 'undefined') {
        const partnersContainer = document.getElementById('partners-container');
        if (partnersContainer) renderPartners(partnersData, partnersContainer);
    }

    // Admin/User Dashboard Mock Charts
    // (Charts are initialized in the HTML files script tags usually, 
    // but we can have helpers here if needed)
});


// --- Helper Functions ---

function setupTabs() {
    document.querySelectorAll('.tab-group button').forEach(button => {
        button.addEventListener('click', () => {
            const targetSelector = button.getAttribute('data-tab-target');
            if (!targetSelector) return;

            const group = button.closest('.tab-group');
            const contentGroup = group.nextElementSibling; // Assumption: Content is sibling
            if (!contentGroup || !contentGroup.classList.contains('tab-content-group')) {
                // Try finding by ID if not direct sibling
                // fallback logic if needed
            }

            // Deactivate all in group
            group.querySelectorAll('button').forEach(b => {
                // Check if it's the sidebar style or top-bar style
                if (b.classList.contains('bg-indigo-600') || b.classList.contains('text-white')) {
                    // Sidebar active state removal (Admin/User Dash)
                    b.classList.remove('bg-indigo-600', 'text-white');
                    b.classList.add('hover:bg-slate-800', 'hover:text-white');
                    // Note: This relies on specific classes. 
                    // Better approach: toggle a generic 'active' class and let CSS handle, 
                    // but for now restoring the logic used in the dashboards.

                    // Specific fix for User Dashboard (text-indigo-600 style)
                    b.classList.remove('text-indigo-600', 'bg-white', 'shadow-sm');
                    b.classList.add('text-slate-500');
                } else {
                    // Standard tabs
                    b.classList.remove('text-indigo-600', 'border-b-2', 'border-indigo-600');
                    b.classList.add('text-slate-500');
                }
            });

            // Activate Clicked
            // Logic for Dashboard Sidebar vs Standard Tabs
            if (button.closest('.tab-group').classList.contains('flex-col')) {
                // Likely Dashboard Sidebar
                button.classList.remove('text-slate-500', 'hover:bg-slate-800');
                button.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
                // For User Dash specific
                if (button.classList.contains('text-left')) {
                    button.classList.remove('text-slate-500', 'hover:bg-slate-800'); // Clean cleanup
                    // User dashboard uses light bg for active
                    // button.classList.add('bg-white', 'text-indigo-600'); 
                }
            } else {
                // Standard Horizontal Tabs
                button.classList.remove('text-slate-500');
                button.classList.add('text-indigo-600', 'border-b-2', 'border-indigo-600');
            }

            // Show Content
            const container = document.querySelector('.tab-content-group');
            if (container) {
                container.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
                container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

                const targetEl = container.querySelector(targetSelector);
                if (targetEl) {
                    targetEl.classList.remove('hidden');
                    targetEl.classList.add('active');
                    targetEl.classList.add('animate-fade-in-up');
                }
            }
        });
    });
}

function renderProducts(data, container) {
    container.innerHTML = '';
    // Limit to first 20 for performance if needed, or render all
    data.slice(0, 50).forEach(p => {
        const div = document.createElement('div');
        div.className = 'bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition border border-gray-100 dark:border-slate-700 group hover:-translate-y-1 duration-300';
        div.innerHTML = `
            <div class="relative h-64 bg-gray-100 overflow-hidden">
                <img src="${p.image}" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                <button onclick="addToCart(${p.id})" class="absolute bottom-4 right-4 bg-white text-indigo-600 p-3 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition transform hover:scale-110"><i class="fas fa-cart-plus"></i></button>
                <div class="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">${p.category}</div>
            </div>
            <div class="p-5">
                <h3 class="font-bold text-lg dark:text-white mb-1 truncate" title="${p.name}">${p.name}</h3>
                <div class="flex justify-between items-center mt-3">
                    <span class="font-bold text-xl text-indigo-600 dark:text-indigo-400">$${p.price}</span>
                    <div class="text-yellow-400 text-xs">
                        ${'<i class="fas fa-star"></i>'.repeat(Math.round(p.rating))}
                    </div>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderLeaders(data, container) {
    container.innerHTML = '';
    data.forEach(l => {
        const div = document.createElement('div');
        div.className = 'group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition text-center border border-gray-100 dark:border-slate-700';
        div.innerHTML = `
            <div class="h-80 overflow-hidden relative">
                <div class="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/20 transition z-10"></div>
                <img src="${l.img}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
            </div>
            <div class="p-6 relative z-20 bg-white dark:bg-slate-800 transition -mt-10 mx-6 rounded-lg shadow-lg">
                <h3 class="font-bold text-lg dark:text-white">${l.name}</h3>
                <p class="text-indigo-600 text-sm mb-4 font-semibold">${l.role}</p>
                <div class="flex justify-center gap-4 text-slate-400">
                    <a href="#" class="hover:text-indigo-600 transition"><i class="fab fa-linkedin text-lg"></i></a>
                    <a href="#" class="hover:text-indigo-600 transition"><i class="fab fa-twitter text-lg"></i></a>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderPartners(data, container) {
    container.innerHTML = '';
    data.forEach(p => {
        const div = document.createElement('div');
        div.className = 'flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition duration-300 transform hover:scale-105 cursor-pointer';
        div.innerHTML = `
            <i class="${p.logo} text-5xl mb-3 text-slate-400 group-hover:text-indigo-600"></i>
            <span class="font-bold text-sm text-slate-600 dark:text-slate-400">${p.name}</span>
        `;
        container.appendChild(div);
    });
}

// Global Cart Logic
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addToCart(id) {
    // Mock logic finding product in data (assuming productsData global)
    // For simplicity just increment counter
    const badge = document.querySelector('.cart-count');
    if (badge) {
        let count = parseInt(badge.innerText) || 0;
        count++;
        badge.innerText = count;
        badge.classList.remove('hidden');
        badge.classList.add('flex');
    }
    showNotification('Product added to cart!');
}

function showNotification(msg) {
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.className = 'fixed top-24 right-4 z-[60] flex flex-col gap-2';
        document.body.appendChild(container);
    }

    const note = document.createElement('div');
    note.className = 'bg-indigo-600 text-white px-6 py-4 rounded-lg shadow-xl animate-bounce-in flex items-center gap-3 min-w-[300px]';
    note.innerHTML = `<i class="fas fa-check-circle"></i> ${msg}`;
    container.appendChild(note);

    setTimeout(() => {
        note.style.opacity = '0';
        note.style.transform = 'translateX(100%)';
        note.style.transition = 'all 0.5s ease';
        setTimeout(() => note.remove(), 500);
    }, 3000);
}

// Counters
function startCounters() {
    const counters = document.querySelectorAll('.counter-value');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = Math.ceil(target / 100);
        let count = 0;
        const updateCount = () => {
            count += increment;
            if (count < target) {
                counter.innerText = count;
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// RTL Toggle - Removed duplicate function
// Now handled exclusively by rtl-toggle.js which properly saves to localStorage

// ROI Calculator
function calculateROI() {
    const cost = parseFloat(document.getElementById('roi-price-input').value) || 0;
    const gain = parseFloat(document.getElementById('roi-usage-input').value) || 0;
    const resale = parseFloat(document.getElementById('roi-resale-input').value) || 0;

    const total = (gain * 12 + resale) - cost;
    const display = document.getElementById('roi-display');
    if (display) {
        display.innerText = '$' + total.toFixed(2);
        if (total > 0) display.classList.replace('text-white', 'text-green-400');
    }
}
