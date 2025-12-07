// Data Source for ByWith V4

const productsData = [
    // Tech Category
    { id: 1, name: "Analytics Pro Suite", category: "Software", price: 99.00, rating: 5, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=60" },
    { id: 2, name: "Cloud Infrastructure", category: "Services", price: 199.00, rating: 5, image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=500&q=60" },
    { id: 3, name: "Secure Gateway Router", category: "Hardware", price: 149.00, rating: 4, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=60" },
    { id: 4, name: "AI Assistant Bot", category: "Software", price: 299.00, rating: 5, image: "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?auto=format&fit=crop&w=500&q=60" },
    { id: 5, name: "CRM Enterprise", category: "Software", price: 79.00, rating: 4, image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=500&q=60" },
    { id: 6, name: "Dev Ops Toolset", category: "Software", price: 49.00, rating: 5, image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=500&q=60" },
    { id: 7, name: "Mechanical Keyboard", category: "Hardware", price: 120.00, rating: 5, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=500&q=60" },
    { id: 8, name: "Curved Monitor 4K", category: "Hardware", price: 450.00, rating: 5, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=60" },
    { id: 9, name: "Wireless Headset", category: "Hardware", price: 89.00, rating: 4, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=60" },
    { id: 10, name: "Ergonomic Chair", category: "Furniture", price: 250.00, rating: 4, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60" },
    { id: 11, name: "Smart Watch V5", category: "Wearables", price: 199.00, rating: 5, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60" },
    { id: 12, name: "Laptop Pro X", category: "Hardware", price: 1299.00, rating: 5, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=60" },
    { id: 13, name: "Portable SSD 1TB", category: "Hardware", price: 120.00, rating: 4, image: "https://images.unsplash.com/photo-1597872250969-96690709d3da?auto=format&fit=crop&w=500&q=60" },
    { id: 14, name: "Webcam 4K", category: "Hardware", price: 99.00, rating: 4, image: "https://images.unsplash.com/photo-1587826338608-0567a26426dd?auto=format&fit=crop&w=500&q=60" },
    { id: 15, name: "Smart Lamp", category: "Accessories", price: 45.00, rating: 3, image: "https://images.unsplash.com/photo-1543512214-318c77a07293?auto=format&fit=crop&w=500&q=60" },

    // Fashion/Lifestyle Category (For Home 2)
    { id: 16, name: "Classic Denim Jacket", category: "Fashion", price: 59.00, rating: 4, image: "https://images.unsplash.com/photo-1523297928267-ade70613d073?auto=format&fit=crop&w=500&q=60" },
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
    { name: "Emily Davis", role: "CMO", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=60" },
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
