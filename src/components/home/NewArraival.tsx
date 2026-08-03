"use client";
const sliderImages = [
  "/images/tsirtImages/nissan12.jpeg",
  "/images/tsirtImages/nissan12.jpeg",
  "/images/tsirtImages/nissan12.jpeg",
  "/images/tsirtImages/nissan12.jpeg",
  "/images/tsirtImages/nissan12.jpeg",
  "/images/tsirtImages/nissan12.jpeg",
  "/images/tsirtImages/nissan12.jpeg",
];
import ProductCard from "../products/ProductCard";
import SectionHeader from "../common/SectionHeader";

const NewArraival = () => {
  return (
    <div>
      <SectionHeader
        badge="New Arrivals"
        title="Discover Fresh Styles"
        description=" Explore our latest premium collection crafted for everyday comfort
            timeless style, and unmatched quality."
      />

      <div className="mt-6 grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-2  px-2">
        {sliderImages?.map((image, index) => (
          <ProductCard
            key={String(index)}
            id={String(index)}
            title={`Premium T-Shirt ${index + 1}`}
            image={image}
            price={1090}
            oldPrice={1490}
            discount={27}
            save={400}
          />
        ))}
      </div>
    </div>
  );
};

export default NewArraival;
