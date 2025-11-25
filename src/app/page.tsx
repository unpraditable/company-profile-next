import { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="container justify-center mx-auto">
        <About />
        <section className="product-section">
          <h2 className="text-center font-bold text-2xl my-4">
            Available Products
          </h2>
          <Suspense
            fallback={<p className="text-center">Loading products...</p>}
          >
            <ProductList />
          </Suspense>
        </section>
      </main>
    </>
  );
}
