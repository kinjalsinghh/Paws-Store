import './Popular.css'
import data_product from'../Assets/data'
import Item from '../Items/Item'
function Popular(){
    return(
        <div className='popular'>
        <h1>OUR BESTSELLERS</h1>
        <hr/>
        <div className='popular-item'>
          {data_product.map((item,i)=>{
            return <Item key={i} name={item.name} id={item.id} image={item.image} medium_price={item.medium_price} medium_old_price={item.medium_old_price}/>
          })}
        </div>
        </div>
    )
}
export default Popular;