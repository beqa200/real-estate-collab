export interface IFaq  {
    id: number;
    question: string;
    answer: string
}

export interface IRating {
    id: number;
    name: string;
    title: string
    location: string;
    testimonial: string;
    image: string;
    rating: number;
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
    }[],
    location: string;
    property_type: number;
    size: number;
    build_year: number
}

export type TFormData = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    inquiry_type: string;
    heard_about: string;
    message: string;
    agree_to_terms: boolean
}
