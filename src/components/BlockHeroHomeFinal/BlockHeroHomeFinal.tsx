import React, { useState } from 'react';
import { Box, Button, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { heroPlateauMR } from "../../assets";
import CountdownTimer from "./CountdownTimer"
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const BlockHeroHomeFinal: React.FC = () => {
    const { t, i18n } = useTranslation();

    const eventStartTime = new Date("2024-11-16T10:00:00-04:00");

    const buttonHoverTextColor = useColorModeValue("black", "#FF0000");
    const buttonHoverBorderColor = useColorModeValue("black", "#FF0000");

    const [isHoveredButton, setIsHoveredButton] = useState(false);

    const handleHoverButton = () => {
        setIsHoveredButton(true);
    };

    const handleUnHoverButton = () => {
        setIsHoveredButton(false);
    };

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
            <Flex
                bg="#D1CBB5"
                width="100%"
                justifyContent="center"
                alignItems="center"
                paddingY={{ base: "1.5rem", lg: "4rem" }}
                zIndex={100}
            >
                <CountdownTimer eventStartTime={eventStartTime} />
            </Flex>
            <Flex
                className='heroImageContainer'
                width={{ base: "130%", lg: "110%" }}
            >
                <Image src={heroPlateauMR} />
            </Flex>
        </Box>
    );
};

export default BlockHeroHomeFinal;