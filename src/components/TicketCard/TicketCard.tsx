import React, { useEffect, useRef, useState } from "react";
import { Box, Text, HStack, useColorModeValue, Link } from "@chakra-ui/react";
import { cardData } from "./data";  // Import cardData from data.ts
import { gsap } from "gsap";
import { motion } from 'framer-motion';
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PiTicket } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import "./styles.css";

const variants: { [key: string]: any } = {
    initial: {
        y: 50,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
            staggerChildren: 0.1,
        },
    },
};

const TicketCard = () => {
    const { t, i18n } = useTranslation();

    const ref = useRef<HTMLDivElement>(null);

    const svgRef = useRef<SVGSVGElement>(null);
    const leftEyeRef = useRef<SVGGElement>(null);
    const rightEyeRef = useRef<SVGGElement>(null);

    const [prevLeftAngle, setPrevLeftAngle] = useState<number | null>(null);
    const [prevRightAngle, setPrevRightAngle] = useState<number | null>(null);

    useEffect(() => {
        const svg = svgRef.current;
        const mouse = svg?.createSVGPoint();
        const leftEye = createEye(leftEyeRef.current, "left");
        const rightEye = createEye(rightEyeRef.current, "right");
    
        let requestId: number | null = null;
    
        function onMouseMove(event: MouseEvent) {
            if (mouse) {
                mouse.x = event.clientX;
                mouse.y = event.clientY;
    
                if (!requestId) {
                    requestId = requestAnimationFrame(onFrame);
                }
            }
        }
    
        function onFrame() {
            if (svg && mouse) {
                const point = mouse.matrixTransform(svg.getScreenCTM()!.inverse());
                leftEye?.rotateTo(point);
                rightEye?.rotateTo(point);
                requestId = null;
            }
        }
    
        function createEye(element: SVGGElement | null, side: "left" | "right") {
            if (!element) return null;
    
            gsap.set(element, { transformOrigin: "center" });
            const bbox = element.getBBox();
            const centerX = bbox.x + bbox.width / 2;
            const centerY = bbox.y + bbox.height / 2;
    
            return {
                rotateTo(point: DOMPoint) {
                    const dx = point.x - centerX;
                    const dy = point.y - centerY;
                    let angle = Math.atan2(dy, dx);
    
                    // Handle angle normalization and smooth transitions
                    angle = normalizeAngle(angle, side);
    
                    gsap.to(element, { rotation: `${angle}_rad_short`, duration: 0.3 });
                },
            };
        }
    
        function normalizeAngle(angle: number, side: "left" | "right") {
            if (angle < 0) {
                angle += Math.PI * 2;
            }
    
            if (side === "left") {
                if (prevLeftAngle !== null) {
                    const delta = angle - prevLeftAngle;
    
                    if (delta > Math.PI) {
                        angle -= Math.PI * 2;
                    } else if (delta < -Math.PI) {
                        angle += Math.PI * 2;
                    }
                }
                setPrevLeftAngle(angle);
            }
    
            if (side === "right") {
                if (prevRightAngle !== null) {
                    const delta = angle - prevRightAngle;
    
                    if (delta > Math.PI) {
                        angle -= Math.PI * 2;
                    } else if (delta < -Math.PI) {
                        angle += Math.PI * 2;
                    }
                }
                setPrevRightAngle(angle);
            }
    
            return angle;
        }
    
        // Event listener for mouse movement
        window.addEventListener("mousemove", onMouseMove);
    
        // Screen size handling
        const updateTopValue = () => {
            const svgElement = svgRef.current;
            if (svgElement) {
                if (window.innerWidth < 768) {
                    svgElement.style.top = "58%"; // Set top value to 60% for small screens
                } else {
                    svgElement.style.top = "38%"; // Default top value for larger screens
                }
            }
        };
    
        // Event listener for resize
        window.addEventListener("resize", updateTopValue);
        updateTopValue(); // Initial call to set top value based on current screen size
    
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", updateTopValue);
        };
    }, [prevLeftAngle, prevRightAngle, svgRef]);
    


    return (
        <Box
            // className="container"
            id="ticket-section"
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            width="100%"
            height={{ base: "max-content", lg: "max-content" }}
            // bg="radial-gradient(circle, rgba(29, 17, 56, 1) 0%, rgba(7, 4, 14, 1) 100%)"
            bg={useColorModeValue(
                "linear-gradient(45deg, #685ACD, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
                "gray.800"
            )}
            paddingBottom={{base:"6rem", lg:"initial"}}
        >
            <svg
                id="svg"
                viewBox="0 0 1000 1000"
                ref={svgRef}
                style={{
                    position: "absolute",
                    width: "80%",
                    height: "80%",
                    top: "38%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                    zIndex: 2,
                }}
            >
                <g id="left-eye" ref={leftEyeRef}>
                    <circle
                        className="eye-outer"
                        cx="400"
                        cy="500"
                        r="100"
                        stroke="#0f0f0f"
                        strokeWidth="2"
                        fill="#fff"
                    />
                    <circle className="eye-inner" cx="480" cy="500" r="20" fill="#0f0f0f" />
                </g>
                <g id="right-eye" ref={rightEyeRef}>
                    <circle
                        className="eye-outer"
                        cx="600"
                        cy="500"
                        r="100"
                        stroke="#0f0f0f"
                        strokeWidth="2"
                        fill="#fff"
                    />
                    <circle className="eye-inner" cx="680" cy="500" r="20" fill="#0f0f0f" />
                </g>
            </svg>
            <motion.div
                ref={ref}
                variants={variants}
                initial="initial"
                whileInView="animate"
            >
                <Box
                    textAlign="center"
                    width="100%"
                    padding={{ base: "3rem 4rem", lg: "6rem 2rem" }}
                    paddingTop={{ base: "8rem", lg: "13rem" }}
                    fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : "'Acme', sans-serif"}
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    letterSpacing={1.5}
                >
                    <Text
                        color={useColorModeValue("white", "gray.100")}
                        marginBottom="2rem"
                        fontSize={{ base: "3rem", lg: "4.5rem" }}
                        fontWeight="bold"
                        lineHeight="1.4"
                    >
                        {t("getTicketTitle")}
                    </Text>
                    <Text
                        color={useColorModeValue("gray.100", "gray.100")}
                        fontSize={{ base: "1.8rem", lg: "3rem" }}
                        lineHeight="1.4"
                    >
                        {t("getTicketSubTitle")}
                    </Text>
                </Box>
            </motion.div>
            <motion.div
                ref={ref}
                variants={variants}
                initial="initial"
                whileInView="animate"
            >
                <Box
                    // className="cards"
                    display="flex"
                    flexDirection={{ base: "column", lg: "initial" }}
                    gap={{ base: "10rem", lg: "20rem", xl: "40rem" }}
                    paddingBottom={{ lg: "13rem" }}
                    paddingTop={{ lg: "20rem" }}
                >
                    {cardData.map((data, index) => (
                        <Link
                            key={index}
                            as={RouterLink}
                            to={"https://www.zeffy.com/en-CA/ticketing/4caf8991-c63e-45a3-a898-d0ff1aaf402f?fbclid=PAZXh0bgNhZW0CMTEAAaZHKIkPEAHO6Sr4oebYGUDJsNBPItj1aTVjuYqEHvu91xKZw-SXlrRWSX0_aem_enJOtqnPq19sRgYUQOlRkg"}
                            cursor="pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Box
                                className="card"
                                key={index}
                                position="relative"
                                width="300px"
                                height="420px"
                                borderRadius="10px"
                                cursor="pointer"
                                boxShadow="0 8px 16px rgba(0, 0, 0, 0.8)"
                            >
                                {/* Card Background */}
                                <Box
                                    // className="card-bg"
                                    position="absolute"
                                    width="100%"
                                    height="100%"
                                    padding="1em"
                                    bg={data.frontCardColor}
                                    border="1px solid rgba(82, 62, 155, 0.2)"
                                    borderRadius="10px"
                                    transformOrigin="left top"
                                >
                                    <Text
                                        color="#fff"
                                        opacity="0.25"
                                        fontSize="8px"
                                        fontWeight="600"
                                        textTransform="uppercase"
                                        letterSpacing="2px"
                                    >
                                        {data.bgText}
                                    </Text>
                                </Box>

                                {/* Call to Action */}
                                <Box
                                    className="card-cta"
                                    position="absolute"
                                    right="0"
                                    bottom="0"
                                    width="75%"
                                    height="75%"
                                    bg={data.ticketColor}
                                    // border="1px"
                                    // borderColor="#2C2C2C"
                                    borderRadius="10px"
                                    transition="0.5s"
                                >
                                    <Text
                                        position="absolute"
                                        top="40%"
                                        right="-30%"
                                        transform="rotate(90deg)"
                                        color="#fff"
                                        fontSize="15px"
                                        // fontWeight="bold"
                                        letterSpacing={1}
                                    >
                                        New Chancellor Day Hall
                                    </Text>
                                    <Text
                                        position="absolute"
                                        top="40%"
                                        right="-16%"
                                        transform="rotate(90deg)"
                                        color="#fff"
                                        fontSize="15px"
                                        // fontWeight="bold"
                                        letterSpacing={1}
                                    >
                                        3644 Peel St, H3A 1X1
                                    </Text>
                                </Box>

                                {/* Foreground Content */}
                                <Box
                                    className="card-fg"
                                    position="absolute"
                                    width="100%"
                                    height="100%"
                                    padding="2em"
                                    bg={data.frontCardColor}
                                    backdropFilter="blur(25px)"
                                    border="1px solid rgba(82, 62, 155, 0.25)"
                                    borderRadius="10px"
                                    color="#fff"
                                    transformOrigin="left top"
                                    transition="0.5s"
                                >
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        width="100%"
                                        height="100%"
                                        justifyContent="space-between"
                                    >
                                        <Text
                                            // className="case-study"
                                            fontSize="2rem"
                                            fontWeight="bold"
                                            fontFamily="'Acme', sans-serif"
                                            // textTransform="uppercase"
                                            letterSpacing="1px"
                                        >
                                            {data.type}
                                        </Text>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="center"
                                            alignItems="left"
                                            gap={5}
                                            fontFamily="'Acme', sans-serif"
                                            fontSize="2rem"
                                            paddingLeft={"3.5rem"}
                                        >
                                            <HStack gap={7}>
                                                <FaCalendarAlt />
                                                <Text> Nov. 16, 2024 </Text>
                                            </HStack>
                                            <HStack gap={7}>
                                                <FaRegClock />
                                                <Text> 10 AM - 6 PM </Text>
                                            </HStack>
                                        </Box>
                                        <Box
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            width="100%"
                                            height="7rem"
                                            // border="1px"
                                            // borderColor="gray"
                                            borderRadius="10px"
                                            bg={"radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(217,217,217,1) 0%, rgba(153,153,153,1) 0%, rgba(112,112,112,1) 100%)"}
                                            color="white"
                                            boxShadow="0 8px 16px rgba(0, 0, 0, 0.45)"
                                        >
                                            <HStack gap={5}>
                                                <Text
                                                    fontWeight="bold"
                                                >
                                                    {t("buyYourTickets")}
                                                </Text>
                                                <PiTicket size={"30px"} />
                                            </HStack>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Link>
                    ))}
                </Box>
            </motion.div>
        </Box>
    );
};

export default TicketCard;