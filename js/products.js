// DOM Elements
const allProductsContainer = document.getElementById('all-products');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');

// Sample product data (same as in script.js)
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        description: "Premium wireless headphones with noise cancellation",
        image: "images/products/headphones.jpg",
        category: "electronics"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        description: "Feature-packed smartwatch with health monitoring",
        image: "images/products/smartwatch.jpg",
        category: "electronics"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 79.99,
        description: "Portable speaker with 20hr battery life",
        image: "images/products/speaker.jpg",
        category: "electronics"
    },
    {
        id: 4,
        name: "Laptop Backpack",
        price: 49.99,
        description: "Durable backpack with USB charging port",
        image: "images/products/backpack.jpg",
        category: "accessories"
    }
];

// Initialize the products page
function initProducts() {
    renderAllProducts();
    setupFilterListeners();
}

// Render all products
function renderAllProducts(filteredProducts = products) {
    allProductsContainer.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span class="product-price">R${product.price.toFixed(2)}</span>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Setup filter event listeners
function setupFilterListeners() {
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
}

// Filter products based on category and price
function filterProducts() {
    const category = categoryFilter.value;
    const priceRange = priceFilter.value;
    
    let filtered = products;
    
    if (category !== 'all') {
        filtered = filtered.filter(product => product.category === category);
    }
    
    if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        if (max) {
            filtered = filtered.filter(product => product.price >= min && product.price <= max);
        } else {
            filtered = filtered.filter(product => product.price >= min);
        }
    }
    
    renderAllProducts(filtered);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initProducts); 