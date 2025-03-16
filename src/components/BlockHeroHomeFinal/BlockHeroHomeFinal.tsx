import React from 'react';
import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import CountdownTimer from "./CountdownTimer"
import { heroPlateauMR } from "../../assets";
import { useTranslation } from 'react-i18next';

const BlockHeroHomeFinal: React.FC = () => {
    const { t, i18n } = useTranslation();

    const eventStartTime = new Date("2024-11-16T10:00:00-04:00");

    return (
        <Box
            position="relative"
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems={"center"}
            // height="200vh"
            overflow="hidden"
        >
            {/* <Flex
                position="absolute"
                top={{ base: "75%", md: "75%", lg: "70%" }}
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={100}
            >
                <CountdownTimer eventStartTime={eventStartTime} />
            </Flex> */}
            {/* <Flex
                bg="#D1CBB5"
                width="100%"
                justifyContent="center"
                alignItems="center"
                paddingY={{ base: "1.5rem", lg: "4rem" }}
                zIndex={100}
            >
                <CountdownTimer eventStartTime={eventStartTime} />
            </Flex> */}

            <Flex
                position="relative"
                width="100%"
                bg="#D2CDB9"
                alignItems="center"
                justifyContent="center"
                paddingY={{ base: "2rem", lg: "4rem" }}
                paddingX={{ base: "6rem", lg: "2rem" }}
                overflow="hidden"
                textAlign="center"
            >
                <Text
                    fontSize={
                        i18n.language === "fa" ?
                            useBreakpointValue({ base: "1.5rem", md: "2.2rem", lg: "2.8rem", xl: "2.8rem" }) :
                            useBreakpointValue({ base: "1.5rem", md: "2.8rem", lg: "3rem", xl: "4rem" })
                    }
                    color="gray.800"
                    fontWeight="1000"
                    fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : "'Big Shoulders Display', sans-serif"}
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}

                    aria-label="Countdown to TEDxPlateauMontRoyal event"
                >
                    {t("countdownTitle")}
                </Text>
            </Flex>
            <Flex
                className='heroImageContainer'
                width={{ base: "130%", lg: "110%" }}
            >
                <Image
                    src={heroPlateauMR}
                    alt="TEDxPlateauMontRoyal 2024 event in Montreal - Inspiring Ideas"
                />
            </Flex>
        </Box>
    );
};

export default BlockHeroHomeFinal;