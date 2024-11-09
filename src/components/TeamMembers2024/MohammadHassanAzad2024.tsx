import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { mohammadhasanBG2024, erfanBadge } from "../../assets";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";
import { MdPending } from "react-icons/md";

const MohammadHassanAzad2024: React.FC = () => {
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
          firstName={t("mohammadHassan")}
          lastName={t("azad")}
          fullName={t("mohammadHasanAzad")}
          title={t("mohammadHasanTitle2024")}
          role={t("operationalAssociate")}
          imageSrc={mohammadhasanBG2024}
          badgeSrc={erfanBadge}
          linkedinHref="https://ca.linkedin.com/"
          // linkedinHref="https://www.linkedin.com/in/mohammad-hasan-azad/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("mohammadHassanQuote2024")}
          icon={MdPending}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(MohammaderfanMohit);
export default MohammadHassanAzad2024;
