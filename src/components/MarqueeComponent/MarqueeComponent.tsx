import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
import "./styles.css"; // Keep the external CSS
import { Box, Text } from "@chakra-ui/react";
import { useColorModeValue } from '@chakra-ui/react';
import { cubes61, cubes62, cubes63, cubes64, cubes65, cubes68, cubes69 } from "../../assets";

gsap.registerPlugin(ScrollTrigger);

const MarqueeComponent: React.FC = () => {
    useEffect(() => {
        const animateChars = (chars: HTMLElement[], reverse = false) => {
            const staggerOptions = {
                each: 0.35,
                from: reverse ? "start" : "end",
                ease: "linear",
            };

            gsap.fromTo(
                chars,
                { fontWeight: 100 },
                {
                    fontWeight: 900,
                    duration: 1,
                    ease: "none",
                    stagger: {
                        each: 0.35,
                        from: reverse ? "start" : "end",
                        ease: "linear",
                    },
                    scrollTrigger: {
                        trigger: chars[0].closest(".marquee-container"),
                        start: "50% bottom",
                        end: "top top",
                        scrub: true,
                    },
                }
            );
        };

        const splitText = new SplitType(".item h1", { types: "chars" });

        const marqueeContainers = document.querySelectorAll(".marquee-container");

        marqueeContainers.forEach((container, index) => {
            let start = "0%";
            let end = "-15%";

            if (index % 2 === 0) {
                start = "0%";
                end = "10%";
            }

            const marquee = container.querySelector(".marquee");
            const words = marquee?.querySelectorAll(".item h1");

            gsap.fromTo(
                marquee,
                { x: start },
                {
                    x: end,
                    scrollTrigger: {
                        trigger: container,
                        start: "top bottom",
                        end: "150% top",
                        scrub: true,
                    },
                }
            );

            words?.forEach((word) => {
                // Fix the type issue by casting chars to HTMLElement[]
                const chars = Array.from(word.querySelectorAll(".char")) as HTMLElement[];
                if (chars.length) {
                    const reverse = index % 2 !== 0;
                    animateChars(chars, reverse);
                }
            });
        });

        const lenis = new Lenis();
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
    }, []);

    return (
        <Box
            display={{ base: "none", lg: "block" }}
            width="100%"
            overflow="hidden"
        >
            <Box
                className="marquees"
                width="100%"
                height="100%"
                // height={{ base: "100vh", lg: "150vh" }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                bg={useColorModeValue("#fff", "gray.900")}
                paddingTop={{ base: "3rem", lg: "5rem" }}
                paddingBottom={{ base: "1.5rem", lg: "3.5rem" }}
            >
                <Box
                    className="marquee-container"
                    id="marquee-1"
                // position="relative"
                // width={{ base: "250%", lg: "125%" }}
                // height={{ base: "150px", lg: "250px" }}
                // display="flex"
                // gap="1em"
                // marginBottom="1em"
                // overflow="hidden"
                >
                    <div className="marquee">
                        <div className="item">
                            <img src={cubes61} alt="1" />
                        </div>
                        <div
                            className="item with-text"
                            style={{
                                flex: 1
                            }}
                        >
                            <Text
                                as="h1"
                                fontFamily="'Big Shoulders Display', sans-serif"
                                textTransform="uppercase"
                                fontSize={{ base: "60px", lg: "140px" }}
                                color={useColorModeValue("gray.700", "#fff")}
                            >
                                TEDx
                            </Text>
                        </div>
                        <div className="item">
                            <img src={cubes62} alt="img100" />
                        </div>
                        <div className="item">
                            <img src={cubes63} alt="3" />
                        </div>
                        <div className="item">
                            <img src={cubes64} alt="1" />
                        </div>
                    </div>
                </Box>

                <div className="marquee-container" id="marquee-2">
                    <div className="marquee">
                        <div className="item">
                            <img src={cubes65} alt="1" />
                        </div>
                        <div className="item">
                            <img src={cubes68} alt="img101" />
                        </div>
                        <div className="item">
                            <img src={cubes61} alt="2" />
                        </div>
                        <div className="item with-text">
                            <Text
                                as="h1"
                                fontFamily="'Big Shoulders Display', sans-serif"
                                textTransform="uppercase"
                                fontSize={{ base: "60px", lg: "140px" }}
                                color={useColorModeValue("gray.700", "#fff")}
                            >
                                Plateau
                            </Text>
                        </div>
                        <div className="item">
                            <img src={cubes61} alt="1" />
                        </div>
                    </div>
                </div>

                <div className="marquee-container" id="marquee-3">
                    <div className="marquee">
                        <div className="item">
                            <img src={cubes61} alt="2" />
                        </div>
                        <div
                            className="item with-text"
                            style={{
                                flex: 1
                            }}
                        >
                            <Text
                                as="h1"
                                fontFamily="'Big Shoulders Display', sans-serif"
                                textTransform="uppercase"
                                fontSize={{ base: "60px", lg: "140px" }}
                                color={useColorModeValue("gray.700", "#fff")}
                            >
                                Mont
                            </Text>
                        </div>
                        <div className="item">
                            <img src={cubes64} alt="1" />
                        </div>
                        <div className="item">
                            <img src={cubes63} alt="2" />
                        </div>
                        <div className="item">
                            <img src={cubes68} alt="3" />
                        </div>
                    </div>
                </div>

                <div className="marquee-container" id="marquee-4">
                    <div className="marquee">
                        <div className="item">
                            <img src={cubes64} alt="1" />
                        </div>
                        <div className="item">
                            <img src={cubes69} alt="2" />
                        </div>
                        <div className="item">
                            <img src={cubes62} alt="img101" />
                        </div>
                        <div
                            className="item with-text"
                            style={{
                                flex: 1.2
                            }}
                        >
                            <Text
                                as="h1"
                                fontFamily="'Big Shoulders Display', sans-serif"
                                textTransform="uppercase"
                                fontSize={{ base: "60px", lg: "140px" }}
                                color={useColorModeValue("gray.700", "#fff")}
                            >
                                Royal
                            </Text>
                        </div>
                        <div className="item">
                            <img src={cubes64} alt="2" />
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    );
};

export default MarqueeComponent;
