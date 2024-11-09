import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { saminBG2024, saminBadge } from "../../assets";
import { SiNeutralinojs } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";

const SaminMajidi2024: React.FC = () => {
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
          firstName={t("samin")}
          lastName={t("majidi")}
          fullName={t("saminMajidi")}
          title={t("saminTitle2024")}
          role={t("organizer")}
          imageSrc={saminBG2024}
          badgeSrc={saminBadge}
          linkedinHref="https://ca.linkedin.com/in/samin-majidi-05b77a250"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/19449036/about"
          quoteText={t("saminQuote2024")}
          icon={SiNeutralinojs}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(SaminMajidi);
export default SaminMajidi2024;
