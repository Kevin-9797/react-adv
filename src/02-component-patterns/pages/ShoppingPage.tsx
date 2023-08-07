import {  ProductCard   } from "../components/index"


const product = {
    id: '12',
    title: 'asasd',
    img: './assets/'
}


export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <div style={{
            display:'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>

        </div>
        <ProductCard product={product}>
            <ProductCard.Img  />
            <ProductCard.Title title={ 'Cafè' } />
            <ProductCard.Buttons />
        </ProductCard>
        
    </div>
  )
}
export default ShoppingPage