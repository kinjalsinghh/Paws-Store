import React,{createContext, useState} from "react";
import all_product from '../Components/Assets/all_product'
export const ShopContext=createContext(null);

const getDefaultCart=()=>{
    const cart={};
    for(let i=0;i<all_product.length+1;i++){
        cart[i]=0;
    }
    return cart;
}
const getDefaultCartType=()=>{
    const cart={};
    for(let i=0;i<all_product.length+1;i++){
        cart[i]=""
    }
    return cart;
}
const ShopContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState(getDefaultCart())
    const [cartType, setCartType]=useState(getDefaultCartType())
    const addToCart=(itemId,quantity,select)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+Number(quantity)}))
        setCartType((prev)=>({...prev,[itemId]:select}))
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    let TotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=all_product.find((product)=>product.id===Number(item));
                const type=cartType[item]
                if(type==='small'){
                    totalAmount+=itemInfo.small_price*cartItems[item]
                }else if(type==='medium'){
                    totalAmount+=itemInfo.medium_price*cartItems[item]
                }else if(type==='large'){
                    totalAmount+=itemInfo.large_price*cartItems[item]
                }    
            }
        }
        return totalAmount
    }
    const getTotalCartItems=()=>{
        let totalItem=0;
        for(let item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item]
            }
        }
        return totalItem;
    }
    const contextValue={getTotalCartItems,TotalCartAmount,all_product,cartItems,addToCart,removeFromCart,cartType};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider