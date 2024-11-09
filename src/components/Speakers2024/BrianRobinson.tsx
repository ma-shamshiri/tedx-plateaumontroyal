import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BlockFooter } from "../BlockFooter";
import { Navigationbar } from "../Navigationbar";
import SpeakerProfile2024 from "../SpeakerProfile2024";
import { brian } from "../../assets";
// import { PageTransition } from "../PageTransition";

const BrianRobinson: React.FC = () => {
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
                    name={t("Brian Robinson")}
                    title={t("Associate Professor in the Department of Geography | McGill")}
                    biography={t("brianBiography")}
                    talkTopic={t("brianTalkTopic")}
                    imageSrc={brian}
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

// export default PageTransition(AlinaGutierrezMejia);
export default BrianRobinson;
