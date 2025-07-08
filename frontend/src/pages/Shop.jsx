import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Components.css';
import FooterButtons from '../components/Footerbutton';

const shopItems = [
    {
        image: '/images/bird1.jpg',
        name: 'Parakeet',
        description: 'Colorful and talkative parakeet ready for a new home.'
    },
    {
        image: '/images/fish1.jpg',
        name: 'Goldfish',
        description: 'Low-maintenance and peaceful aquatic pet.'
    },
    {
        image: '/images/hamster1.jpg',
        name: 'Hamster',
        description: 'Small and playful furry friend.'
    }
];

function Shop() {
    return (
        <>
            <Navbar />
            <main>
                <section className="products">
                    {shopItems.map((item, index) => (
                        <ProductCard
                            key={index}
                            image={item.image}
                            name={item.name}
                            description={item.description}
                        />
                    ))}
                </section>
            </main>


            <Footer />
        </>




    );
}

export default Shop;