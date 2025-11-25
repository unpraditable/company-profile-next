import Image from "next/image";
import Products from "./components/products";
import { use } from "react";
import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="container justify-center mx-auto">
        <h2 className="text-center font-bold text-2xl my-4">
          Available Products
        </h2>
        <Products />
      </main>
    </>
  );
}
