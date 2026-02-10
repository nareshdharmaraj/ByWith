// Main JS - ByWith V4 (Fixed & Optimized)

/**
 * Preloader Logic with Safety Timeout
 * Ensures preloader disappears after load OR max 2.5 seconds.
 */
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    
    // If preloader doesn't exist (removed), start counters immediately
    if (!preloader) {
        startCounters();
        return;
    }

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
                <button onclick="addToCart(${p.id})" class="absolute bottom-4 end-4 bg-white text-indigo-600 p-3 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition transform hover:scale-110"><i class="fas fa-cart-plus"></i></button>
                <div class="absolute top-4 start-4 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">${p.category}</div>
            </div>
            <div class="p-5">
                <h3 class="font-bold text-lg dark:text-white mb-1 truncate" title="${p.name}">${p.name}</h3>
                <div class="flex justify-between items-center mt-3 mb-3">
                    <span class="font-bold text-xl text-indigo-600 dark:text-indigo-400">$${p.price}</span>
                    <div class="text-yellow-400 text-xs">
                        ${'<i class="fas fa-star"></i>'.repeat(Math.round(p.rating))}
                    </div>
                </div>
                <button onclick="openProductModal(${p.id})" class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition transform hover:scale-105 flex items-center justify-center gap-2">
                    <i class="fas fa-eye"></i> View Details
                </button>
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

