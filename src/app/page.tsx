import { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="container justify-center mx-auto">
        <section id="about-section" className="description container px-4">
          <h2 className="text-center font-bold text-xl lg:text-2xl my-8">
            What We Offer
          </h2>
          <About />
        </section>
        <section className="product-section container px-4">
          <h2 className="text-center font-bold text-xl lg:text-2xl my-8">
            Available Products
          </h2>
          <Suspense
            fallback={<p className="text-center">Loading products...</p>}
          >
            <ProductList />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
}
