type User = {
    name: string;
    email: string;
}

type ListItem = {
    id: number | string;
    value: string;
}

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    subTitle: string;
    image: ListItem[];
}

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}