import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { GiLaptop } from "react-icons/gi";
import { melikaBG2024, melikaBadge } from "../../assets";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";

const MelikaSeyedi2024: React.FC = () => {
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
          firstName={t("melika")}
          lastName={t("seyedi")}
          fullName={t("melikaSeyedi")}
          title={t("melikaTitle2024")}
          role={t("sponsorshipCoordinator")}
          imageSrc={melikaBG2024}
          badgeSrc={melikaBadge}
          linkedinHref="https://ca.linkedin.com/in/melika-seyedi-048416140"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("melikaQuote2024")}
          icon={GiLaptop}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(MelikaSeyedi);
export default MelikaSeyedi2024;
