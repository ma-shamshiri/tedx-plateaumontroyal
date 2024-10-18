import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from 'react-scroll';

const CountdownTimer: React.FC<{ eventStartTime: Date }> = ({
    eventStartTime,
}) => {
    const calculateTimeLeft = () => {
        const currentTime = new Date();
        const difference = eventStartTime.getTime() - currentTime.getTime();

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const { t, i18n } = useTranslation();

    const buttonHoverTextColor = useColorModeValue("#fff", "#fff");
    const buttonHoverBorderColor = useColorModeValue("black", "#FF0000");

    const [isHoveredButton, setIsHoveredButton] = useState(false);

    const handleHoverButton = () => {
        setIsHoveredButton(true);
    };

    const handleUnHoverButton = () => {
        setIsHoveredButton(false);
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    const numberFontSize = useBreakpointValue({ base: "2rem", md: "4rem", lg: "4rem", xl: "5.5rem" });
    const textFontSize = useBreakpointValue({ base: "1rem", md: "1.5rem", lg: "1.5rem", xl: "2rem" });
    const boxSize = useBreakpointValue({ base: "70px", md: "140px", lg: "140px", xl: "175px" });

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const formatTimeUnit = (unit: number) =>
        unit < 10 ? `0${unit}` : unit.toString();

    return (
        <Box
            textAlign="center"
            overflow={"hidden"}
            margin="0 auto"
            padding="2rem"
            paddingBottom="0"
        >
            <Text
                fontSize={useBreakpointValue({ base: "1.5rem", md: "2.8rem", lg: "3rem", xl: "4rem" })}
                color="gray.800"
                fontWeight="bold"
                fontFamily="'Big Shoulders Display', sans-serif"
                marginBottom={{ base: "2rem", lg: "4rem" }}
            >
                {t("countdownTitle")}
            </Text>
            <Flex justifyContent="center" gap={{ base: 4, lg: 7 }} >
                {["days", "hours", "minutes", "seconds"].map((unit, index) => (
                    <Box
                        key={index}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        width={boxSize}
                        height={boxSize}
                        bgColor={useColorModeValue("rgba(0, 124, 124, 0.79)", "rgba(255, 0, 0, 0.79)")}
                        color="white"
                        fontWeight="bold"
                        borderWidth="1px"
                        borderColor={useColorModeValue("rgba(0, 124, 124, 1)", "rgba(255, 0, 0, 1)")}
                        borderRadius="7px"
                        boxShadow="0 8px 16px rgba(0, 0, 0, 0.3)"
                        transition="transform 0.3s ease, box-shadow 0.3s ease"
                        _hover={{
                            transform: "scale(1.05)",
                            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.4)",
                        }}
                        textAlign="center"
                    >
                        <Text
                            fontSize={numberFontSize}
                            fontFamily="'Acme', sans-serif"
                            letterSpacing={4}
                        >
                            {formatTimeUnit(timeLeft[unit as keyof typeof timeLeft])}
                        </Text>
                        <Text fontSize={textFontSize}>
                            {t(unit)}
                        </Text>
                    </Box>
                ))}
            </Flex>

            <Flex
                justifyContent="center"
                alignItems="center"
                bg="transparent"
                paddingTop={{base:"1.5rem", lg:"3rem"}}
                zIndex={500000}
            >
                <ScrollLink to="ticket-section" smooth={true} duration={500}>
                    <Button
                        border="2px solid #000"
                        borderRadius="10px"
                        cursor="pointer"
                        fontSize={{ base: "1.2rem", lg: "2.8rem" }}
                        fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                        padding={{ base: "0.5rem", lg: "2rem" }}
                        textAlign="center"
                        whiteSpace="nowrap"
                        bg="transparent"
                        color="#000"
                        boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
                        display="inline-block"
                        width={{ base: "10rem", lg: "25rem" }}
                        height={{ base: "4rem", lg: "8rem" }}
                        _hover={{
                            border: "0.2rem solid",
                            borderColor: buttonHoverBorderColor,
                            bg: "#FF0000",
                            color: buttonHoverTextColor,
                            boxShadow:
                                "0px 8px 14px rgba(0, 0, 0, 0.3), 0px -8px 14px rgba(0, 0, 0, 0.3)",
                        }}
                        transition="background-color 0.25s ease-out, border 0.25s ease-out, box-shadow 0.25s ease"
                        onMouseEnter={handleHoverButton}
                        onMouseLeave={handleUnHoverButton}
                    >
                        {t("getTicket")}
                    </Button>
                </ScrollLink>
            </Flex>
        </Box>
    );
};

export default CountdownTimer;

