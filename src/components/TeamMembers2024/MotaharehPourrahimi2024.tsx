import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { LuBrainCircuit } from "react-icons/lu";
import { motaharehBG2024, motaharehBadge } from "../../assets";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";

const MotaharehPourrahimi2024: React.FC = () => {
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
          firstName={t("motahareh")}
          lastName={t("pourrahimi")}
          fullName={t("motaharehPourrahimi")}
          title={t("motaharehTitle2024")}
          role={t("talksCoordinator")}
          imageSrc={motaharehBG2024}
          badgeSrc={motaharehBadge}
          linkedinHref="https://ca.linkedin.com/in/motahareh-pour-ahimi-43550417b"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("motaharehQuote2024")}
          icon={LuBrainCircuit}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(MotaharehPourrahimi);
export default MotaharehPourrahimi2024;
