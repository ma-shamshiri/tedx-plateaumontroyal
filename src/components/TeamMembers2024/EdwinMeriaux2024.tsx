import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { edwinBG2024, edwinBadge } from "../../assets";
import { GiElectricalResistance } from "react-icons/gi";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";

const EdwinMeriaux2024: React.FC = () => {
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
          firstName={t("edwin")}
          lastName={t("meriaux")}
          fullName={t("edwinMeriaux")}
          title={t("edwinTitle2024")}
          role={t("speakerCurator")}
          imageSrc={edwinBG2024}
          badgeSrc={edwinBadge}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("edwinQuote2024")}
          icon={GiElectricalResistance}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(EdwinMeriaux);
export default EdwinMeriaux2024;
