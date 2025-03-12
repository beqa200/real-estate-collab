export interface IFaq  {
    id: number;
    question: string;
    answer: string
}

export interface IRating {
    id: number;
    name: string;
    title: string
    loaction: string;
    testimonial: string;
    image: string;
}

export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    images: {
        id: number;
        image: string;
        property: number;
    }[];
}