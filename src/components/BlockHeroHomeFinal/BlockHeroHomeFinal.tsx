import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import CountdownTimer from "./CountdownTimer"
import { heroPlateauMR } from "../../assets";

const BlockHeroHomeFinal: React.FC = () => {
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
                <Image
                    src={heroPlateauMR}
                    alt="TEDxPlateauMontRoyal 2024 event in Montreal - Inspiring Ideas"
                />
            </Flex>
        </Box>
    );
};

export default BlockHeroHomeFinal;