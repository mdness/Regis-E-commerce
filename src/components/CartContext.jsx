import React, { useState, useContext } from 'react' 

const CartContext = React.createContext([]);

 export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addPrenda = (item, quantity) => {
        if (isInCart(item.id)) {
          setCart(cart.map(prenda => {
            return prenda.id === item.id ? {...prenda, quantity: prenda.quantity + quantity} : prenda
          }));
        } else {
          setCart([...cart, {...item, quantity}]);
        }
    }
    
     const totalPrice = () => {
      return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0) 
    }

    const totalPrendas = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
    
    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(prenda => prenda.id === id) ? true : false;

    const removerPrenda = (id) => setCart(cart.filter(prenda => prenda.id !== id));

    

   

    console.log('Carrito:', cart)

  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removerPrenda,
        addPrenda,
        totalPrice,
        totalPrendas,
        cart
        }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
