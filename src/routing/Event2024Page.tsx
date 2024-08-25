import React, { useEffect } from "react";
import { BlockFooter } from "../components/BlockFooter";
import { BlockHero2024 } from "../components/BlockHero2024";
import { Navigationbar } from "../components/Navigationbar";
import { PageTransition } from "../components/PageTransition";
import { PageTransition2 } from "../components/PageTransition2";

const Event2024Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigationbar />
      <BlockHero2024 />
      <BlockFooter />
    </>
  );
};

// export default PageTransition(Event2024Page);
// export default PageTransition2(Event2024Page);
export default Event2024Page;
