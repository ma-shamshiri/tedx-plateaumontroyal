import {
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
    unknownBoyProfile,
    unknownProfile,
    zahraBGNew,
} from "../../assets";

export interface Item {
    id?: number;
    imageSrc?: string;
    profileSrc?: string;
    fullName?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
}

export const items: Item[] = [
    // ======================== Samin Majidi ========================
    {
        id: 1,
        imageSrc: saminBG,
        profileSrc: "https://ca.linkedin.com/in/samin-majidi-05b77a250",
        firstName: "samin",
        lastName: "majidi",
        fullName: "saminMajidi",
        role: "organizer"
    },

    // ======================== Fatemeh Tavanaei ========================
    {
        id: 2,
        imageSrc: fatemehBGNew,
        profileSrc: "https://ca.linkedin.com/in/fatemeh-tavanaei-sereshgi-394a7957",
        firstName: "fatemeh",
        lastName: "tavanaei",
        fullName: "fatemehTavanaei",
        role: "coOrganizer"
    },

    // ======================== Mohammaderfan Mohit ========================
    {
        id: 3,
        imageSrc: erfanBGNew,
        profileSrc: "#",
        firstName: "mohammaderfan",
        lastName: "mohit",
        fullName: "mohammadErfanMohit",
        role: "eventDirector"
    },

    // ======================== Mohammad Amin Shamshiri ========================
    {
        id: 4,
        imageSrc: aminBG,
        profileSrc: "https://ca.linkedin.com/in/ma-shamshiri",
        firstName: "mohammadAmin",
        lastName: "shamshiri",
        fullName: "mohammadAminShamshiri",
        role: "techSpecialist"
    },

    // ======================== Pegah Einakchi ========================
    {
        id: 5,
        imageSrc: pegahBG,
        profileSrc: "#",
        firstName: "pegah",
        lastName: "einakchi",
        fullName: "pegahEinakchi",
        role: "headOfOperation"
    },

    // ======================== Reihaneh Ghoroghchian ========================
    {
        id: 6,
        imageSrc: reihanehBGNew,
        profileSrc: "https://ca.linkedin.com/in/reihaneh-ghoroghchian-636661182",
        firstName: "reihaneh",
        lastName: "ghoroghchian",
        fullName: "reihanehGhoroghchian",
        role: "headOfCreativity"
    },

    // ======================== Motahareh Pourrahimi ========================
    {
        id: 7,
        imageSrc: motaharehBG,
        profileSrc: "https://ca.linkedin.com/in/motahareh-pour-ahimi-43550417b",
        firstName: "motahareh",
        lastName: "pourrahimi",
        fullName: "motaharehPourrahimi",
        role: "headOfCuration"
    },

    // ======================== Melika Seyedi ========================
    {
        id: 8,
        imageSrc: melikaBG,
        profileSrc: "https://ca.linkedin.com/in/melika-seyedi-048416140",
        firstName: "melika",
        lastName: "seyedi",
        fullName: "melikaSeyedi",
        role: "headOfSponsorship"
    },

    // ======================== Baharan Nouriinanloo ========================
    {
        id: 9,
        imageSrc: baharanBG,
        profileSrc: "https://ca.linkedin.com/in/baharan-nouriv",
        firstName: "baharan",
        lastName: "nouriinanloo",
        fullName: "baharanNouriinanloo",
        role: "headOfContentCreation"
    },

    // ======================== Mohammad Hassan Azad ========================
    {
        id: 10,
        imageSrc: mohammadHasanBGNew,
        profileSrc: "#",
        firstName: "mohammadHasan",
        lastName: "azad",
        fullName: "mohammadHasanAzad",
        role: "operation"
    },

    // ======================== Mina Taraghi ========================
    {
        id: 11,
        imageSrc: minaBGNew,
        profileSrc: "https://ca.linkedin.com/in/minataraghi?trk=people-guest_people_search-card",
        firstName: "mina",
        lastName: "taraghi",
        fullName: "minaTaraghi",
        role: "curation"
    },

    // ======================== Hamidreza Ermagan ========================
    {
        id: 12,
        imageSrc: hamidrezaBG,
        profileSrc: "https://ca.linkedin.com/in/hrermagan",
        firstName: "hamidreza",
        lastName: "ermagan",
        fullName: "hamidrezaErmagan",
        role: "curation"
    },

    // ======================== Royan Jafari ========================
    {
        id: 13,
        imageSrc: rooyanBGNew,
        profileSrc: "https://ca.linkedin.com/in/royan-jafari",
        firstName: "royan",
        lastName: "jafari",
        fullName: "royanJafari",
        role: "sponsorship"
    },

    // ======================== Ehsan Mortazavi ========================
    {
        id: 14,
        imageSrc: ehsanBGNew,
        profileSrc: "#",
        firstName: "ehsan",
        lastName: "mortazavi",
        fullName: "ehsanMortazavi",
        role: "contentCreation"
    },

    // ======================== Iran Zare ========================
    {
        id: 15,
        imageSrc: iranBGNew,
        profileSrc: "#",
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
        profileSrc: "/#",
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
