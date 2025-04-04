import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
    const products = [
        { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to HnaKids</h1>
            <ProductList products={products} />
        </div>
    );
};

export default Home;
