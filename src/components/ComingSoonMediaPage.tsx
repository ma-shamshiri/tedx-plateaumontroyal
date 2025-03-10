import React from "react";
import {
    Box,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Typed from "react-typed";

export const ComingSoonMediaPage: React.FC = () => {

    const { t, i18n } = useTranslation();

    return (
        <Box
            className="block block--white"
            bg={useColorModeValue("#EFE8D6", "#0D1224")}
            overflow={"hidden"}
            width="100%"
            height="70vh"
            padding="10rem 2rem"
            margin="0 auto"
            fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
            dir={i18n.language === "fa" ? "rtl" : "ltr"}
        >

            <Box className="block__header" textAlign="center" width="100%">
                <Box
                    color={useColorModeValue("gray.800", "#16F8B6")}
                    marginBottom="1rem"
                    fontSize={{ base: "2.8rem", lg: "4rem" }}
                    fontWeight="bold"
                    lineHeight="1.1"
                    paddingY="1rem"
                    height={{ base: "8rem", md: "initial", lg: "initial" }}
                >
                    <Typed
                        strings={[t("comingSoonMediaPageTitle")]}
                        typeSpeed={50}
                        backSpeed={20}
                        loop
                        backDelay={3000}
                    />
                </Box>

                <Text
                    color={useColorModeValue("gray.700", "gray.200")}
                    fontSize={{ base: "1.5rem", lg: "2.1rem" }}
                >
                    {t("comingSoonMediaPageSubTitle")}
                </Text>
            </Box>
        </Box>
    );
};

// export default ComingSoonMediaPage;
