import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart,increaseCartItem,decreaseCartItem} from "../../Slices/cartSlices";
import "./cart.css";
const Cart = () => {

  const dispatch=useDispatch()
  const { cart } = useSelector((state) => {
    return state.cart;
  })

  const removeItem=(id)=>{
    dispatch(removeFromCart(id))
  }

  const increaseItem=(id)=>{
    dispatch(increaseCartItem(id))
  }
  const decreaseItem=(id,qty)=>{
    if(qty>1){
      dispatch(decreaseCartItem(id))
    }else{
      dispatch(removeFromCart(id))
    }
  }
  return (
    <div className="cartlist">
      <h3>Items List</h3>
      {cart.map((value) => {
        return (
          <div className="items" key={value.id}>
            <div className="item">
              <span>Name :</span>
              <h3 className="name">{value.name}</h3>
              <span>Price :</span> <h3 className="price">{value.price}</h3>
            </div>

            <div className="incdec">
              <button onClick={()=>increaseItem(value.id)}>Increase</button>
              <span>{value.qty}</span>
              <button onClick={()=>decreaseItem(value.id,value.qty)}>Decrease</button>
            </div>

            <div style={{textAlign:"center"}}>
              <button onClick={()=>removeItem(value.id)}>Remove Item</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
