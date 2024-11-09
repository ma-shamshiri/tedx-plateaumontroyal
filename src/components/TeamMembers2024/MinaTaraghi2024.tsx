import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { GiLaptop } from "react-icons/gi";
import { minaBG2024, minaBadge } from "../../assets";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";

const MinaTaraghi2024: React.FC = () => {
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
          firstName={t("mina")}
          lastName={t("taraghi")}
          fullName={t("minaTaraghi")}
          title={t("minaTitle2024")}
          role={t("speakerCurator")}
          imageSrc={minaBG2024}
          badgeSrc={minaBadge}
          linkedinHref="https://ca.linkedin.com/in/minataraghi?trk=people-guest_people_search-card"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/44654445"
          quoteText={t("minaQuote2024")}
          icon={GiLaptop}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(MinaTaraghi);
export default MinaTaraghi2024;
