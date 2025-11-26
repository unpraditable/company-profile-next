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
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 "
            key={product.id}
          >
            <button
              className="cursor-pointer w-full"
              onClick={() => setSelectedProduct(product)}
            >
              {product.image ? (
                <img
                  className="w-full h-50 object-cover"
                  src={product.image}
                  alt={
                    product.name
                      ? `This is an image of ${product.name} in a Product List`
                      : `This is an image of Product id ${product.id} in a Product List`
                  }
                />
              ) : (
                <div className="w-full h-50 bg-gray-200 flex items-center justify-center">
                  No Image Available
                </div>
              )}
              <p className="text-sm font-bold text-center py-4">
                {`#${product.id} - ${product.name ?? "Unnamed Product"}`}
              </p>
            </button>
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
