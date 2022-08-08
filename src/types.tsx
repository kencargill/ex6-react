export interface Quote {
    text: string;
    author: string;
    id: string
};

export interface Weather {
    context: [];
    type: string;
    geometry: [];
    properties: Period[]
}
export interface Period {
    name: string;
    temperature: number;
    icon: string;
    detailedForecast: string;
}