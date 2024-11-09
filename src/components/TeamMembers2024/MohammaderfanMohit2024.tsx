import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { mohammaderfanBG2024, erfanBadge } from "../../assets";
import { GiMining } from "react-icons/gi";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";

const MohammaderfanMohit2024: React.FC = () => {
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
          firstName={t("mohammadErfan")}
          lastName={t("mohit")}
          fullName={t("mohammadErfanMohit")}
          title={t("erfanTitle2024")}
          role={t("eventDirector")}
          imageSrc={mohammaderfanBG2024}
          badgeSrc={erfanBadge}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/41859284"
          quoteText={t("erfanQuote2024")}
          icon={GiMining}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(MohammaderfanMohit);
export default MohammaderfanMohit2024;
