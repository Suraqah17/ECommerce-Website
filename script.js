// Example product data (replace this with your actual data)
const products = [
    { id: 1, name: 'Chunky trainers', price: 75, image: 'Photo1.jpg' },
    { id: 2, name: 'Trainers', price: 95, image: 'Photo2.jpg' },
    { id: 3, name: 'Slip-on trainers', price: 80, image: 'Photo3.jpg' },
    { id: 4, name: 'Chunky trainers', price: 55, image: 'Photo4.webp' },
    { id: 5, name: 'Chelsea boots', price: 100, image: 'Photo5.webp' },
    { id: 6, name: 'Chunky hi-tops', price: 60, image: 'Photo6.webp' },
    { id: 7, name: 'Chunky Derby shoes', price: 200, image: 'Photo7.webp' },
    { id: 8, name: 'Embroidered-motif slip-on trainers', price: 125, image: 'Photo8.webp' },
    { id: 9, name: 'Trainers', price: 150, image: 'Photo9.webp' },
    { id: 10, name: 'Chunky trainers', price: 300, image: 'Photo10.webp' },
];

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;
    card.appendChild(image);

    const name = document.createElement('h2');
    name.textContent = product.name;
    card.appendChild(name);

    const price = document.createElement('p');
    price.textContent = `$${product.price.toFixed(2)}`;
    card.appendChild(price);

    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.addEventListener('click', () => addToCart(product));
    card.appendChild(addToCartBtn);

    return card;
}

function addToCart(product) {
    // Implement your cart logic here (e.g., update cart items, show cart total, etc.)
    console.log(`Added ${product.name} to the cart.`);
}

function init() {
    const productsContainer = document.querySelector('.products');
    products.forEach(product => {
        const card = createProductCard(product);
        productsContainer.appendChild(card);
    });
}

init();
