import ExploreCollection from "@/components/home/ExploreCollection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import NewArraival from "@/components/home/NewArraival";
import Reviews from "@/components/home/Reviews";
import TopSellers from "@/components/home/TopSellers";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <HeroSection />
      <NewArraival />
      <FeaturedProducts />
      <TopSellers />
      <ExploreCollection />
      <Reviews />
    </div>
  );
};
export default Page;
