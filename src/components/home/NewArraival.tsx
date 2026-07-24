"use client";
const sliderImages = [
  "/images/tsirtImages/tsirt01.png",
  "/images/tsirtImages/Screenshot_12.png",
  "/images/tsirtImages/Screenshot_13.png",
  "/images/tsirtImages/Screenshot_14.png",
  "/images/tsirtImages/Screenshot_15.png",
  "/images/tsirtImages/Screenshot_16.png",
  "/images/tsirtImages/Screenshot_17.png",
  "/images/tsirtImages/Screenshot_18.png",
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

      <div className="mt-6 grid lg:grid-cols-4 grid-cols-2 lg:gap-4 gap-2 px-2">
        {sliderImages?.map((image, index) => (
          <ProductCard
            key={image}
            id={`${index + 1}`}
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
