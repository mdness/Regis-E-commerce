import React, { useState, useContext } from 'react'

const CartContext = React.createContext([]);

 export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const clearCart = () => setCart([])

    const isInCart = (id) => cart.find(prenda => prenda.id === id) ? true : false;

    const removePrenda = (id) => setCart(cart.filter(preda => prenda.id !== id));

    const addPrenda = (item, newQuantity) => {
        const newCart  = cart.filter(prenda => prenda.id !== item.id)
        newCart.push({ ...item, quantity: newQuantity});
        setCart(newCart)
    }


    console.log('carrito:', cart)

  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removePrenda,
        addPrenda}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
