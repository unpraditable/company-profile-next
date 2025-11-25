"use client";

import { useState } from "react";
import { CompletedProduct } from "../interfaces/ProductInterface";
import ProductPopup from "./ProductPopup";

interface ProductListClientProps {
  products: CompletedProduct[];
}

const ProductListClient: React.FC<ProductListClientProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] =
    useState<CompletedProduct | null>(null);

  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {products.map((product: CompletedProduct) => (
          <li
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
            key={product.id}
            onClick={() => setSelectedProduct(product)}
          >
            <img
              className="w-full h-50 object-cover "
              src={product.image ?? "-"}
              alt={product.name ?? `Product ke-${product.id}`}
            />
            <p className="text-sm font-bold text-center py-4">
              {product.name ?? "Unnamed Product"}
            </p>
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <ProductPopup
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </>
  );
};

export default ProductListClient;
