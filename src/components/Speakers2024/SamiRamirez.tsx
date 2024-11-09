import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BlockFooter } from "../BlockFooter";
import { Navigationbar } from "../Navigationbar";
import SpeakerProfile2024 from "../SpeakerProfile2024";
import { sami } from "../../assets";
// import { PageTransition } from "../PageTransition";

const SamiRamirez: React.FC = () => {
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
                <SpeakerProfile2024
                    name={t("Sami Ramirez")}
                    title={t("Executive Coach with a Holistic Approach")}
                    biography={t("samiBiography")}
                    talkTopic={t("samiTalkTopic")}
                    imageSrc={sami}
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

// export default PageTransition(AlinaGutierrezMejia);
export default SamiRamirez;
