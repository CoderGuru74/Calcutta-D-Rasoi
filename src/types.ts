export type Mode = 'cafe' | 'restaurant';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface OrderFormData {
  name: string;
  phone: string;
  address: string;
  item: string;
}
