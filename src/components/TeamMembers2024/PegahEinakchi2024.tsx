import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { GiMusicalNotes } from "react-icons/gi";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { pegahBG2024, pegahBadge } from "../../assets";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";

const PegahEinakchi2024: React.FC = () => {
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
          firstName={t("pegah")}
          lastName={t("einakchi")}
          fullName={t("pegahEinakchi")}
          title={t("pegahTitle2024")}
          role={t("logisticsCoordinator")}
          imageSrc={pegahBG2024}
          badgeSrc={pegahBadge}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("pegahQuote2024")}
          icon={GiMusicalNotes}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(PegahEinakchi);
export default PegahEinakchi2024;
