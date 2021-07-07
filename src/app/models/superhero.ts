export interface Superhero {
    id: number;
    name: string;
    slug: string;
    appearance: Iappearance;
    powerstats: Ipowerstats;
    biography: Ibiography;
    images: IImages;
}

interface IImages {
    xs: string;
    sm: string;
    md: string;
    lg: string;
}
interface Iappearance {
    eyeColor: string;
    gender: string;
    hairColor: string;
    race: string;
}
interface Ipowerstats {
    combat: number;
    durability: number;
    intelligence: number;
    power: number;
    speed: number;
    strength: number;
}
interface Ibiography {
    fullName: string;
    alterEgos: string;
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
}