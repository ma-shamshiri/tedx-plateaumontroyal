import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { ehsanBG2024, edwinBadge } from "../../assets";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";
import { MdPending } from "react-icons/md";

const EhsanMortazavi2024: React.FC = () => {
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
          firstName={t("ehsan")}
          lastName={t("mortazavi")}
          fullName={t("ehsanMortazavi")}
          title={t("ehsanTitle2024")}
          role={t("visualDesigner")}
          imageSrc={ehsanBG2024}
          badgeSrc={edwinBadge}
          // linkedinHref="https://ca.linkedin.com/"
          linkedinHref="https://www.linkedin.com/in/ehsan-mortazavi/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("edwinQuote2024")}
          icon={MdPending}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(EdwinMeriaux);
export default EhsanMortazavi2024;
