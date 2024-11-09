import React, { useEffect, useState } from "react";
import { aminBG2024, aminBadge } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";

const AminShamshiri2024: React.FC = () => {
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
          firstName={t("mohammadAmin")}
          lastName={t("shamshiri")}
          fullName={t("mohammadAminShamshiri")}
          title={t("aminTitle2024")}
          role={t("webDeveloper")}
          imageSrc={aminBG2024}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/in/ma-shamshiri"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/11850053"
          quoteText={t("aminQuote2024")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default AminShamshiri2024;
