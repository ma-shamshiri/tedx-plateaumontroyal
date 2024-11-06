// ItemsComponent.tsx
import React, { useEffect } from 'react';
import { Box, Link, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import './styles.css';
import {
    brian,
    buddle,
    charles,
    ehson,
    henry,
    sami,
    shaun,
    sylvain,
    unknownGirlProfile,
    valerie
} from '../../assets';

const BlockSpeakerGrid2024: React.FC = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const items = document.querySelectorAll(".item");

        items.forEach((item) => {
            item.addEventListener("mouseenter", () => {
                const spans = item.querySelectorAll("span");
                gsap.set(spans, { opacity: 0 });
                gsap.to(spans, {
                    opacity: 1,
                    duration: 0.075,
                    stagger: {
                        from: "random",
                        each: 0.02,
                    },
                    ease: "power2.out",
                });
            });

            item.addEventListener("mouseleave", () => {
                const spans = item.querySelectorAll("span");
                gsap.to(spans, {
                    opacity: 0,
                    duration: 0.075,
                    stagger: {
                        from: "random",
                        each: 0.02,
                    },
                    ease: "power2.in",
                });
            });
        });
    }, []);

    return (
        <Box
            position="relative"
            width="100%"
            minHeight="100vh"
            bg={useColorModeValue("#F6F3E3", "#0c0c0c")}
            paddingY={{ base: "5rem", lg: "5rem" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
        >
            <Box
                className="block__header"
                textAlign="center"
                margin="0 auto"
                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
            >
                <Text
                    className="h2"
                    color={useColorModeValue("gray.800", "#16F8B6")}
                    marginBottom="2rem"
                    marginTop="0"
                    fontSize={{ base: "2.8rem", lg: "4rem" }}
                    fontWeight="bold"
                    lineHeight="1.1"
                >
                    {t("speakerPage2024Title")}
                </Text>

                <Text
                    className="p"
                    color={useColorModeValue("gray.700", "white")}
                    marginBottom="4rem"
                    marginTop="0"
                    fontSize={{ base: "1.5rem", lg: "2.1rem" }}
                    lineHeight="1.5"
                >
                    {t("speakerPage2024SubTitle")}
                </Text>
            </Box>

            <SimpleGrid
                alignItems="center"
                columns={{ base: 1, md: 1, lg: 3, xl: 3 }}
                spacing="3rem"
                marginY="4rem"
            >
                {/* Item 1 */}
                <Link
                    href="https://ca.linkedin.com/in/henrymintzberg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Box className="item" id="item-1">
                        <Box className="item-img">
                            <img src={henry} alt="Item 1" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            01
                                        </Text> */}
                                        <span>0</span><span>1</span>
                                    </Box>
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Henry
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Mintzberg
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 2 */}
                <Link
                    href="https://ca.linkedin.com/in/sylvain-allard-31974b15/en"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Box className="item" id="item-2">
                        <Box className="item-img">
                            <img src={sylvain} alt="Item 2" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number" className="text-right">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            02
                                        </Text> */}
                                        <span>0</span><span>2</span>
                                    </Box>
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Allard
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Sylvain
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 3 */}
                <Link
                    href="https://ca.linkedin.com/in/sandramr1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Box className="item" id="item-1">
                        <Box className="item-img">
                            <img src={sami} alt="Item 1" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            03
                                        </Text> */}
                                        <span>0</span><span>3</span>
                                    </Box>
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Sami
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Ramirez
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 4 */}
                <Link
                    href="https://ca.linkedin.com/in/brianerobinson"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Box className="item" id="item-2">
                        <Box className="item-img">
                            <img src={brian} alt="Item 2" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number" className="text-right">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            04
                                        </Text> */}
                                        <span>0</span><span>4</span>
                                    </Box>
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Robinson
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Brian
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 5 */}
                <Link
                    href="https://ca.linkedin.com/in/christopher-buddle-981722297"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Box className="item" id="item-1">
                        <Box className="item-img">
                            <img src={buddle} alt="Item 1" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            05
                                        </Text> */}
                                        <span>0</span><span>5</span>
                                    </Box>
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Christopher
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Buddle
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 6 */}
                <Link
                    href="https://ca.linkedin.com/in/ehson-kazerooni-3b691125b"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Box className="item" id="item-2">
                        <Box className="item-img">
                            <img src={ehson} alt="Item 2" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number" className="text-right">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            06
                                        </Text> */}
                                        <span>0</span><span>6</span>
                                    </Box>
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Kazerooni
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Ehson
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 7 */}
                <Link
                    href="https://ca.linkedin.com/in/shaun-lovejoy-39a24838"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Box className="item" id="item-1">
                        <Box className="item-img">
                            <img src={shaun} alt="Item 1" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            07
                                        </Text> */}
                                        <span>0</span><span>7</span>
                                    </Box>
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Shaun
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Lovejoy
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 8 */}
                <Link
                    href="https://www.linkedin.com/in/onucharles"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Box className="item" id="item-2">
                        <Box className="item-img">
                            <img src={charles} alt="Item 2" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number" className="text-right">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            08
                                        </Text> */}
                                        <span>0</span><span>8</span>
                                    </Box>
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Onu
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Charles
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 9 */}
                <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Box className="item" id="item-1">
                        <Box className="item-img">
                            <img src={valerie} alt="Item 1" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            09
                                        </Text> */}
                                        <span>0</span><span>9</span>
                                    </Box>
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Valérie
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Desroches
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

            </SimpleGrid>
        </Box>
    );
};

export default BlockSpeakerGrid2024;
