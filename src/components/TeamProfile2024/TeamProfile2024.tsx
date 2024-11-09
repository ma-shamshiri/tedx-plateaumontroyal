import React, { useRef, useState } from "react";
import { Box, HStack, Icon, IconButton, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BsChatRightQuoteFill, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiTed } from "react-icons/si";
import { IconType } from "react-icons";

interface TeamProfile2024Props {
    firstName?: string;
    lastName?: string;
    fullName?: string;
    title?: string;
    role?: string;
    imageSrc?: string;
    badgeSrc?: string;
    icon?: IconType;
    linkedinHref?: string;
    twitterHref?: string;
    tedHref?: string;
    quoteText?: string;
}

// Variants for background image reveal
const bgRevealVariants = {
    initial: { clipPath: "inset(0 100% 0 0)" },
    animate: {
        clipPath: "inset(0% 0% 0% 0%)",
        transition: { delay: 0.5, duration: 1.5, ease: "easeInOut" },
    },
};

// Variants for front image reveal, with slight delay after background reveal
const frontRevealVariants = {
    initial: { clipPath: "inset(0 100% 0 0)" },
    animate: {
        clipPath: "inset(0% 0% 0% 0%)",
        transition: { delay: 0.8, duration: 1.5, ease: "easeInOut" },
    },
};

// Scale variants for background image with delay
const scaleVariantsBg = {
    initial: { scale: 2 },
    animate: { scale: 1, transition: { delay: 1.7, duration: 2, ease: "easeInOut" } },
};

// Scale variants for front image with slight delay after background
const scaleVariantsFront = {
    initial: { scale: 2 },
    animate: { scale: 1, transition: { delay: 2.2, duration: 1.5, ease: "easeInOut" } },
};

// Text slide-up animation with stagger effect for text elements
const roleVariants = {
    initial: { x: -120, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 3,
            duration: 1,
            ease: "easeInOut",
            staggerChildren: 0.2,
        },
    },
};

const nameVariants = {
    initial: { x: -120, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 3.2,
            duration: 1,
            ease: "easeInOut",
            staggerChildren: 0.2,
        },
    },
};

const bioVariants = {
    initial: { y: 120, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 3.2,
            duration: 1,
            ease: "easeInOut",
            staggerChildren: 0.2,
        },
    },
};

const iconsVariants = {
    initial: { y: 120, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 3.4,
            duration: 1,
            ease: "easeInOut",
            staggerChildren: 0.2,
        },
    },
};

// Create Motion components
const MotionBox = motion(Box);
const MotionImage = motion.img;

