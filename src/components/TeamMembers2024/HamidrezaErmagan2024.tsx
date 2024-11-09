import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { GiMining } from "react-icons/gi";
import { hamidrezaBG2024, hamidrezaBadge } from "../../assets";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";

const HamidrezaErmagan2024: React.FC = () => {
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
          firstName={t("hamidreza")}
          lastName={t("ermagan")}
          fullName={t("hamidrezaErmagan")}
          title={t("hamidrezaTitle2024")}
          role={t("speakerCurator")}
          imageSrc={hamidrezaBG2024}
          badgeSrc={hamidrezaBadge}
          linkedinHref="https://ca.linkedin.com/in/hrermagan"
          // twitterHref="https://twitter.com/"
          twitterHref="https://x.com/hrermagan"
          tedHref="https://www.ted.com/profiles/44509018"
          quoteText={t("hamidrezaQuote2024")}
          icon={GiMining}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(HamidrezaErmagan);
export default HamidrezaErmagan2024;
