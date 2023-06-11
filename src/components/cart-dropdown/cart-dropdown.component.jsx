import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button, {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.component";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart.item.component";
import "./cart-dropdown.styles.scss";
import { styled } from "styled-components";

const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    margin-top: auto;
  }
`;

const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  // soverflow: scroll;
`;

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage> Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
