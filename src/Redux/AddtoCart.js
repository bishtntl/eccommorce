import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Css/AddCart.css";
import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "../Redux/Slice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const Navi = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Cart.cart);
  const total = data.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const handleIncreaseQuantity = (id) => {
    dispatch(IncreaseQuantity({ id }));
  };
  const handleDecreaseQuantity = (id) => {
    dispatch(DecreaseQuantity({ id }));
  };
  return (
    <>
      <div className="container">
        {data &&
          data.map((item, index) => {
            return (
              <div className="imgae_container" key={index}>
                <div className="content-cart" key={index}>
                  <img src={item.image} className="image" alt="Not Found" />
                </div>
                <div className="cart_details">
                  <div>
                    <h2 className="cartprice">
                      {"Rs " + item.price * item.quantity}.00
                      <p>
                        <span>Rating</span>⭐⭐⭐⭐⭐
                      </p>
                    </h2>

                    <div className="addsubbtn">
                      <button
                        className="quantity-btn"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <div className="btncontainer">
                      <span className="buy">
                        <button className="buybtn">Buy Now</button>
                      </span>
                      <span className="cart-subcontent">
                        <h2>{item.model}</h2>
                        <button
                          className="remove-cart"
                          onClick={() => dispatch(RemoveItem({ id: item.id }))}
                        >
                          Remove Cart
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        <div className="total">
          <span>Total : </span>
          <span style={{ color: "blue" }}>{total}.00</span>
        </div>
      </div>

      <div className="gobackcart">
        <button className="gobackaddcart" onClick={() => Navi(-1)}>
          Go Back
        </button>
      </div>
    </>
  );
};
export default Cart;
