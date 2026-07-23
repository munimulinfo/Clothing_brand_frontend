import SectionHeader from "../common/SectionHeader";
import AutoSlider from "../testingPhaseComponent/AutoSlider";

const TopSellers = () => {
  return (
    <div>
      <SectionHeader
        badge="TOP SELLERS"
        title="Customer Favorites"
        description="Explore our best-selling pieces, loved by thousands for their exceptional comfort, premium quality, and timeless style."
      />
      <AutoSlider />
    </div>
  );
};

export default TopSellers;
