import React from "react";
import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

interface SpeakerCardProps {
    isHovered?: boolean;
    handleHover?: () => void;
    handleUnhover?: () => void;
    imageUrl: string;
    sourceUrl?: string;
    brandName?: string;
}

const SponsorCard: React.FC<SpeakerCardProps> = ({
    isHovered,
    handleHover,
    handleUnhover,
    imageUrl,
    sourceUrl,
    brandName
}) => {
    return (
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                as="a"
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
                position="relative"
                width={{ base: "12rem", md: "17rem", lg: "20rem" }}
                height={{ base: "12rem", md: "17rem", lg: "20rem" }}
                bg="white"
                borderRadius="100%"
                overflow="hidden"
                border="2px solid transparent"
                transition="0.25s ease-in-out"
                _hover={{
                    transform: "scale(1.15)"
                }}
            >
                {/* <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    bg="black"
                    opacity="0"
                    zIndex="1"
                    _hover={{
                        opacity: "0.2",
                    }}
                    transition="opacity 0.2s ease-out"
                ></Box> */}
                <Image src={imageUrl} boxShadow="0 0 30px 1px black" objectFit="cover" />
            </Box>
        </Flex>
    );
};

export default SponsorCard;
