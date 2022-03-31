export interface ICars {
  id: string;
  image: string;
  color: string;
}

export interface ICarsResponse {
  id: string;
  cars: ICars[];
  model: string;
  brand: string;
  price: number;
  imageShowcase: string;
  brandLogo: string;
}
