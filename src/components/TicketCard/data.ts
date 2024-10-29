export interface CardData {
    type: string;
    price: string;
    frontCardColor: string;
    ticketColor: string;
    bgText: string;
}

export const cardData: CardData[] = [
    {
        type: "generalAdmissions",
        price: "25$",
        frontCardColor: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(117,39,161,1) 0%, rgba(82,41,135,1) 0%, rgba(26,5,55,1) 100%)",
        ticketColor: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(217,217,217,1) 0%, rgba(153,153,153,1) 0%, rgba(43,43,43,1) 100%)",
        bgText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ab reprehenderit saepe, voluptatum sed cupiditate minus deleniti corporis, aperiam odio accusantium nesciunt expedita, harum quibusdam nostrum impedit optio nemo placeat quo ratione aut omnis. Architecto asperiores explicabo cumque ratione est.",
    },
    {
        type: "premiumSupporter",
        price: "25$",
        frontCardColor: "radial-gradient(circle, rgba(0,221,155,1) 0%, rgba(0,94,68,1) 100%)",
        ticketColor: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(217,217,217,1) 0%, rgba(153,153,153,1) 0%, rgba(43,43,43,1) 100%)",
        bgText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ab reprehenderit saepe, voluptatum sed cupiditate minus deleniti corporis, aperiam odio accusantium nesciunt expedita, harum quibusdam nostrum impedit optio nemo placeat quo ratione aut omnis. Architecto asperiores explicabo cumque ratione est.",
    },
];
