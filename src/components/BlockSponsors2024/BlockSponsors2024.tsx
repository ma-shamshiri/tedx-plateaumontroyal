import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from 'framer-motion';
import SponsorCard from "./SponsorCard";
// import { BlockSponsorsCarousel } from "../BlockSponsorsCarousel";
// import BlockSponsorsCarousel2024 from "../BlockSponsorsCarousel2024";
import {
  shakour,
  dental,
  bazaar,
  hafteh,
  medad,
  radaii
} from "../../assets";

const variants: { [key: string]: any } = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

const BlockSponsors2024: React.FC = () => {
  const { t, i18n } = useTranslation();

  const ref = useRef<HTMLDivElement>(null);

  const numElements = 6;

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

  return (
    <Box
      padding="6rem 2rem"
      paddingTop={{ base: "5rem", lg: "10rem" }}
      paddingBottom={{ base: "5rem", lg: "10rem" }}
      bg={useColorModeValue("#EFE8D6", "#0D1224")}
      overflow={"hidden"}
    >
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <Box
          className="block__header container"
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
            {t("sponsorPageTitle")}
          </Text>

          <Text
            className="p"
            color={useColorModeValue("gray.700", "white")}
            marginBottom="1rem"
            marginTop="0"
            fontSize={{ base: "1.5rem", lg: "2.1rem" }}
            lineHeight="1.5"
          >
            {t("sponsorPageSubTitle")}
          </Text>
        </Box>
      </motion.div>
      <Box
        className="sponsor_grid_container"
        paddingTop={{ base: "2rem", lg: "5rem" }}
        textAlign="center"
        margin="0 auto"
        maxWidth={"1100px"}
      >
        {/* <BlockSponsorsCarousel2024 /> */}

        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 3, xl: 3 }}
          // spacingX={{ base: "1rem", md: "0rem", lg: "1rem"}}
          spacingY={{ base: "4rem", md: "5rem", lg: "5rem" }}
        >
          {/* ======================== ARASH ======================== */}
          <SponsorCard
            isHovered={isHoveredArray[2]}
            handleHover={() => handleHover(2)}
            handleUnhover={() => handleUnhover(2)}
            imageUrl={shakour}
            sourceUrl={`https://www.londonogroup.com/broker/viewBroker.php?broker=114792`}
          />

          {/* ======================== BAZAAR ======================== */}
          <SponsorCard
            isHovered={isHoveredArray[3]}
            handleHover={() => handleHover(3)}
            handleUnhover={() => handleUnhover(3)}
            imageUrl={bazaar}
            sourceUrl={`https://www.bazaarfood.ca/`}
          />

          {/* ======================== DENTAL CLIKIQUE ======================== */}
          <SponsorCard
            isHovered={isHoveredArray[4]}
            handleHover={() => handleHover(4)}
            handleUnhover={() => handleUnhover(4)}
            imageUrl={dental}
            sourceUrl={`https://clinique-arya.ca/`}
          />

          {/* ======================== MEDAD ======================== */}
          <SponsorCard
            isHovered={isHoveredArray[5]}
            handleHover={() => handleHover(5)}
            handleUnhover={() => handleUnhover(5)}
            imageUrl={medad}
            sourceUrl={`https://www.medad.ca/`}
          />

          {/* ======================== HAFTEH ======================== */}
          <SponsorCard
            isHovered={isHoveredArray[5]}
            handleHover={() => handleHover(5)}
            handleUnhover={() => handleUnhover(5)}
            imageUrl={hafteh}
            sourceUrl={`https://hafteh.ca/`}
          />

          {/* ======================== RADAII ======================== */}
          <SponsorCard
            isHovered={isHoveredArray[1]}
            handleHover={() => handleHover(1)}
            handleUnhover={() => handleUnhover(1)}
            imageUrl={radaii}
            sourceUrl={`https://linktr.ee/AmirRadaii`}
          />
        </SimpleGrid>

      </Box>

    </Box>
  );
};

export default BlockSponsors2024;