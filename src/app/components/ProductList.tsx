import { use } from "react";
import {
  CompletedProduct,
  Product,
  ImageData,
} from "../interfaces/ProductInterface";
import ProductListClient from "./ProductList.client";

const ProductList = () => {
  async function getProductData() {
    const res = await fetch("https://www.giovankov.com/api/product.json");
    if (!res.ok) {
      throw new Error("Failed to fetch product data");
    }
    return res.json();
  }

  async function getProductImageData() {
    const res = await fetch("https://www.giovankov.com/api/image.json");
    if (!res.ok) {
      throw new Error("Failed to fetch image data");
    }
    return res.json();
  }

  const { data: productData } = use(getProductData());
  const { data: imageData } = use(getProductImageData());

  const imageMap = new Map<string, string>();

  imageData.forEach((imageGroup: ImageData) => {
    imageGroup.id.forEach((id: string) => {
      imageMap.set(id, imageGroup.image);
    });
  });

  const completedProductList: CompletedProduct[] = productData.map(
    (product: Product) => ({
      ...product,
      image: imageMap.get(product.id) || null,
    })
  );

  return <ProductListClient products={completedProductList} />;
};

export default ProductList;
