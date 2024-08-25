import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Skeleton,
  Text,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Typed from "react-typed";
import { event2023 } from "../../assets";

const SuperscriptX = chakra("sup", {
  baseStyle: {
    fontSize: "0.6em",
    top: "-0.5em",
    position: "relative",
  },
});

const LowercaseSpan = chakra("span", {
  baseStyle: {
    textTransform: "lowercase",
  },
});

export const BlockHero2024: React.FC = () => {
  const { t } = useTranslation();

  const [imageLoaded, setImageLoaded] = useState(false);
  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleImageLoad = () => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 0);
  };

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  const numElements = 2;

  const [isHoveredArray, setIsHoveredArray] = useState(
    Array(numElements).fill(false)
  );

  const handleHover = (index: number) => {
    setIsHoveredArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = true;
      return newArray;
    });
  };

  const handleUnhover = (index: number) => {
    setIsHoveredArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = false;
      return newArray;
    });
  };

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {}, [boxLoaded]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <Box className="block block--dark" bg="#000">
          <Box
            className="block block--dark"
            padding="6rem 2rem 6rem 2rem"
            bg={useColorModeValue("#F1F1F1", "#000")}
            color="#7b858b"
            // display={{ base: "none", xl: "block" }}
            // _hover={{ bg: "red" }}
            // transition="background 0.3s ease-in-out" // Adjust the duration and easing function as needed
          >
            <Box
              className="block__header container"
              textAlign="left"
              maxWidth="1140px"
              margin="0 auto"
            >
              {/* <Text
                className="h2 block__heading"
                color={useColorModeValue("#FF3A2D", "#fff")}
                marginBottom="1rem"
                marginTop="0"
                fontSize="4rem"
                fontWeight="bold"
                lineHeight="1.1"
              >
                {t("hero2024Title")}
              </Text> */}

              <Box
                className="h2 block__heading"
                color={useColorModeValue("#FF3A2D", "#fff")}
                marginBottom="1rem"
                marginTop="0"
                fontSize={{ base: "2.2rem", md: "2.5rem", lg: "2.6rem", xl: "3.2rem" }}
                fontWeight="bold"
                lineHeight="1.5"
                textAlign={{ base: "center", lg: "left" }}
                height={{ base: "5rem", md:"initial", lg: "initial" }}
              >
                <Typed
                  strings={[t("hero2024Title")]}
                  typeSpeed={50}
                  backSpeed={20}
                  loop
                  backDelay={3000}
                />
              </Box>

              <Text
                className="p"
                marginTop={10}
                color={useColorModeValue("gray.800", "#FF3A2D")}
                fontSize={{ base: "1.6rem", md: "1.7rem", lg: "2rem", xl: "2rem" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                {t("hero2024SubTitle")}                
              </Text>
            </Box>
          </Box>

          <Flex
            className="heroImageContainer"
            width={"100%"}
            justifyContent="center"
            position="relative"
            alignItems="center"
          >
            <Skeleton
              isLoaded={imageLoaded}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                className="heroImage"
                src={event2023}
                width="100%"
                objectFit="fill"
                opacity="0"
                style={{ transition: "opacity 1s ease-in-out" }}
                onLoad={(e) => {
                  e.currentTarget.style.opacity = "0.8";
                  handleImageLoad();
                }}
              />
            </Skeleton>
          </Flex>
          <Flex
            className="blockBelowHero"
            justifyContent="center"
            position="absolute"
            top={{
              // sm: "1%",
              base: "1%",
              md: "3%",
              lg: "9%",
              xl: "35%",
            }}
            transform="translateY(-50%)"
            width="100%"
          ></Flex>
        </Box>
      </motion.div>
    </>
  );
};

// export default BlockHero5;
