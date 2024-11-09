import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { FcBiotech } from "react-icons/fc";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { royanBG2024, royanBadgeSrc } from "../../assets";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";

const RoyanJafari2024: React.FC = () => {
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
          firstName={t("royan")}
          lastName={t("jafari")}
          fullName={t("royanJafari")}
          title={t("royanTitle2024")}
          role={t("partnershipLiaison")}
          imageSrc={royanBG2024}
          badgeSrc={royanBadgeSrc}
          linkedinHref="https://ca.linkedin.com/in/royan-jafari"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("royanQuote2024")}
          icon={FcBiotech}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(RoyanJafari);
export default RoyanJafari2024;
