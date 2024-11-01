import {
    aminBG,
    aminBGNew,
    baharanBG,
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
        role: "Event Director"
    },

    // ======================== Mohammad Amin Shamshiri ========================
    {
        id: 17,
        imageSrc: aminBG,
        profileSrc: "/amin-shamshiri",
        firstName: "mohammadAmin",
        lastName: "shamshiri",
        fullName: "mohammadAminShamshiri",
        role: "Tech Specialist"
    },

    // ======================== Pegah Einakchi ========================
    {
        id: 5,
        imageSrc: pegahBG,
        profileSrc: "/pegah-einakchi",
        firstName: "pegah",
        lastName: "einakchi",
        fullName: "pegahEinakchi",
        role: "Head of Operation"
    },

    // ======================== Reihaneh Ghoroghchian ========================
    {
        id: 6,
        imageSrc: reihanehBGNew,
        profileSrc: "/reihaneh-ghoroghchian",
        firstName: "reihaneh",
        lastName: "ghoroghchian",
        fullName: "reihanehGhoroghchian",
        role: "Head of Creativity"
    },

    // ======================== Motahareh Pourrahimi ========================
    {
        id: 7,
        imageSrc: motaharehBG,
        profileSrc: "/motahareh-pourrahimi",
        firstName: "motahareh",
        lastName: "pourrahimi",
        fullName: "motaharehPourrahimi",
        role: "Head of Curation"
    },

    // ======================== Melika Seyedi ========================
    {
        id: 8,
        imageSrc: melikaBG,
        profileSrc: "/melika-seyedi",
        firstName: "melika",
        lastName: "seyedi",
        fullName: "melikaSeyedi",
        role: "Head of Sponsorship"
    },



    // ======================== Baharan Nouriinanloo ========================
    {
        id: 10,
        imageSrc: baharanBG,
        profileSrc: "/baharan-nouriinanloo",
        firstName: "baharan",
        lastName: "nouriinanloo",
        fullName: "baharanNouriinanloo",
        role: "Head of Content Creation"
    },

    // ======================== Mohammad Hassan Azad ========================
    {
        id: 14,
        imageSrc: mohammadHasanBGNew,
        profileSrc: "/mohammadhasan-azad",
        firstName: "mohammadHasan",
        lastName: "azad",
        fullName: "mohammadHasanAzad",
        role: "Operation"
    },

    // ======================== Mina Taraghi ========================
    {
        id: 9,
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
        id: 11,
        imageSrc: ehsanBGNew,
        profileSrc: "/ehsan-mortazavi",
        firstName: "ehsan",
        lastName: "mortazavi",
        fullName: "ehsanMortazavi",
        role: "Content Creation"
    },

    // ======================== Iran Zare ========================
    {
        id: 15,
        imageSrc: iranBGNew,
        profileSrc: "/iran-zare",
        firstName: "iran",
        lastName: "zare",
        fullName: "iranZare",
        role: "Content Creation"
    },

    // ======================== Amin Ghasemi ========================
    {
        id: 16,
        imageSrc: aminBGNew,
        profileSrc: "/amin-ghasemi",
        firstName: "amin",
        lastName: "ghasemi",
        fullName: "aminGhasemi",
        role: "creativity"
    },

];
