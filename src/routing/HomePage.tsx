import React, { useEffect, useState } from "react";
import { BlockFeatures } from "../components/BlockFeatures";
import { BlockFooter } from "../components/BlockFooter"
import { BlockHeroHome } from "../components/BlockHeroHome";
import { BlockStatistics } from "../components/BlockStatistics";
import { Navigationbar } from "../components/Navigationbar";
// import { BlockScrollingText } from "../components/BlockScrollingText";
import { ParallaxSection } from "../components/ParallaxSection";
// import { PageTransition } from "../components/PageTransition";
// import { PageTransition2 } from "../components/PageTransition2";
// import NeoculturalCouture from "../components/NeoculturalCouture";
// import BlockHeroMosaic from "../components/BlockHeroMosaic";
import TicketCard from "../components/TicketCard";
import BlockSponsors2024 from "../components/BlockSponsors2024";

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {/* <Header /> */}
      <Navigationbar />
      {/* <NeoculturalCouture /> */}
      {/* <BlockHeroMosaic/> */}
      <BlockHeroHome />
      <TicketCard />
      <BlockStatistics />
      <ParallaxSection />
      {/* <BlockScrollingText /> */}
      <BlockFeatures />
      <BlockSponsors2024 />
      <BlockFooter />
    </>
  );
};

// export default PageTransition(HomePage);
// export default PageTransition2(HomePage);
export default HomePage;
