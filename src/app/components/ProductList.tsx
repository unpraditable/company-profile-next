import { use } from "react";
import {
  CompletedProduct,
  Product,
  ImageData,
} from "../interfaces/ProductInterface";

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

  const completedProductData: CompletedProduct[] = productData.map(
    (product: Product) => ({
      ...product,
      image: imageMap.get(product.id) || null,
    })
  );

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {completedProductData.map((product: CompletedProduct) => (
        <li
          className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
          key={product.id}
        >
          <img
            className="w-full h-50 object-cover "
            src={product.image ?? "-"}
            alt={product.name}
          />
          <p className="font-bold text-center py-4">
            {product.name ?? "No Product Name Available"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
