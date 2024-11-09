import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { GiElectricalResistance } from "react-icons/gi";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { reihanehBG2024 } from "../../assets";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";

const ReihanehGhoroghchian2024: React.FC = () => {
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
          firstName={t("reihaneh")}
          lastName={t("ghoroghchian")}
          fullName={t("reihanehGhoroghchian")}
          title={t("reihanehTitle2024")}
          role={t("audienceExperienceDesigner")}
          imageSrc={reihanehBG2024}
          badgeSrc={reihanehBG2024}
          linkedinHref="https://ca.linkedin.com/in/reihaneh-ghoroghchian-636661182"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("reihanehQuote2024")}
          icon={GiElectricalResistance}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(ReihanehGhoroghchian);
export default ReihanehGhoroghchian2024;
