import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const ProductsPage: React.FC = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
