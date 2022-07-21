import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

interface CoffeeContextType {}

interface ICoffee {
  id: string;
  name: string;
  tags: string[];
  description: string;
  coffee_img: string;
  amount: number;
}

export const coffees: ICoffee[] = [
  {
    id: uuidv4(),
    name: "Expresso Tradicional",
    tags: ["TRADICIONAL"],
    description: "O tradicional café feito com água quente e grãos moídos",
    coffee_img: "./assets/expresso.png",
    amount: 9.9,
  },
  {
    id: uuidv4(),
    name: "Expresso Americano",
    tags: ["TRADICIONAL"],
    description: "Expresso diluído, menos intenso que o tradicional",
    coffee_img: "image",
    amount: 9.9,
  },
  {
    id: uuidv4(),
    name: "Expresso Cremoso",
    tags: ["TRADICIONAL"],
    description: "Café expresso tradicional com espuma cremosa",
    coffee_img: "image",
    amount: 9.9,
  },
  {
    id: uuidv4(),
    name: "Expresso Gelado",
    tags: ["TRADICIONAL", "GELADO"],
    description: "Café expresso tradicional com espuma cremosa",
    coffee_img: "image",
    amount: 9.9,
  },
  {
    id: uuidv4(),
    name: "Café com Leite",
    tags: ["TRADICIONAL", "COM LEITE"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    coffee_img: "image",
    amount: 9.9,
  },
  {
    id: uuidv4(),
    name: "Latte",
    tags: ["TRADICIONAL", "COM LEITE"],
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    coffee_img: "image",
    amount: 9.9,
  },
  {
    id: uuidv4(),
    name: "Capuccino",
    tags: ["TRADICIONAL", "COM LEITE"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    coffee_img: "image",
    amount: 9.9,
  },
  {
    id: uuidv4(),
    name: "Macchiato",
    tags: ["TRADICIONAL", "COM LEITE"],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    coffee_img: "image",
    amount: 9.9,
  },
  {
    id: uuidv4(),
    name: "Mocaccino",
    tags: ["TRADICIONAL", "COM LEITE"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    coffee_img: "image",
    amount: 9.9,
  },
  {
    id: uuidv4(),
    name: "Chocolate Quente",
    tags: ["ESPECIAL", "COM LEITE"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    coffee_img: "image",
    amount: 9.9,
  },
  {
    id: uuidv4(),
    name: "Cubano",
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    coffee_img: "image",
    amount: 9.9,
  },
  {
    id: uuidv4(),
    name: "Havaiano",
    tags: ["ESPECIAL"],
    description: "Bebida adocicada preparada com café e leite de coco",
    coffee_img: "image",
    amount: 9.9,
  },
  {
    id: uuidv4(),
    name: "Árabe",
    tags: ["ESPECIAL"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    coffee_img: "image",
    amount: 9.9,
  },
  {
    id: uuidv4(),
    name: "Irlandês",
    tags: ["ESPECIAL", "ALCOÓLICO"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    coffee_img: "image",
    amount: 9.9,
  },
];

export const CyclesContext = createContext({} as CoffeeContextType);
