import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { MenuLinksProps } from "./interfaces";
import { SubLinksBox } from "./LinkSubItems";
import { useTranslation } from "react-i18next";

export const MenuLinks = ({ menuLinks }: MenuLinksProps) => {
  const { t, i18n } = useTranslation();

  return (
    <ul className="flex px-1 lg:px-4">
      {menuLinks.map((link) => (
        <div className="relative group" key={link.name}>
          <Box
            as="li"
            paddingX={{ lg:"1rem", xl:"2.2rem" }}
            borderRadius="lg"
            cursor="pointer"
            fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
            dir={i18n.language === "fa" ? "rtl" : "ltr"}
          >
            <Text
              color={useColorModeValue("gray.800", "gray.200")}
              fontSize={{ md: "1rem", lg:"1.4rem", xl: "1.6rem" }}
              // fontFamily="'Acme', sans-serif"
              // fontFamily="'Englebert', cursive"
              // fontWeight="semibold"
            >
              {t(link.name)}
            </Text>
          </Box>

          <div className="hidden group-hover:block">
            <SubLinksBox
              subLinks={link.subLinks ?? []}
              extraLinks={link.extraLinks}
            />
          </div>
        </div>
      ))}
    </ul>
  );
};
