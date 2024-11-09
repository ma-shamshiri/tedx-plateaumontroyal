import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from "./HomePage";
import Event2023Page from "./Event2023Page";
import JoinUsTeamPage from "./JoinUsTeamPage";
import JoinUsSponsorPage from "./JoinUsSponsorPage";
import JoinUsPage from "./JoinUsPage";
import JoinUsSpeakerPage from "./JoinUsSpeakerPage";
import MediaPage from "./MediaPage";
import SaminMajidi from "../components/TeamMembers/SaminMajidi";
import FatemehTavanaei from "../components/TeamMembers/FatemehTavanaei";
import ReihanehGhoroghchian from "../components/TeamMembers/ReihanehGhoroghchian";
import FathimaNihathaLathiff from "../components/TeamMembers/FathimaNihathaLathiff";
import HamidrezaErmagan from "../components/TeamMembers/HamidrezaErmagan";
import BaharanNouriinanloo from "../components/TeamMembers/BaharanNouriinanloo";
import MelikaSeyedi from "../components/TeamMembers/MelikaSeyedi";
import MohammadZaid from "../components/TeamMembers/MohammadZaid";
import MinaTaraghi from "../components/TeamMembers/MinaTaraghi";
import MotaharehPourrahimi from "../components/TeamMembers/MotaharehPourrahimi";
import AryanaHaghjoo from "../components/TeamMembers/AryanaHaghjoo";
import PegahEinakchi from "../components/TeamMembers/PegahEinakchi";
import RoyanJafari from "../components/TeamMembers/RoyanJafari";
import EdwinMeriaux from "../components/TeamMembers/EdwinMeriaux";
import GezalNajafi from "../components/TeamMembers/GezalNajafi";
import AminShamshiri from "../components/TeamMembers/AminShamshiri";
import AndrewChurchil from "../components/Speakers/AndrewChurchil";
import MyraVirgil from "../components/Speakers/MyraVirgil";
import KiraDolhan from "../components/Speakers/KiraDolhan";
import FloreDeshayes from "../components/Speakers/FloreDeshayes";
import LeilaKosseim from "../components/Speakers/LeilaKosseim";
import JanetPerlman from "../components/Speakers/JanetPerlman";
import PeggyBell from "../components/Speakers/PeggyBell";
import AlinaGutierrezMejia from "../components/Speakers/AlinaGutierrezMejia";
import MohammaderfanMohit from "../components/TeamMembers/MohammaderfanMohit";
import ZahraAhmadi from "../components/TeamMembers/ZahraAhmadi";
import SpeakersPage from "./SpeakersPage";
import TeamPage from "./TeamPage";
// import TeamPageDesign1 from './TeamPageDesign1';
// import TeamPageDesign2 from './TeamPageDesign2';
// import TeamPageDesign3 from './TeamPageDesign3';
import EventPage from "./EventPage";
import Event2024Page from "./Event2024Page";
import VideoGalleryPage from './VideoGalleryPage';
import SaminMajidi2024 from '../components/TeamMembers2024/SaminMajidi2024';
import FatemehTavanaei2024 from '../components/TeamMembers2024/FatemehTavanaei2024';
import ReihanehGhoroghchian2024 from '../components/TeamMembers2024/ReihanehGhoroghchian2024';
import MohammaderfanMohit2024 from '../components/TeamMembers2024/MohammaderfanMohit2024';
import HamidrezaErmagan2024 from '../components/TeamMembers2024/HamidrezaErmagan2024';
import BaharanNouriinanloo2024 from '../components/TeamMembers2024/BaharanNouriinanloo2024';
import MelikaSeyedi2024 from '../components/TeamMembers2024/MelikaSeyedi2024';
import MinaTaraghi2024 from '../components/TeamMembers2024/MinaTaraghi2024';
import MotaharehPourrahimi2024 from '../components/TeamMembers2024/MotaharehPourrahimi2024';
import PegahEinakchi2024 from '../components/TeamMembers2024/PegahEinakchi2024';
import RoyanJafari2024 from '../components/TeamMembers2024/RoyanJafari2024';
import EdwinMeriaux2024 from '../components/TeamMembers2024/EdwinMeriaux2024';
import AminShamshiri2024 from '../components/TeamMembers2024/AminShamshiri2024';
import MohammadHassanAzad2024 from '../components/TeamMembers2024/MohammadHassanAzad2024';
import MohammadBigdeli2024 from '../components/TeamMembers2024/MohammadBigdeli2024';
import EhsanMortazavi2024 from '../components/TeamMembers2024/EhsanMortazavi2024';
import IranZare2024 from '../components/TeamMembers2024/IranZare2024';
import ArashAghazade2024 from '../components/TeamMembers2024/ArashAghazade2024';
import BrianRobinson from '../components/Speakers2024/BrianRobinson';
import CharlesOnu from '../components/Speakers2024/CharlesOnu';
import ChristopherBuddle from '../components/Speakers2024/ChristopherBuddle';
import EhsonKazerooni from '../components/Speakers2024/EhsonKazerooni';
import HenryMintzberg from '../components/Speakers2024/HenryMintzberg';
import SamiRamirez from '../components/Speakers2024/SamiRamirez';
import ShaunLovejoy from '../components/Speakers2024/ShaunLovejoy';
import SylvainAllard from '../components/Speakers2024/SylvainAllard';
import ValerieDesroches from '../components/Speakers2024/ValerieDesroches';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/tedx-2023/" element={<Event2023Page />} />
        <Route path="/tedx-2024/" element={<Event2024Page />} />
        <Route path="/photos/" element={<MediaPage />} />
        <Route path="/tedx-2023/videos/" element={<VideoGalleryPage />} />
        <Route path="/event/" element={<EventPage />} />
        <Route path="/joinus/" element={<JoinUsPage />} />
        <Route path="/joinus/team/" element={<JoinUsTeamPage />} />
        <Route path="/joinus/speaker/" element={<JoinUsSpeakerPage />} />
        <Route path="/joinus/sponsor/" element={<JoinUsSponsorPage />} />
        <Route path="/tedx-2023/myra-virgil/" element={<MyraVirgil />} />
        <Route path="/tedx-2023/kira-dolhan/" element={<KiraDolhan />} />
        <Route path="/tedx-2023/flore-deshayes/" element={<FloreDeshayes />} />
        <Route path="/tedx-2023/leila-kosseim/" element={<LeilaKosseim />} />
        <Route path="/tedx-2023/janet-perlman/" element={<JanetPerlman />} />
        <Route path="/tedx-2023/peggy-bell/" element={<PeggyBell />} />
        <Route path="/tedx-2023/alina-gutierrez-mejia/" element={<AlinaGutierrezMejia />} />
        <Route path="/tedx-2023/andrew-churchil/" element={<AndrewChurchil />} />
        {/* <Route path="/team-design1/" element={<TeamPageDesign1 />} /> */}
        {/* <Route path="/team-design2/" element={<TeamPageDesign2 />} /> */}
        {/* <Route path="/team-design3/" element={<TeamPageDesign3 />} /> */}
        <Route path="/tedx-2023/samin-majidi/" element={<SaminMajidi />} />
        <Route path="/tedx-2023/fatemeh-tavanaei/" element={<FatemehTavanaei />} />
        <Route path="/tedx-2023/reihaneh-ghoroghchian/" element={<ReihanehGhoroghchian />} />
        <Route path="/tedx-2023/mohammaderfan-mohit/" element={<MohammaderfanMohit />} />
        <Route path="/tedx-2023/zahra-ahmadi/" element={<ZahraAhmadi />} />
        <Route path="/tedx-2023/fathima-nihatha-lathiff/" element={<FathimaNihathaLathiff />} />
        <Route path="/tedx-2023/hamidreza-ermagan/" element={<HamidrezaErmagan />} />
        <Route path="/tedx-2023/baharan-nouriinanloo/" element={<BaharanNouriinanloo />} />
        <Route path="/tedx-2023/melika-seyedi/" element={<MelikaSeyedi />} />
        <Route path="/tedx-2023/mohammad-zaid/" element={<MohammadZaid />} />
        <Route path="/tedx-2023/mina-taraghi/" element={<MinaTaraghi />} />
        <Route path="/tedx-2023/motahareh-pourrahimi/" element={<MotaharehPourrahimi />} />
        <Route path="/tedx-2023/aryana-haghjoo/" element={<AryanaHaghjoo />} />
        <Route path="/tedx-2023/pegah-einakchi/" element={<PegahEinakchi />} />
        <Route path="/tedx-2023/royan-jafari/" element={<RoyanJafari />} />
        <Route path="/tedx-2023/edwin-meriaux/" element={<EdwinMeriaux />} />
        <Route path="/tedx-2023/gezal-najafi/" element={<GezalNajafi />} />
        <Route path="/tedx-2023/amin-shamshiri/" element={<AminShamshiri />} />

        <Route path="/team/" element={<TeamPage />} />
        <Route path="/team/samin-majidi/" element={<SaminMajidi2024 />} />
        <Route path="/team/fatemeh-tavanaei/" element={<FatemehTavanaei2024 />} />
        <Route path="/team/reihaneh-ghoroghchian/" element={<ReihanehGhoroghchian2024 />} />
        <Route path="/team/mohammaderfan-mohit/" element={<MohammaderfanMohit2024 />} />
        <Route path="/team/hamidreza-ermagan/" element={<HamidrezaErmagan2024 />} />
        <Route path="/team/baharan-nouriinanloo/" element={<BaharanNouriinanloo2024 />} />
        <Route path="/team/melika-seyedi/" element={<MelikaSeyedi2024 />} />
        <Route path="/team/mina-taraghi/" element={<MinaTaraghi2024 />} />
        <Route path="/team/motahareh-pourrahimi/" element={<MotaharehPourrahimi2024 />} />
        <Route path="/team/pegah-einakchi/" element={<PegahEinakchi2024 />} />
        <Route path="/team/royan-jafari/" element={<RoyanJafari2024 />} />
        <Route path="/team/edwin-meriaux/" element={<EdwinMeriaux2024 />} />
        <Route path="/team/amin-shamshiri/" element={<AminShamshiri2024 />} />
        <Route path="/team/mohammad-hasan-azad/" element={<MohammadHassanAzad2024 />} />
        <Route path="/team/mohammad-bigdeli/" element={<MohammadBigdeli2024 />} />
        <Route path="/team/ehsan-mortazavi/" element={<EhsanMortazavi2024 />} />
        <Route path="/team/iran-zare/" element={<IranZare2024 />} />
        <Route path="/team/arash-aghazade/" element={<ArashAghazade2024 />} />

        <Route path="/speakers/" element={<SpeakersPage />} />
        <Route path="/speakers/brian-robinson" element={<BrianRobinson />} />
        <Route path="/speakers/charles-onu" element={<CharlesOnu />} />
        <Route path="/speakers/christopher-buddle" element={<ChristopherBuddle />} />
        <Route path="/speakers/ehson-kazerooni" element={<EhsonKazerooni />} />
        <Route path="/speakers/henry-mintzberg" element={<HenryMintzberg />} />
        <Route path="/speakers/sami-ramirez" element={<SamiRamirez />} />
        <Route path="/speakers/shaun-lovejoy" element={<ShaunLovejoy />} />
        <Route path="/speakers/sylvain-allard" element={<SylvainAllard />} />
        <Route path="/speakers/valerie-desroches" element={<ValerieDesroches />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
