import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { BlockFeatures } from "../components/BlockFeatures";
import { BlockFooter } from "../components/BlockFooter"
import { BlockHeroHome } from "../components/BlockHeroHome";
import { BlockStatistics } from "../components/BlockStatistics";
import { Navigationbar } from "../components/Navigationbar";
import { ParallaxSection } from "../components/ParallaxSection";
import TicketCard from "../components/TicketCard";
import BlockSponsors2024 from "../components/BlockSponsors2024";
import BlockHeroHomeFinal from "../components/BlockHeroHomeFinal";
import BlockDivider from "../components/BlockDivider";
import MarqueeComponent from "../components/MarqueeComponent";
// import { PageTransition } from "../components/PageTransition";
// import { PageTransition2 } from "../components/PageTransition2";

const HomePage: React.FC = () => {


  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  useEffect(() => {
    // Check if the page has already been refreshed in this session
    const hasRefreshed = sessionStorage.getItem("hasRefreshed");

    if (!hasRefreshed) {
      // Reload the page and set the flag in sessionStorage to avoid infinite reloads
      sessionStorage.setItem("hasRefreshed", "true");
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <Navigationbar />
        <BlockHeroHomeFinal />
        <BlockDivider />
        <BlockHeroHome />
        <TicketCard />
        <MarqueeComponent />
        <BlockStatistics />
        <ParallaxSection />
        <BlockFeatures />
        <BlockSponsors2024 />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(HomePage);
// export default PageTransition2(HomePage);
export default HomePage;
