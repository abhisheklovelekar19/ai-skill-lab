import Hero from "./components/Hero";
import WhoThisIsForSection from "./components/WhoThisIsForSection";
import ProductsSection from "./components/ProductsSection";
import WhatYouLearnSection from "./components/WhatYouLearnSection";
import ValueSection from "./components/ValueSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoThisIsForSection />
      <ProductsSection />
      <WhatYouLearnSection />
      <ValueSection />
      <CTASection />
    </>
  );
}