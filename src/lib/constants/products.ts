import i16 from '../../assets/iphone16.jpg';
import i16Pro from '../../assets/iphone16Pro.jpg';
import i15 from '../../assets/iphone15.jpg';
import i14 from '../../assets/iphone14.jpg';

export const ProductList: Product[] = [
  {
    id: 1,
    name: "IPhone 16",
    price: 900,
    subTitle: "High-performance smartphone with cutting-edge features", 
    description:
      "The iPhone 16 features a powerful A-series chip, advanced camera capabilities, and a sleek design to deliver unparalleled performance and style.",
    image: [
      {
        id: "Black",
        value: i16,
      },
    ],
  },
  {
    id: 2,
    name: "IPhone 16 Pro",
    price: 1000,
    subTitle: "Premium smartphone with Pro features for enthusiasts",
    description:
      "The iPhone 16 Pro offers exceptional performance with a cutting-edge A-series chip, professional-grade cameras, and a stunning Super Retina XDR display.", 
    image: [
      {
        id: "Black",
        value: i16Pro,
      },
    ],
  },
  {
    id: 3,
    name: "IPhone 15 Pro",
    price: 950,
    subTitle: "Feature-rich smartphone with stunning capabilities", 
    description:
      "The iPhone 15 Pro provides excellent performance with its powerful processor, a refined camera system, and a durable yet elegant build.",
    image: [
      {
        id: "Black",
        value: i15,
      },
    ],
  },
  {
    id: 4,
    name: "IPhone 14",
    price: 850,
    subTitle: "Affordable and reliable smartphone for everyone",
    description:
      "The iPhone 14 delivers outstanding performance with its fast processor, excellent battery life, and versatile camera setup, all at a great price.", 
    image: [
      {
        id: "Black",
        value: i14,
      },
    ],
  },
];


export class FilterTypes {
    public static readonly Name = {
        id: 1,
        value: 'Name'
    };
    public static readonly Price ={
        id: 2,
        value: 'Price'
    };
    public static readonly list = [this.Name,this.Price]
}