const TeamProfile2024: React.FC<TeamProfile2024Props> = ({
    firstName,
    lastName,
    fullName,
    title,
    role,
    imageSrc,
    badgeSrc,
    icon: IconComponent,
    linkedinHref,
    twitterHref,
    tedHref,
    quoteText,
}) => {
    const { t, i18n } = useTranslation();

    const containerRef = useRef<HTMLDivElement>(null);
    const [isRevealed, setIsRevealed] = useState(false);

    const iconSize = useBreakpointValue({ base: "3.5rem", lg: "3rem" });
    const quoteIconSize = useBreakpointValue({ base: "4rem", lg: "4rem" });
    const titleIconSize = useBreakpointValue({ base: "4rem", lg: "4rem" });
    const tedIconSize = useBreakpointValue({ base: "5rem", lg: "4rem" });


    return (
        <MotionBox
            ref={containerRef}
            position="relative"
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
            width="100%"
            // height="93vh"
            minHeight="93vh"
            overflow="hidden"
            background="#0f0f0f"
            initial="initial"
            animate="animate"
        >
            <MotionBox
                className="hero-image-wrapper profileWrapper"
                position="relative"
                flex={2}
                overflow="hidden"
                // height="93vh"
                minHeight="93vh"
                variants={bgRevealVariants}
                onAnimationComplete={(definition) => {
                    if (definition === "animate") {
                        setIsRevealed(true);
                    }
                }}
            >
                <MotionBox
                    className="bg-img"
                    position="relative"
                    transform="rotate(-45deg)"
                    width="100%"
                    height="100%"
                    zIndex={-2}
                    overflow="hidden"
                >
                    <Box
                        width="100%"
                        height="100%"
                        position="absolute"
                        top="0"
                        left="0"
                        overflow="hidden"
                    >
                        <MotionImage
                            className="profilePic"
                            src={imageSrc}
                            alt="Background Image"
                            variants={scaleVariantsBg}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                filter: isRevealed ? "blur(4px)" : "blur(0px)",
                                transition: "filter 0.6s ease-in-out",
                            }}
                        />
                    </Box>
                </MotionBox>
                <MotionBox
                    className="front-img"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    width="300px"
                    height="400px"
                    zIndex={2}
                    overflow="hidden"
                    variants={frontRevealVariants}
                    initial="initial"
                    animate="animate"
                >
                    <Box
                        width="100%"
                        height="100%"
                        position="absolute"
                        top="0"
                        left="0"
                        overflow="hidden"
                    >
                        <MotionImage
                            className="profilePic"
                            src={imageSrc}
                            alt="Front Image"
                            variants={scaleVariantsFront}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                </MotionBox>
            </MotionBox>

            {/* Content Wrapper with Text Animations */}
            <MotionBox
                className="content-wrapper profileWrapper"
                display="flex"
                flex={3}
                position="relative"
                bg={useColorModeValue("#D7D2C9", "#D7D2C9")}
                padding={{ base: "1em 1em", lg: "2em 3em" }}
                flexDirection="column"
                justifyContent="space-between"
                width="100%"
                // height="93vh"
                minHeight="93vh"
                variants={bgRevealVariants}

            >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems={{ base: "center", lg: "initial" }}
                >
                    <Box
                        className="profileHeader"
                        display="flex"
                        flexDirection="column"
                        gap={{ base: "3rem", lg: "1rem" }}
                        borderBottom="2px"
                        borderColor={useColorModeValue("gray.800", "gray.800")}
                        paddingLeft={{ base: "initial", lg: "0.5rem" }}
                    >
                        <MotionBox
                            className="h2"
                            position="relative"
                            variants={roleVariants}
                            paddingBottom={{ base: "initial", lg: "2rem" }}
                            paddingTop={{ base: "1rem", lg: "initial" }}
                        >
                            <Text
                                as="h2"
                                fontSize={{ base: "3rem", lg: "3.5rem" }}
                                fontWeight="bold"
                                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : "'Big Shoulders Display', sans-serif"}
                                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                // letterSpacing={1.5}
                                color={useColorModeValue("gray.900", "gray.900")}
                                textAlign={{ base: "center", lg: "initial" }}
                            >
                                {role}
                            </Text>
                        </MotionBox>
                        <MotionBox
                            className="h1"
                            position="relative"
                            variants={nameVariants}
                        >
                            <Text
                                as="h1"
                                // textTransform="uppercase"
                                fontSize={{ base: "3rem", lg: "4.5rem" }}
                                fontWeight="bold"
                                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : "'Big Shoulders Display', sans-serif"}
                                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                // letterSpacing={i18n.language === "fa" ? "initial" : 1.5}
                                color={useColorModeValue("gray.900", "gray.900")}
                                marginY={0}
                                paddingY="1rem"
                                textAlign={{ base: "center", lg: "initial" }}
                            >
                                {fullName}
                            </Text>
                            <HStack
                                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                gap={7}
                            >
                                <Icon
                                    className="title_container"
                                    as={IconComponent}
                                    boxSize={titleIconSize}
                                    color={useColorModeValue("gray.800", "gray.800")}
                                />
                                <Text
                                    fontSize={{ base: "1.5rem", lg: "2.2rem" }}
                                    color={useColorModeValue("gray.800", "gray.700")}
                                    fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                                    paddingY="1rem"
                                    fontWeight="bold"
                                >
                                    {title}
                                </Text>
                            </HStack>
                        </MotionBox>
                    </Box>
                </Box>
                <MotionBox variants={bioVariants}>
                    <Box
                        className="bioContainer"
                        width="100%"
                        height="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="left"
                        paddingY={{ base: "2rem", lg: "5rem" }}
                    >
                        <Box
                            display="flex"
                            maxWidth={{ base: "85%", lg: "60%" }}
                        >
                            <Text
                                className="speaker_title"
                                fontSize={{ base: "1.6rem", lg: "2rem" }}
                                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                                lineHeight={{ base: "25px", lg: "32px" }}
                                color={useColorModeValue("gray.800", "gray.800")}
                                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                letterSpacing={{
                                    base: i18n.language === "fa" ? "0" : "initial",
                                    lg: i18n.language === "fa" ? "0" : "2px"
                                }}
                            // fontFamily="'Literata', serif"
                            >
                                <Box as="span" display="inline-block">
                                    <BsChatRightQuoteFill size={quoteIconSize} color="#fc5a03" />
                                </Box>
                                {" "}
                                {quoteText}
                            </Text>
                        </Box>
                    </Box>
                </MotionBox>
                <MotionBox variants={iconsVariants}>
                    <Box
                        className="icon_container"
                        display="flex"
                        paddingY="2rem"
                        justifyContent="center"
                    >
                        <HStack
                            spacing={{ base: "6", lg: "6" }}
                            justifyContent={"center"}
                        >
                            <Box as="a" href={linkedinHref} target="_blank" rel="noopener noreferrer">
                                <IconButton
                                    aria-label="linkedin"
                                    variant="ghost"
                                    size="xl"
                                    icon={<BsLinkedin size={iconSize} />}
                                    color={useColorModeValue("gray.800", "gray.800")}
                                    _hover={{
                                        bg: useColorModeValue("gray.800", "gray.800"),
                                        color: useColorModeValue("gray.100", "gray.100"),
                                    }}
                                    isRound
                                    boxSize={{ base: "6.5rem", lg: "6rem" }}
                                    opacity="1"
                                />
                            </Box>
                            <Box as="a" href={twitterHref} target="_blank" rel="noopener noreferrer">
                                <IconButton
                                    aria-label="twitter"
                                    variant="ghost"
                                    size="xl"
                                    icon={<BsTwitter size={iconSize} />}
                                    color={useColorModeValue("gray.800", "gray.800")}
                                    _hover={{
                                        bg: useColorModeValue("gray.800", "gray.800"),
                                        color: useColorModeValue("gray.100", "gray.100"),
                                    }}
                                    isRound
                                    boxSize={{ base: "6.5rem", lg: "6rem" }}
                                    opacity="1"
                                />
                            </Box>
                            <Box as="a" href={tedHref} target="_blank" rel="noopener noreferrer">
                                <IconButton
                                    aria-label="ted"
                                    variant="ghost"
                                    size="xl"
                                    icon={<SiTed size={tedIconSize} />}
                                    color={useColorModeValue("#gray.800", "gray.800")}
                                    _hover={{
                                        bg: useColorModeValue("gray.800", "gray.800"),
                                        color: useColorModeValue("gray.100", "gray.100"),
                                    }}
                                    isRound
                                    boxSize={{ base: "6.5rem", lg: "6rem" }}
                                    opacity="1"
                                />
                            </Box>
                        </HStack>
                    </Box>
                </MotionBox>
            </MotionBox>
        </MotionBox>
    );
};

export default TeamProfile2024;
