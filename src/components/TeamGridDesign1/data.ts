import {
    aminBGNew,
    baharanBG,
    ehsanBGNew,
    erfanBGNew,
    fatemehBGNew,
    hamidrezaBG,
    iranBGNew,
    melikaBG,
    minaBGNew,
    motaharehBG,
    pegahBG,
    reihanehBGNew,
    rooyanBGNew,
    saminBG,
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
        role: "operation"
    },

    // ======================== Reihaneh Ghoroghchian ========================
    {
        id: 4,
        imageSrc: reihanehBGNew,
        profileSrc: "/reihaneh-ghoroghchian",
        firstName: "reihaneh",
        lastName: "ghoroghchian",
        fullName: "reihanehGhoroghchian",
        role: "creativity"
    },

    // ======================== Mina Taraghi ========================
    {
        id: 5,
        imageSrc: minaBGNew,
        profileSrc: "/mina-taraghi",
        firstName: "mina",
        lastName: "taraghi",
        fullName: "minaTaraghi",
        role: "marketing"
    },

    // ======================== Motahareh Pourrahimi ========================
    {
        id: 6,
        imageSrc: motaharehBG,
        profileSrc: "/motahareh-pourrahimi",
        firstName: "motahareh",
        lastName: "pourrahimi",
        fullName: "motaharehPourrahimi",
        role: "curation"
    },

    // ======================== Pegah Einakchi ========================
    {
        id: 7,
        imageSrc: pegahBG,
        profileSrc: "/pegah-einakchi",
        firstName: "pegah",
        lastName: "einakchi",
        fullName: "pegahEinakchi",
        role: "operation"
    },

    // ======================== Melika Seyedi ========================
    {
        id: 8,
        imageSrc: melikaBG,
        profileSrc: "/melika-seyedi",
        firstName: "melika",
        lastName: "seyedi",
        fullName: "melikaSeyedi",
        role: "sponsorship"
    },

    // ======================== Ehsan Mortazavi ========================
    {
        id: 9,
        imageSrc: ehsanBGNew,
        profileSrc: "/ehsan-mortazavi",
        firstName: "ehsan",
        lastName: "mortazavi",
        fullName: "ehsanMortazavi",
        role: "marketing"
    },


    // ======================== Hamidreza Ermagan ========================
    {
        id: 10,
        imageSrc: hamidrezaBG,
        profileSrc: "/hamidreza-ermagan",
        firstName: "hamidreza",
        lastName: "ermagan",
        fullName: "hamidrezaErmagan",
        role: "curation"
    },

    // ======================== Baharan Nouriinanloo ========================
    {
        id: 11,
        imageSrc: baharanBG,
        profileSrc: "/baharan-nouriinanloo",
        firstName: "baharan",
        lastName: "nouriinanloo",
        fullName: "baharanNouriinanloo",
        role: "marketing"
    },

    // ======================== Royan Jafari ========================
    {
        id: 12,
        imageSrc: rooyanBGNew,
        profileSrc: "/royan-jafari",
        firstName: "royan",
        lastName: "jafari",
        fullName: "royanJafari",
        role: "sponsorship"
    },

    // ======================== Mohammad Hassan Azad Jafari ========================
    {
        id: 13,
        imageSrc: rooyanBGNew,
        profileSrc: "/mohammadhasan-azad",
        firstName: "mohammadHasan",
        lastName: "azad",
        fullName: "mohammadHasanAzad",
        role: "marketing"
    },

    // ======================== Iran Zare ========================
    {
        id: 14,
        imageSrc: iranBGNew,
        profileSrc: "/iran-zare",
        firstName: "iran",
        lastName: "zare",
        fullName: "iranZare",
        role: "marketing"
    },

    // ======================== Amin Ghasemi ========================
    {
        id: 13,
        imageSrc: aminBGNew,
        profileSrc: "/amin-ghasemi",
        firstName: "amin",
        lastName: "ghasemi",
        fullName: "aminGhasemi",
        role: "creativity"
    },

    // ======================== Zahra Attaran ========================
    {
        id: 15,
        imageSrc: zahraBGNew,
        profileSrc: "/zahra-attaran",
        firstName: "zahra",
        lastName: "attaran",
        fullName: "zahraAttaran",
        role: "operation"
    },

    // ======================== Mohammad Amin Shamshiri ========================
    // {
    //     id: 16,
    //     imageSrc: aminBG,
    //     profileSrc: "/amin-shamshiri",
    //     firstName: "mohammadAmin",
    //     lastName: "shamshiri",
    //     fullName: "mohammadAminShamshiri",
    //     role: "webmaster"
    // },

    // ======================== Group Image ========================
    // {
    //     id: 18,
    //     imageSrc: sliderImage1,
    //     profileSrc: "#",
    //     firstName: "",
    //     lastName: "",
    //     fullName: "",
    //     role: ""
    // },
];