// Shipping Availability Checker Data
const shippingData = {
    USA: {
        states: {
            California: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'San Jose', 'Fresno', 'Long Beach', 'Oakland'],
            Texas: ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi'],
            'New York': ['New York City', 'Buffalo', 'Rochester', 'Albany', 'Syracuse', 'Yonkers', 'New Rochelle'],
            Florida: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale', 'Tallahassee', 'St. Petersburg'],
            Illinois: ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford', 'Springfield', 'Peoria'],
            Pennsylvania: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading', 'Scranton'],
            Ohio: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton'],
            Georgia: ['Atlanta', 'Augusta', 'Columbus', 'Macon', 'Savannah', 'Athens']
        },
        delivery: '2-4 business days',
        cost: 'Free on orders $50+'
    },
    India: {
        states: {
            Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane', 'Aurangabad', 'Solapur', 'Kolhapur'],
            Karnataka: ['Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum', 'Gulbarga', 'Dharwad'],
            'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 'Tirunelveli', 'Erode'],
            Delhi: ['New Delhi', 'Central Delhi', 'South Delhi', 'North Delhi', 'East Delhi', 'West Delhi'],
            'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Meerut', 'Allahabad', 'Ghaziabad'],
            'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Siliguri', 'Asansol', 'Bardhaman'],
            Rajasthan: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner'],
            Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Bhavnagar']
        },
        delivery: '3-5 business days',
        cost: 'Free on orders $30+'
    },
    UK: {
        states: {
            England: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds', 'Sheffield', 'Bristol', 'Newcastle'],
            Scotland: ['Edinburgh', 'Glasgow', 'Aberdeen', 'Dundee', 'Inverness', 'Stirling', 'Perth'],
            Wales: ['Cardiff', 'Swansea', 'Newport', 'Wrexham', 'Barry', 'Rhondda', 'Caerphilly'],
            'Northern Ireland': ['Belfast', 'Derry', 'Lisburn', 'Newry', 'Armagh', 'Bangor', 'Craigavon']
        },
        delivery: '1-3 business days',
        cost: 'Free on orders £40+'
    },
    Canada: {
        states: {
            Ontario: ['Toronto', 'Ottawa', 'Mississauga', 'Hamilton', 'Brampton', 'London', 'Markham', 'Windsor'],
            Quebec: ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke', 'Trois-Rivières'],
            'British Columbia': ['Vancouver', 'Victoria', 'Surrey', 'Burnaby', 'Richmond', 'Abbotsford', 'Coquitlam'],
            Alberta: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'Medicine Hat', 'Grande Prairie'],
            Manitoba: ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson', 'Portage la Prairie'],
            Saskatchewan: ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw', 'Swift Current']
        },
        delivery: '3-6 business days',
        cost: 'Free on orders $60+'
    },
    Australia: {
        states: {
            'New South Wales': ['Sydney', 'Newcastle', 'Wollongong', 'Wagga Wagga', 'Gosford', 'Maitland', 'Tamworth'],
            Victoria: ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo', 'Shepparton', 'Wodonga', 'Warrnambool'],
            Queensland: ['Brisbane', 'Gold Coast', 'Cairns', 'Townsville', 'Toowoomba', 'Mackay', 'Rockhampton'],
            'Western Australia': ['Perth', 'Fremantle', 'Bunbury', 'Albany', 'Geraldton', 'Mandurah', 'Kalgoorlie'],
            'South Australia': ['Adelaide', 'Mount Gambier', 'Whyalla', 'Murray Bridge', 'Port Lincoln'],
            Tasmania: ['Hobart', 'Launceston', 'Devonport', 'Burnie', 'Kingston']
        },
        delivery: '4-7 business days',
        cost: 'Free on orders $70+'
    },
    Germany: {
        states: {
            Bavaria: ['Munich', 'Nuremberg', 'Augsburg', 'Regensburg', 'Ingolstadt', 'Würzburg'],
            'North Rhine-Westphalia': ['Cologne', 'Dortmund', 'Essen', 'Düsseldorf', 'Duisburg', 'Bochum'],
            'Baden-Württemberg': ['Stuttgart', 'Mannheim', 'Karlsruhe', 'Freiburg', 'Heidelberg', 'Ulm'],
            Berlin: ['Mitte', 'Charlottenburg', 'Kreuzberg', 'Prenzlauer Berg', 'Neukölln']
        },
        delivery: '2-4 business days',
        cost: 'Free on orders €45+'
    },
    France: {
        states: {
            'Île-de-France': ['Paris', 'Versailles', 'Boulogne-Billancourt', 'Montreuil', 'Argenteuil'],
            'Provence-Alpes-Côte d\'Azur': ['Marseille', 'Nice', 'Toulon', 'Aix-en-Provence', 'Cannes'],
            'Auvergne-Rhône-Alpes': ['Lyon', 'Grenoble', 'Saint-Étienne', 'Chambéry', 'Annecy'],
            'Nouvelle-Aquitaine': ['Bordeaux', 'Limoges', 'Poitiers', 'La Rochelle', 'Pau']
        },
        delivery: '2-4 business days',
        cost: 'Free on orders €45+'
    },
    Japan: {
        states: {
            Tokyo: ['Shibuya', 'Shinjuku', 'Minato', 'Chiyoda', 'Setagaya', 'Toshima'],
            Osaka: ['Osaka City', 'Sakai', 'Higashiosaka', 'Toyonaka', 'Suita'],
            Kyoto: ['Kyoto City', 'Uji', 'Kameoka', 'Nagaokakyo', 'Kyotanabe'],
            Kanagawa: ['Yokohama', 'Kawasaki', 'Sagamihara', 'Fujisawa', 'Yokosuka']
        },
        delivery: '2-3 business days',
        cost: 'Free on orders ¥5000+'
    }
};

// For index.html (first shipping checker)
function updateStates() {
    const country = document.getElementById('shipping-country').value;
    const stateSelect = document.getElementById('shipping-state');
    const districtSelect = document.getElementById('shipping-district');
    
    stateSelect.innerHTML = '<option value="">Select State</option>';
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    if (country && shippingData[country]) {
        Object.keys(shippingData[country].states).forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    }
}

