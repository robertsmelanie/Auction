// import ProductCard from '../components/ProductCard';
import '../styles/Components.css';

const products = [
  {
    image: '/images/dog1.jpg',
    name: 'Golden Retriever',
    description: 'Friendly and loyal dog looking for a loving home.'
  },
  {
    image: '/images/cat1.jpg',
    name: 'Tabby Cat',
    description: 'Sweet and curious tabby ready for adoption.'
  },
  // Add more pets here...
];

function ProductCard() {
  return (
    <div>
      <section>
        <h2>Welcome to Our Pet Store!</h2>
        <p>Your one-stop shop for all things pet-related.</p>
      </section>

      <section className="products">
        {products.map((pet, index) => (
          <ProductCard
            key={index}
            image={pet.image}
            name={pet.name}
            description={pet.description}
          />
        ))}
      </section>
    </div>
  );
}
export default ProductCard;