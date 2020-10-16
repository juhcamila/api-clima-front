export interface Clima {
    temp_min: number;
    temp_max: number;
    cidade: string;
    clima: string;
    img_url: string
}

export interface ClimaDefault {
    long: number;
    lat: number;
}

export interface ClimaSubmit {
    name: string;
}

