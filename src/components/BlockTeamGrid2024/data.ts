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
        role: "Event Director"
    },

    // ======================== Reihaneh Ghoroghchian ========================
    {
        id: 4,
        imageSrc: reihanehBGNew,
        profileSrc: "https://ca.linkedin.com/in/reihaneh-ghoroghchian-636661182",
        firstName: "reihaneh",
        lastName: "ghoroghchian",
        fullName: "reihanehGhoroghchian",
        role: "creativity"
    },

    // ======================== Mina Taraghi ========================
    {
        id: 5,
        imageSrc: minaBGNew,
        profileSrc: "https://ca.linkedin.com/in/minataraghi?trk=people-guest_people_search-card",
        firstName: "mina",
        lastName: "taraghi",
        fullName: "minaTaraghi",
        role: "marketing"
    },

    // ======================== Motahareh Pourrahimi ========================
    {
        id: 6,
        imageSrc: motaharehBG,
        profileSrc: "https://ca.linkedin.com/in/motahareh-pour-ahimi-43550417b",
        firstName: "motahareh",
        lastName: "pourrahimi",
        fullName: "motaharehPourrahimi",
        role: "curation"
    },

    // ======================== Pegah Einakchi ========================
    {
        id: 7,
        imageSrc: pegahBG,
        profileSrc: "#",
        firstName: "pegah",
        lastName: "einakchi",
        fullName: "pegahEinakchi",
        role: "operation"
    },

    // ======================== Melika Seyedi ========================
    {
        id: 8,
        imageSrc: melikaBG,
        profileSrc: "https://ca.linkedin.com/in/melika-seyedi-048416140",
        firstName: "melika",
        lastName: "seyedi",
        fullName: "melikaSeyedi",
        role: "sponsorship"
    },

    // ======================== Ehsan Mortazavi ========================
    {
        id: 9,
        imageSrc: ehsanBGNew,
        profileSrc: "#",
        firstName: "ehsan",
        lastName: "mortazavi",
        fullName: "ehsanMortazavi",
        role: "marketing"
    },


    // ======================== Hamidreza Ermagan ========================
    {
        id: 10,
        imageSrc: hamidrezaBG,
        profileSrc: "https://ca.linkedin.com/in/hrermagan",
        firstName: "hamidreza",
        lastName: "ermagan",
        fullName: "hamidrezaErmagan",
        role: "curation"
    },

    // ======================== Baharan Nouriinanloo ========================
    {
        id: 11,
        imageSrc: baharanBG,
        profileSrc: "https://ca.linkedin.com/in/baharan-nouriv",
        firstName: "baharan",
        lastName: "nouriinanloo",
        fullName: "baharanNouriinanloo",
        role: "marketing"
    },

    // ======================== Royan Jafari ========================
    {
        id: 12,
        imageSrc: rooyanBGNew,
        profileSrc: "https://ca.linkedin.com/in/royan-jafari",
        firstName: "royan",
        lastName: "jafari",
        fullName: "royanJafari",
        role: "sponsorship"
    },

    // ======================== Mohammad Hassan Azad Jafari ========================
    {
        id: 13,
        imageSrc: mohammadHasanBGNew,
        profileSrc: "#",
        firstName: "mohammadHasan",
        lastName: "azad",
        fullName: "mohammadHasanAzad",
        role: "marketing"
    },

    // ======================== Iran Zare ========================
    {
        id: 14,
        imageSrc: iranBGNew,
        profileSrc: "#",
        firstName: "iran",
        lastName: "zare",
        fullName: "iranZare",
        role: "marketing"
    },

    // ======================== Amin Ghasemi ========================
    {
        id: 15,
        imageSrc: aminBGNew,
        profileSrc: "#",
        firstName: "amin",
        lastName: "ghasemi",
        fullName: "aminGhasemi",
        role: "creativity"
    },

    // ======================== Zahra Attaran ========================
    {
        id: 16,
        imageSrc: zahraBGNew,
        profileSrc: "#",
        firstName: "zahra",
        lastName: "attaran",
        fullName: "zahraAttaran",
        role: "operation"
    },

    // ======================== Mohammad Amin Shamshiri ========================
    {
        id: 17,
        imageSrc: aminBG,
        profileSrc: "https://ca.linkedin.com/in/ma-shamshiri",
        firstName: "mohammadAmin",
        lastName: "shamshiri",
        fullName: "mohammadAminShamshiri",
        role: "Tech Specialist"
    },
    {
        id: 18,
        imageSrc: "",
        profileSrc: "",
        firstName: "",
        lastName: "",
        fullName: "",
        role: ""
    },

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
