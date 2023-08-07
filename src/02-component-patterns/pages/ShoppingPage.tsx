import {  ProductCard   } from "../components/index"
import '../styles/custom-styles.css'
const product = {
    id: '12',
    title: 'asasd',
    img: './coffee-mug.png'
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
        <ProductCard product={product} 
                     className="bg-dark "
                     style={{
                        backgroundColor: '#126df3'
                     }}>
            <ProductCard.Img className="custom-image" />
            <ProductCard.Title title={ 'Cafè' } className="text-white" />
            <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        
    </div>
  )
}
export default ShoppingPage