import React, { useEffect, useState } from "react";
import { baharanBG2024, baharanBadge } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { GiLaptop } from "react-icons/gi";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";

const BaharanNouriinanloo2024: React.FC = () => {
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
          firstName={t("baharan")}
          lastName={t("nouriinanloo")}
          fullName={t("baharanNouriinanloo")}
          title={t("baharanTitle2024")}
          role={t("contentWriter")}
          imageSrc={baharanBG2024}
          badgeSrc={baharanBadge}
          linkedinHref="https://ca.linkedin.com/in/baharan-nouriv"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("baharanQuote2024")}
          icon={GiLaptop}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(BaharanNouriinanloo);
export default BaharanNouriinanloo2024;
