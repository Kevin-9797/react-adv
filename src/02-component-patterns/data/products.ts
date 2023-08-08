import { Product } from "../interfaces/products.interfaces"

const product = {
    id: '1',
    title: 'primer cafe',
    img: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'el otro cafe',
  img: './coffee-mug2.png'
}

export const products: Product[] = [ product, product2]
