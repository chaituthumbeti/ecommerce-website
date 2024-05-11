import React, { useContext, useState } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { loadStripe } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";

const CartItems = () => {
  const { products } = useContext(ShopContext);
  const { cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  // const cart = {};
  // const [cartdetails, setCartdetails] = useState([]);
  // for (const item in cartItems) {
  //   if (cartItems[item] > 0) {
  //     fetch("http://localhost:4000/getcartdata", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/form-data",
  //         "auth-token": `${localStorage.getItem("auth-token")}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ itemId: item }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setCartdetails(data));
  //   }
  // }

  // const handlePayment = async () => {
  //   const stripe = await loadStripe(
  //     'pk_test_51PDDPOSIgd9GTKcvQYOprTQDx7tbQuR0Bf47Eijozt0YGZAoKv59yam7n0DQTLJiNNCYQZaImTMaU6DpYbeakn0Z00kBZULEMW'
  //   );
  //   const body = {
  //     products: cartdetails,
  //   };
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };
  //   console.log("succes1");
  //   const response = await fetch("http://localhost:4000/payment", {
  //     method: "POST",
  //     headers: headers,
  //     body: JSON.stringify(body),
  //   });
  //   console.log("succes2");
  //   const session = await response.json();
  //   console.log(session);
  //   const result = stripe.redirectToCheckout({
  //     sessionId: session.id,
  //   });
  //   if (result.error) console.log(result.error);
  // };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format-main cartitems-format">
                <img className="cartitems-product-icon" src={e.image} alt="" />
                <p cartitems-product-title>{e.name}</p>
                <p>Rs.{e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>Rs.{e.new_price * cartItems[e.id]}</p>
                <img
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className="cartitems-remove-icon"
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>Rs.{getTotalCartAmount()}</h3>
            </div>
          </div>
          <Link to='/thank' ><button >PROCEED TO CHECKOUT</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
