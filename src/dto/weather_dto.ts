export interface WeatherDTO {
  city: string;
  country: string;
}

export type WeatherRequestDTO = WeatherDTO[];

export interface WeatherResponseDTO {
  id?: number;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  temperature: number;
  humidity: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface WeatherDashboardDTO {
  totalCities: number;
  data: WeatherResponseDTO[];
}
