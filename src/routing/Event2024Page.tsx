import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Navigationbar } from "../components/Navigationbar";
import { BlockFooter } from "../components/BlockFooter";
import BlockHeroFlip from "../components/BlockHeroFlip";
// import { BlockHero2024 } from "../components/BlockHero2024";
// import { PageTransition } from "../components/PageTransition";
// import { PageTransition2 } from "../components/PageTransition2";

const Event2024Page: React.FC = () => {
  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

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
      <BlockHeroFlip />
      {/* <BlockHero2024 /> */}
      <BlockFooter />
      </motion.div>
      </>
  );
};

// export default PageTransition(Event2024Page);
// export default PageTransition2(Event2024Page);
export default Event2024Page;