function updateDistricts() {
    const country = document.getElementById('shipping-country').value;
    const state = document.getElementById('shipping-state').value;
    const districtSelect = document.getElementById('shipping-district');
    
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    if (country && state && shippingData[country] && shippingData[country].states[state]) {
        shippingData[country].states[state].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

function checkShippingAvailability() {
    const country = document.getElementById('shipping-country').value;
    const state = document.getElementById('shipping-state').value;
    const district = document.getElementById('shipping-district').value;
    const resultDiv = document.getElementById('shipping-result');
    
    if (!country || !state || !district) {
        showNotification('Please select all fields!');
        return;
    }
    
    const deliveryInfo = shippingData[country];
    document.getElementById('delivery-message').textContent = `We deliver to ${district}, ${state}, ${country}!`;
    document.getElementById('delivery-days').textContent = deliveryInfo.delivery;
    document.getElementById('shipping-cost').textContent = deliveryInfo.cost;
    
    resultDiv.classList.remove('hidden');
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// For index2.html (second shipping checker)
function updateStates2() {
    const country = document.getElementById('shipping-country-2').value;
    const stateSelect = document.getElementById('shipping-state-2');
    const districtSelect = document.getElementById('shipping-district-2');
    
    stateSelect.innerHTML = '<option value="">Select State</option>';
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    if (country && shippingData[country]) {
        Object.keys(shippingData[country].states).forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    }
}

function updateDistricts2() {
    const country = document.getElementById('shipping-country-2').value;
    const state = document.getElementById('shipping-state-2').value;
    const districtSelect = document.getElementById('shipping-district-2');
    
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    if (country && state && shippingData[country] && shippingData[country].states[state]) {
        shippingData[country].states[state].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

function checkShippingAvailability2() {
    const country = document.getElementById('shipping-country-2').value;
    const state = document.getElementById('shipping-state-2').value;
    const district = document.getElementById('shipping-district-2').value;
    const resultDiv = document.getElementById('shipping-result-2');
    
    if (!country || !state || !district) {
        showNotification('Please select all fields!');
        return;
    }
    
    const deliveryInfo = shippingData[country];
    document.getElementById('delivery-message-2').textContent = `We deliver to ${district}, ${state}, ${country}!`;
    document.getElementById('delivery-days-2').textContent = deliveryInfo.delivery;
    document.getElementById('shipping-cost-2').textContent = deliveryInfo.cost;
    
    resultDiv.classList.remove('hidden');
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// =====================================================
// PRODUCT DETAIL MODAL FUNCTIONS
// =====================================================

let currentProductId = null;
let userReviewRating = 0;

function openProductModal(productId) {
    currentProductId = productId;
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const details = getProductDetails(product.category);
    const modal = document.getElementById('product-detail-modal');
    
    // Calculate discount (random 10-40% for display)
    const discountPercent = Math.floor(Math.random() * 31) + 10; // 10-40%
    const originalPrice = (product.price / (1 - discountPercent / 100)).toFixed(2);
    
    // Populate modal content
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-category').textContent = product.category;
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-rating').innerHTML = '<i class="fas fa-star"></i>'.repeat(Math.round(product.rating));
    document.getElementById('modal-review-count').textContent = `(${details.reviews.length} reviews)`;
    document.getElementById('modal-product-price').textContent = `$${product.price}`;
    document.getElementById('modal-product-original-price').textContent = `$${originalPrice}`;
    document.getElementById('modal-product-discount').textContent = `-${discountPercent}% OFF`;
    document.getElementById('modal-product-description').textContent = details.description;
    
    // Populate features
    const featuresContainer = document.getElementById('modal-product-features');
    featuresContainer.innerHTML = details.features.map(feature => 
        `<li class="flex items-start gap-3 text-slate-600 dark:text-slate-300">
            <i class="fas fa-check text-green-500 mt-1"></i>
            <span>${feature}</span>
        </li>`
    ).join('');
    
    // Populate specifications
    const specsContainer = document.getElementById('modal-product-specs');
    specsContainer.innerHTML = Object.entries(details.specifications).map(([key, value]) => 
        `<div class="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg">
            <div class="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-1">${key}</div>
            <div class="text-slate-700 dark:text-slate-200 font-medium">${value}</div>
        </div>`
    ).join('');
    
    // Populate reviews
    const reviewsContainer = document.getElementById('modal-product-reviews');
    reviewsContainer.innerHTML = details.reviews.map(review => 
        `<div class="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                        ${review.user.charAt(0)}
                    </div>
                    <div>
                        <div class="font-semibold dark:text-white">${review.user}</div>
                        <div class="text-xs text-slate-500 dark:text-slate-400">${review.date}</div>
                    </div>
                </div>
                <div class="text-yellow-400 text-sm">
                    ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
                </div>
            </div>
            <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">${review.comment}</p>
        </div>`
    ).join('');
    
    // Load similar products
    loadSimilarProducts(product);
    
    // Reset review form
    resetReviewForm();
    
    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('product-detail-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    currentProductId = null;
}

function loadSimilarProducts(currentProduct) {
    const similarProducts = productsData
        .filter(p => p.id !== currentProduct.id && (p.category === currentProduct.category || Math.abs(p.price - currentProduct.price) < 100))
        .slice(0, 8);
    
    const container = document.getElementById('similar-products-grid');
    container.innerHTML = similarProducts.map(p => 
        `<div class="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition border border-slate-200 dark:border-slate-700 group cursor-pointer" onclick="openProductModal(${p.id})">
            <div class="relative h-32 bg-slate-100 dark:bg-slate-700 overflow-hidden">
                <img src="${p.image}" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
            </div>
            <div class="p-3">
                <h4 class="font-semibold text-sm dark:text-white mb-1 truncate" title="${p.name}">${p.name}</h4>
                <div class="flex items-center justify-between">
                    <span class="font-bold text-indigo-600 dark:text-indigo-400">$${p.price}</span>
                    <div class="text-yellow-400 text-xs">
                        ${'<i class="fas fa-star"></i>'.repeat(Math.round(p.rating))}
                    </div>
                </div>
            </div>
        </div>`
    ).join('');
}

function setReviewRating(rating) {
    userReviewRating = rating;
    const stars = document.querySelectorAll('.review-star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.remove('text-slate-300');
            star.classList.add('text-yellow-400');
        } else {
            star.classList.remove('text-yellow-400');
            star.classList.add('text-slate-300');
        }
    });
}

function resetReviewForm() {
    document.getElementById('review-name').value = '';
    document.getElementById('review-comment').value = '';
    userReviewRating = 0;
    const stars = document.querySelectorAll('.review-star');
    stars.forEach(star => {
        star.classList.remove('text-yellow-400');
        star.classList.add('text-slate-300');
    });
}

function submitReview() {
    const name = document.getElementById('review-name').value.trim();
    const comment = document.getElementById('review-comment').value.trim();
    
    if (!name) {
        showNotification('Please enter your name!', 'error');
        return;
    }
    
    if (userReviewRating === 0) {
        showNotification('Please select a rating!', 'error');
        return;
    }
    
    if (!comment) {
        showNotification('Please write a review!', 'error');
        return;
    }
    
    // Create new review
    const today = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dateStr = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
    
    const newReview = {
        user: name,
        rating: userReviewRating,
        date: dateStr,
        comment: comment
    };
    
    // Add to the beginning of reviews
    const reviewsContainer = document.getElementById('modal-product-reviews');
    const reviewHTML = `
        <div class="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 animate-fade-in-up">
            <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                        ${newReview.user.charAt(0)}
                    </div>
                    <div>
                        <div class="font-semibold dark:text-white">${newReview.user}</div>
                        <div class="text-xs text-slate-500 dark:text-slate-400">${newReview.date}</div>
                    </div>
                </div>
                <div class="text-yellow-400 text-sm">
                    ${'<i class="fas fa-star"></i>'.repeat(newReview.rating)}
                </div>
            </div>
            <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">${newReview.comment}</p>
        </div>
    `;
    
    reviewsContainer.insertAdjacentHTML('afterbegin', reviewHTML);
    
    // Update review count
    const currentCount = parseInt(document.getElementById('modal-review-count').textContent.match(/\d+/)[0]);
    document.getElementById('modal-review-count').textContent = `(${currentCount + 1} reviews)`;
    
    // Show success message
    showNotification('Thank you for your review!', 'success');
    
    // Reset form
    resetReviewForm();
    
    // Scroll to new review
    reviewsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function addToCartFromModal() {
    if (currentProductId) {
        addToCart(currentProductId);
    }
}

function buyNowFromModal() {
    if (currentProductId) {
        addToCart(currentProductId);
        setTimeout(() => {
            window.location.href = 'checkout.html';
        }, 500);
    }
}

// Close modal on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('product-detail-modal');
    if (modal && e.target === modal) {
        closeProductModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProductModal();
    }
});
