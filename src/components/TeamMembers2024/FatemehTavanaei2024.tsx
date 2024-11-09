import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { fatemehBG2024, fatemehBadge } from "../../assets";
import { GiMining } from "react-icons/gi";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";

const FatemehTavanaei2024: React.FC = () => {
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
        <TeamProfile2024
          firstName={t("fatemeh")}
          lastName={t("tavanaei")}
          fullName={t("fatemehTavanaei")}
          title={t("fatemehTitle2024")}
          role={t("coOrganizer")}
          imageSrc={fatemehBG2024}
          badgeSrc={fatemehBadge}
          linkedinHref="https://ca.linkedin.com/in/fatemeh-tavanaei-sereshgi-394a7957"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/38189071/about"
          quoteText={t("fatemehQuote2024")}
          icon={GiMining}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(FatemehTavanaei);
export default FatemehTavanaei2024;
