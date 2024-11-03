import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const BlockGroupMeeting: React.FC = () => {
    const { t, i18n } = useTranslation();

    return (
        <Box
            // className="block block--dark block--skewed-right block-showcase"
            position="relative"
            width="100%"
            bg={useColorModeValue("#F0E2B6", "#0F0F0F")}
            overflow="hidden"
        >
            <Box
                // className="block__header container"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                textAlign="center"
            >
                <Text
                    // className="h2"
                    fontSize={{ base: "2.8rem", lg: "4rem" }}
                    fontWeight="bold"
                    fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : "'Acme', sans-serif"}
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    color={useColorModeValue("gray.800", "#16F8B6")}
                    paddingY="3rem"
                    paddingTop={0}
                    letterSpacing={i18n.language === "fa" ? "initial" : 1.5}
                >
                    {t("groupMeetingTitle")}
                </Text>
            </Box>
        </Box>
    );
};

export default BlockGroupMeeting;
