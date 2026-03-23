import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

//get List of 5 Products
app.get('/api/products', (req, res) => {
    console.log('Request received for /api/products');
    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'This is the description for Product 1',
            price: 10.99,
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'This is the description for Product 2',
            price: 19.99,
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'This is the description for Product 3',
            price: 29.99,
        },
        {
            id: 4,
            name: 'Product 4',
            description: 'This is the description for Product 4',
            price: 39.99,
        },
        {
            id: 5,
            name: 'Product 5',
            description: 'This is the description for Product 5',
            price: 49.99,
        }
    ];
    res.json(products);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});