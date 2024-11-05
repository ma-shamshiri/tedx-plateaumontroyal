import {
    Amin2,
    aminBG,
    aminBGNew,
    baharanBG,
    edwinBG,
    ehsanBGNew,
    erfanBGNew,
    fatemehBGNew,
    hamidrezaBG,
    iranBGNew,
    melikaBG,
    minaBGNew,
    mohammadHasanBGNew,
    motaharehBG,
    pegahBG,
    reihanehBGNew,
    rooyanBGNew,
    saminBG,
    teamGroupPic3,
    unknownBoyProfile,
    unknownProfile,
    zahraBGNew,
} from "../../assets";

export interface Slide {
    id?: number;
    imageSrc?: string;
    profileSrc?: string;
    fullName?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
}

export const slides: Slide[] = [
    // ======================== Samin Majidi ========================
    {
        id: 1,
        imageSrc: saminBG,
        profileSrc: "/samin-majidi",
        firstName: "samin",
        lastName: "majidi",
        fullName: "saminMajidi",
        role: "organizer"
    },

    // ======================== Fatemeh Tavanaei ========================
    {
        id: 2,
        imageSrc: fatemehBGNew,
        profileSrc: "/fatemeh-tavanaei",
        firstName: "fatemeh",
        lastName: "tavanaei",
        fullName: "fatemehTavanaei",
        role: "coOrganizer"
    },

    // ======================== Mohammaderfan Mohit ========================
    {
        id: 3,
        imageSrc: erfanBGNew,
        profileSrc: "/mohammaderfan-mohit",
        firstName: "mohammaderfan",
        lastName: "mohit",
        fullName: "mohammadErfanMohit",
        role: "eventDirector"
    },

    // ======================== Mohammad Amin Shamshiri ========================
    {
        id: 4,
        imageSrc: aminBG,
        profileSrc: "/amin-shamshiri",
        firstName: "mohammadAmin",
        lastName: "shamshiri",
        fullName: "mohammadAminShamshiri",
        role: "techSpecialist"
    },

    // ======================== Pegah Einakchi ========================
    {
        id: 5,
        imageSrc: pegahBG,
        profileSrc: "/pegah-einakchi",
        firstName: "pegah",
        lastName: "einakchi",
        fullName: "pegahEinakchi",
        role: "headOfOperation"
    },

    // ======================== Reihaneh Ghoroghchian ========================
    {
        id: 6,
        imageSrc: reihanehBGNew,
        profileSrc: "/reihaneh-ghoroghchian",
        firstName: "reihaneh",
        lastName: "ghoroghchian",
        fullName: "reihanehGhoroghchian",
        role: "headOfCreativity"
    },

    // ======================== Motahareh Pourrahimi ========================
    {
        id: 7,
        imageSrc: motaharehBG,
        profileSrc: "/motahareh-pourrahimi",
        firstName: "motahareh",
        lastName: "pourrahimi",
        fullName: "motaharehPourrahimi",
        role: "headOfCuration"
    },

    // ======================== Melika Seyedi ========================
    {
        id: 8,
        imageSrc: melikaBG,
        profileSrc: "/melika-seyedi",
        firstName: "melika",
        lastName: "seyedi",
        fullName: "melikaSeyedi",
        role: "headOfSponsorship"
    },



    // ======================== Baharan Nouriinanloo ========================
    {
        id: 9,
        imageSrc: baharanBG,
        profileSrc: "/baharan-nouriinanloo",
        firstName: "baharan",
        lastName: "nouriinanloo",
        fullName: "baharanNouriinanloo",
        role: "headOfContentCreation"
    },

    // ======================== Mohammad Hassan Azad ========================
    {
        id: 10,
        imageSrc: mohammadHasanBGNew,
        profileSrc: "/mohammadhasan-azad",
        firstName: "mohammadHasan",
        lastName: "azad",
        fullName: "mohammadHasanAzad",
        role: "operation"
    },

    // ======================== Mina Taraghi ========================
    {
        id: 11,
        imageSrc: minaBGNew,
        profileSrc: "/mina-taraghi",
        firstName: "mina",
        lastName: "taraghi",
        fullName: "minaTaraghi",
        role: "curation"
    },

    // ======================== Hamidreza Ermagan ========================
    {
        id: 12,
        imageSrc: hamidrezaBG,
        profileSrc: "/hamidreza-ermagan",
        firstName: "hamidreza",
        lastName: "ermagan",
        fullName: "hamidrezaErmagan",
        role: "curation"
    },

    // ======================== Royan Jafari ========================
    {
        id: 13,
        imageSrc: rooyanBGNew,
        profileSrc: "/royan-jafari",
        firstName: "royan",
        lastName: "jafari",
        fullName: "royanJafari",
        role: "sponsorship"
    },

    // ======================== Ehsan Mortazavi ========================
    {
        id: 14,
        imageSrc: ehsanBGNew,
        profileSrc: "/ehsan-mortazavi",
        firstName: "ehsan",
        lastName: "mortazavi",
        fullName: "ehsanMortazavi",
        role: "contentCreation"
    },

    // ======================== Iran Zare ========================
    {
        id: 15,
        imageSrc: iranBGNew,
        profileSrc: "/iran-zare",
        firstName: "iran",
        lastName: "zare",
        fullName: "iranZare",
        role: "contentCreation"
    },

    // ======================== Edwin Meriaux ========================
    {
        id: 16,
        imageSrc: edwinBG,
        profileSrc: "/edwin-meriaux",
        firstName: "edwin",
        lastName: "meriaux",
        fullName: "edwinMeriaux",
        role: "..."
    },

    // ======================== Arash Aghazade ========================
    {
        id: 17,
        imageSrc: unknownBoyProfile,
        profileSrc: "/arash-aghazade",
        firstName: "arash",
        lastName: "aghazade",
        fullName: "arashAghazade",
        role: "..."
    },

    // ======================== Mohammad Bigdeli ========================
    {
        id: 18,
        imageSrc: unknownBoyProfile,
        profileSrc: "/mohammad-bigdeli",
        firstName: "mohammad",
        lastName: "bigdeli",
        fullName: "mohammadBigdeli",
        role: "..."
    },
];
