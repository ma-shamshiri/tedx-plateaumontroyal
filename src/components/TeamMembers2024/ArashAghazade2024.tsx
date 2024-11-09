import React, { useEffect, useState } from "react";
import { arashBG2024, baharanBadge } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { GiLaptop } from "react-icons/gi";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";
import TeamProfile2024 from "../TeamProfile2024";
import { MdPending } from "react-icons/md";

const ArashAghazade2024: React.FC = () => {
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
          firstName={t("arash")}
          lastName={t("aghazade")}
          fullName={t("arashAghazade")}
          title={t("arashTitle2024")}
          role={t("partnershipLiaison")}
          imageSrc={arashBG2024}
          badgeSrc={baharanBadge}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("arashQuote2024")}
          icon={MdPending}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(BaharanNouriinanloo);
export default ArashAghazade2024;
