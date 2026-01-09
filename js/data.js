// Data Source for ByWith V4

const productsData = [
    // Tech Category
    { id: 1, name: "Analytics Pro Suite", category: "Software", price: 99.00, rating: 5, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=60" },
    { id: 2, name: "Cloud Infrastructure", category: "Services", price: 199.00, rating: 5, image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=500&q=60" },
    { id: 3, name: "Secure Gateway Router", category: "Hardware", price: 149.00, rating: 4, image: "https://images.unsplash.com/photo-1563770095128-db60378218ce?auto=format&fit=crop&w=500&q=60" },
    { id: 4, name: "AI Assistant Bot", category: "Software", price: 299.00, rating: 5, image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=500&q=60" },
    { id: 5, name: "CRM Enterprise", category: "Software", price: 79.00, rating: 4, image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=500&q=60" },
    { id: 6, name: "Dev Ops Toolset", category: "Software", price: 49.00, rating: 5, image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=500&q=60" },
    { id: 7, name: "Mechanical Keyboard", category: "Hardware", price: 120.00, rating: 5, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=500&q=60" },
    { id: 8, name: "Curved Monitor 4K", category: "Hardware", price: 450.00, rating: 5, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=60" },
    { id: 9, name: "Wireless Headset", category: "Hardware", price: 89.00, rating: 4, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=60" },
    { id: 10, name: "Ergonomic Chair", category: "Furniture", price: 250.00, rating: 4, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60" },
    { id: 11, name: "Smart Watch V5", category: "Wearables", price: 199.00, rating: 5, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60" },
    { id: 12, name: "Laptop Pro X", category: "Hardware", price: 1299.00, rating: 5, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=60" },
    { id: 13, name: "Portable SSD 1TB", category: "Hardware", price: 120.00, rating: 4, image: "https://images.unsplash.com/photo-1531492326715-dd743f458529?auto=format&fit=crop&w=500&q=60" },
    { id: 14, name: "Webcam 4K", category: "Hardware", price: 99.00, rating: 4, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=60" },
    { id: 15, name: "Smart Lamp", category: "Accessories", price: 45.00, rating: 3, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=60" },

    // Fashion/Lifestyle Category (For Home 2)
    { id: 16, name: "Classic Denim Jacket", category: "Fashion", price: 59.00, rating: 4, image: "https://images.unsplash.com/photo-1576995853123-5a297da74241?auto=format&fit=crop&w=500&q=60" },
    { id: 17, name: "Urban Sneakers", category: "Fashion", price: 89.00, rating: 5, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=500&q=60" },
    { id: 18, name: "Leather Tote Bag", category: "Fashion", price: 120.00, rating: 5, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=500&q=60" },
    { id: 19, name: "Summer Sunglasses", category: "Accessories", price: 35.00, rating: 4, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=60" },
    { id: 20, name: "Minimalist Watch", category: "Accessories", price: 150.00, rating: 5, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=60" },

    // More Generic Items to reach 50+
    ...Array.from({ length: 30 }, (_, i) => ({
        id: 21 + i,
        name: `Product Item ${21 + i}`,
        category: i % 2 === 0 ? "Services" : "Hardware",
        price: (Math.random() * 200 + 20).toFixed(2),
        rating: Math.floor(Math.random() * 3) + 3,
        image: `https://images.unsplash.com/photo-${1550000000000 + i}?auto=format&fit=crop&w=500&q=60` // Random unsplash-like URL pattern
    }))
];

// Fix images for the generated ones to be valid random placeholders
productsData.slice(20).forEach((p, i) => {
    p.image = `https://picsum.photos/seed/${p.id}/500/500`;
});

const leadersData = [
    { name: "David Chen", role: "CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=60" },
    { name: "Sarah Johnson", role: "CTO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=60" },
    { name: "Michael Ross", role: "product Head", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=60" },
    { name: "Emily Davis", role: "CMO", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=60" },
    { name: "James Wilson", role: "COO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=60" },
    { name: "Lisa Wong", role: "Head of Design", img: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?auto=format&fit=crop&w=500&q=60" }
];

const partnersData = [
    { name: "TechCorp", logo: "fab fa-google" },
    { name: "Innovate", logo: "fab fa-aws" },
    { name: "GlobalSol", logo: "fab fa-microsoft" },
    { name: "FutureWorks", logo: "fab fa-apple" },
    { name: "StartUp Inc", logo: "fab fa-stripe" },
    { name: "GreenEnergy", logo: "fab fa-envira" },
    { name: "SecureSys", logo: "fas fa-shield-alt" },
    { name: "CloudNine", logo: "fas fa-cloud" }
];

// Product Detail Templates (5 templates mapped by category)
const productDetailTemplates = {
    Software: {
        description: "Experience the power of cutting-edge software engineering. Our software solutions are built with scalability, security, and performance in mind. Utilizing the latest technologies and best practices, this product delivers exceptional results for businesses of all sizes. With seamless integration capabilities and intuitive user interfaces, you'll be up and running in no time.",
        features: [
            "Cloud-based architecture for maximum reliability",
            "Real-time data synchronization across all devices",
            "Advanced security with end-to-end encryption",
            "24/7 customer support and regular updates",
            "Customizable dashboard and reporting tools",
            "API access for seamless third-party integrations"
        ],
        specifications: {
            "Platform Compatibility": "Windows, macOS, Linux, Web",
            "System Requirements": "4GB RAM minimum, 8GB recommended",
            "License Type": "Subscription-based (Monthly/Yearly)",
            "Language Support": "English, Spanish, French, German, Japanese",
            "Storage": "Cloud-based with unlimited storage",
            "Updates": "Automatic updates included"
        },
        reviews: [
            { user: "Alex Thompson", rating: 5, date: "Nov 15, 2025", comment: "Absolutely fantastic software! The interface is intuitive and the performance is outstanding. Worth every penny." },
            { user: "Maria Garcia", rating: 5, date: "Nov 10, 2025", comment: "This has transformed how our team works. The collaboration features are top-notch and support is always helpful." },
            { user: "James Wilson", rating: 4, date: "Nov 5, 2025", comment: "Great product overall. A few minor bugs here and there, but the team is quick to fix them. Highly recommend!" },
            { user: "Sophie Chen", rating: 5, date: "Oct 28, 2025", comment: "Best investment we've made this year. The automation features save us hours every week." }
        ]
    },
    Hardware: {
        description: "Premium hardware engineered for performance and durability. Each component is carefully selected and tested to ensure maximum reliability and longevity. Whether you're a professional or enthusiast, this hardware delivers the power you need with the quality you deserve. Built with premium materials and backed by comprehensive warranty coverage.",
        features: [
            "Premium build quality with aircraft-grade materials",
            "Advanced cooling system for optimal performance",
            "Plug-and-play installation with zero configuration",
            "Energy-efficient design reduces power consumption",
            "Extended warranty coverage (2-3 years)",
            "Universal compatibility with major brands"
        ],
        specifications: {
            "Dimensions": "Varies by product",
            "Weight": "Lightweight and portable design",
            "Material": "Premium aluminum and reinforced plastic",
            "Connectivity": "USB-C, Bluetooth 5.2, Wi-Fi 6",
            "Power": "Energy Star certified",
            "Warranty": "2-year manufacturer warranty"
        },
        reviews: [
            { user: "David Park", rating: 5, date: "Nov 20, 2025", comment: "Exceptional build quality! Feels premium and performs even better. Highly satisfied with this purchase." },
            { user: "Emma Rodriguez", rating: 5, date: "Nov 12, 2025", comment: "This hardware exceeded my expectations. Setup was effortless and it works flawlessly." },
            { user: "Michael Lee", rating: 4, date: "Nov 8, 2025", comment: "Great product with solid performance. The only downside is the price, but you get what you pay for." },
            { user: "Rachel Kim", rating: 5, date: "Oct 30, 2025", comment: "Perfect for my needs. The quality is outstanding and customer service was very helpful." }
        ]
    },
    Services: {
        description: "Professional services tailored to your business needs. Our expert team brings years of industry experience to deliver solutions that drive real results. From consultation to implementation and ongoing support, we're with you every step of the way. Flexible service packages ensure you get exactly what you need without paying for what you don't.",
        features: [
            "Dedicated account manager for personalized support",
            "Flexible service packages (Basic, Pro, Enterprise)",
            "SLA-backed uptime guarantee (99.9%)",
            "Expert consultation included in all plans",
            "Monthly progress reports and analytics",
            "Scalable solutions that grow with your business"
        ],
        specifications: {
            "Service Type": "Managed cloud services",
            "Response Time": "< 1 hour for critical issues",
            "Availability": "24/7/365 monitoring",
            "Team Size": "Dedicated team of 3-10 experts",
            "Contract Length": "Monthly or annual billing",
            "Cancellation": "30-day notice period"
        },
        reviews: [
            { user: "Jennifer Adams", rating: 5, date: "Nov 18, 2025", comment: "Outstanding service! The team is professional, responsive, and always goes the extra mile." },
            { user: "Robert Martinez", rating: 5, date: "Nov 14, 2025", comment: "We've been using this service for 6 months now. Couldn't be happier with the results and support." },
            { user: "Lisa Patel", rating: 4, date: "Nov 7, 2025", comment: "Very good service overall. Communication could be better, but the quality of work is excellent." },
            { user: "Kevin Brown", rating: 5, date: "Nov 1, 2025", comment: "Highly recommended! They understand our business needs and deliver consistently." }
        ]
    },
    Fashion: {
        description: "Style meets comfort in this carefully curated fashion piece. Crafted from premium materials with attention to every detail, this item combines contemporary design with timeless appeal. Whether you're dressing up for a special occasion or keeping it casual, this versatile piece fits seamlessly into any wardrobe. Sustainably sourced materials and ethical manufacturing practices make this a choice you can feel good about.",
        features: [
            "Premium quality fabric with superior comfort",
            "Modern design that never goes out of style",
            "Available in multiple sizes and colors",
            "Easy care instructions for long-lasting wear",
            "Sustainably sourced and ethically manufactured",
            "Perfect for casual and formal occasions"
        ],
        specifications: {
            "Material": "Premium cotton blend / Genuine leather",
            "Sizes Available": "XS, S, M, L, XL, XXL",
            "Care Instructions": "Machine washable / Hand clean recommended",
            "Origin": "Ethically manufactured",
            "Colors": "Multiple color options available",
            "Fit": "Regular / Slim / Relaxed fit options"
        },
        reviews: [
            { user: "Amanda Foster", rating: 5, date: "Nov 22, 2025", comment: "Love this! The quality is amazing and it fits perfectly. Will definitely buy more from this brand." },
            { user: "Chris Taylor", rating: 5, date: "Nov 16, 2025", comment: "Excellent purchase! The material feels premium and the design is exactly what I was looking for." },
            { user: "Nina Sharma", rating: 4, date: "Nov 11, 2025", comment: "Great product! Only wish there were more color options. Quality is top-notch though." },
            { user: "Daniel White", rating: 5, date: "Nov 3, 2025", comment: "Perfect! Comfortable, stylish, and well-made. Highly recommend to anyone looking for quality fashion." }
        ]
    },
    Accessories: {
        description: "The perfect finishing touch to complete your style. This accessory combines functionality with fashion-forward design. Made with high-quality materials and expert craftsmanship, it's built to last while adding that special something to your daily routine. Whether you're treating yourself or looking for the perfect gift, this accessory delivers style and substance in equal measure.",
        features: [
            "Elegant design that complements any style",
            "Durable construction for everyday use",
            "Compact and portable for convenience",
            "Gift-ready packaging included",
            "Multiple finish options available",
            "Makes an excellent gift for any occasion"
        ],
        specifications: {
            "Material": "Stainless steel / Premium leather / High-grade plastic",
            "Dimensions": "Compact and portable",
            "Weight": "Lightweight design",
            "Finish Options": "Matte, Glossy, Metallic",
            "Packaging": "Premium gift box included",
            "Maintenance": "Low maintenance, easy to clean"
        },
        reviews: [
            { user: "Sarah Mitchell", rating: 5, date: "Nov 24, 2025", comment: "Beautiful accessory! The quality exceeded my expectations and it looks even better in person." },
            { user: "Tom Anderson", rating: 4, date: "Nov 19, 2025", comment: "Really nice product. Great quality and the packaging made it perfect as a gift." },
            { user: "Jessica Lu", rating: 5, date: "Nov 13, 2025", comment: "Absolutely love it! It's become my go-to accessory. Stylish and well-made." },
            { user: "Brian Scott", rating: 5, date: "Nov 6, 2025", comment: "Excellent craftsmanship! Worth the price and I've received many compliments." }
        ]
    },
    Furniture: {
        description: "Transform your space with this expertly designed furniture piece. Combining form and function, it offers both aesthetic appeal and practical utility. Constructed from premium materials with reinforced joints and quality hardware, this furniture is built to withstand daily use while maintaining its beauty. Easy assembly and versatile design make it perfect for any room in your home or office.",
        features: [
            "Premium materials with reinforced construction",
            "Ergonomic design for maximum comfort",
            "Easy assembly with included tools and instructions",
            "Versatile design fits any decor style",
            "Heavy-duty construction supports daily use",
            "5-year structural warranty included"
        ],
        specifications: {
            "Material": "Solid wood / High-grade steel / Premium upholstery",
            "Dimensions": "Detailed measurements in product images",
            "Weight Capacity": "Up to 300 lbs",
            "Assembly": "Required - approximately 30-60 minutes",
            "Warranty": "5-year structural, 2-year fabric",
            "Care": "Easy to clean and maintain"
        },
        reviews: [
            { user: "Patricia Green", rating: 5, date: "Nov 21, 2025", comment: "Amazing quality! The furniture is sturdy, comfortable, and looks fantastic in my living room." },
            { user: "Mark Johnson", rating: 4, date: "Nov 17, 2025", comment: "Very happy with this purchase. Assembly was straightforward and the quality is excellent." },
            { user: "Linda Chen", rating: 5, date: "Nov 9, 2025", comment: "Best furniture purchase I've made! Comfortable, durable, and exactly as described." },
            { user: "Steven Davis", rating: 5, date: "Nov 2, 2025", comment: "Outstanding! Worth every dollar. The build quality is exceptional and it's incredibly comfortable." }
        ]
    },
    Wearables: {
        description: "Stay connected and track your wellness with this advanced wearable technology. Packed with sensors and smart features, it seamlessly integrates into your lifestyle while keeping you informed and motivated. From fitness tracking to smart notifications, this device does it all while looking great on your wrist. Long battery life and water resistance make it perfect for active lifestyles.",
        features: [
            "Advanced health and fitness tracking sensors",
            "Smart notifications for calls, messages, and apps",
            "Extended battery life (5-7 days per charge)",
            "Water-resistant design (IP68 rating)",
            "Compatible with iOS and Android devices",
            "Customizable watch faces and bands"
        ],
        specifications: {
            "Display": "AMOLED touchscreen, always-on display",
            "Battery Life": "5-7 days typical use",
            "Sensors": "Heart rate, SpO2, GPS, accelerometer, gyroscope",
            "Connectivity": "Bluetooth 5.0, Wi-Fi",
            "Water Resistance": "5ATM (50 meters)",
            "Compatibility": "iOS 13+ and Android 8.0+"
        },
        reviews: [
            { user: "Carlos Rivera", rating: 5, date: "Nov 23, 2025", comment: "Perfect wearable! Tracks everything I need and the battery lasts for days. Very impressed." },
            { user: "Emily Turner", rating: 5, date: "Nov 15, 2025", comment: "Love this device! It's helped me stay active and the features are incredible for the price." },
            { user: "Ryan Cooper", rating: 4, date: "Nov 10, 2025", comment: "Great wearable with lots of features. Wish the app was a bit more intuitive, but overall very satisfied." },
            { user: "Michelle Yang", rating: 5, date: "Nov 4, 2025", comment: "Best wearable I've owned! Accurate tracking, comfortable to wear, and looks stylish." }
        ]
    }
};

// Function to get product details by category with fallback
function getProductDetails(category) {
    return productDetailTemplates[category] || productDetailTemplates.Accessories;
}
