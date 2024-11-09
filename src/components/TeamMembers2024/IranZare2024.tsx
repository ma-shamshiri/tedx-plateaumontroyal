import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { iranBG2024, hamidrezaBadge } from "../../assets";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";
import { MdPending } from "react-icons/md";

const IranZare2024: React.FC = () => {
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
          firstName={t("iran")}
          lastName={t("zare")}
          fullName={t("iranZare")}
          title={t("iranTitle2024")}
          role={t("videoCreator")}
          imageSrc={iranBG2024}
          badgeSrc={hamidrezaBadge}
          linkedinHref="https://www.linkedin.com/in/irannzare/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("royanQuote2024")}
          icon={MdPending}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(IranZare2024);
export default IranZare2024;
