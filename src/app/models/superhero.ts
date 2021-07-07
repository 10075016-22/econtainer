export interface Superhero {
    id: number;
    name: string;
    appearance: Iappearance;
    powerstats: Ipowerstats;
    
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