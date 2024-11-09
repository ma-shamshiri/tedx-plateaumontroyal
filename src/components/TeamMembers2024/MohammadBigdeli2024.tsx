import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { mohammadBG2024, minaBadge } from "../../assets";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";
import { MdPending } from "react-icons/md";

const MohammadBigdeli2024: React.FC = () => {
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
          firstName={t("mohammad")}
          lastName={t("bigdeli")}
          fullName={t("mohammadBigdeli")}
          title={t("mohammadTitle2024")}
          role={t("marketingAssistant")}
          imageSrc={mohammadBG2024}
          badgeSrc={minaBadge}
          linkedinHref="https://www.linkedin.com/in/mobigdeli/"
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

// export default PageTransition(MinaTaraghi);
export default MohammadBigdeli2024;
