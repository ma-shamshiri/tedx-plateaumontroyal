import React, { useEffect, useState } from "react";
import { BlockFooter } from "../components/BlockFooter";
import { motion } from "framer-motion";
import { Navigationbar } from "../components/Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../components/PageTransition";
import BlockSpeakerGrid2024 from "../components/BlockSpeakerGrid2024";

const SpeakersPage: React.FC = () => {
  const { t } = useTranslation();

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
        <BlockSpeakerGrid2024 />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(SpeakersPage);
export default SpeakersPage;
