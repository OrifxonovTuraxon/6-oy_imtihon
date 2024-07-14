import React from 'react';
import believeImg from '../assets/believe_img.svg';
import freshImg from '../assets/fresh_img.svg';
import vegetablesImg from '../assets/vegetables_img.svg';

const Products = () => {
  const products = [
    { name: 'Broccoli', price: '$2.99', img: believeImg },
    { name: 'Bananas', price: '$1.99', img: freshImg },
    { name: 'Chia Seeds', price: '$4.99', img: vegetablesImg },
    { name: 'Orange', price: '$3.99', img: vegetablesImg },
    { name: 'Pistachios', price: '$6.99', img: freshImg },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold">Our Products</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <img src={product.img} alt={product.name} className="object-cover w-full h-40 mb-4 rounded-md"/>
              <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;

