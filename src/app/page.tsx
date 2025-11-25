import Products from "./components/Products";
import { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import Description from "./components/Description";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="container justify-center mx-auto">
        <Description />
        <section className="product-section">
          <h2 className="text-center font-bold text-2xl my-4">
            Available Products
          </h2>
          <Suspense
            fallback={<p className="text-center">Loading products...</p>}
          >
            <Products />
          </Suspense>
        </section>
      </main>
    </>
  );
}
