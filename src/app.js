document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Espresso', img: 'espresso.jpg', price: 35000},
            { id: 1, name: 'Cappucino', img: 'cappucino.jpg', price: 35000},
            { id: 1, name: 'Mocha', img: 'mocha.jpg', price: 35000},
            { id: 1, name: 'Latte', img: 'latte.jpg', price: 35000},
            { id: 1, name: 'flate White', img: 'flate-white.jpg', price: 35000}
        ],
    }));
}); 