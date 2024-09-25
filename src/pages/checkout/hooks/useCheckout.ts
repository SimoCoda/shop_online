/* eslint-disable no-useless-escape */

import React, { ChangeEvent, useState } from 'react'
import { selectCartList, selectTotalCartCost, useCart } from '@/services/cart'
import { useNavigate } from 'react-router-dom';

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function useCheckout() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [dirty, setDirty] = useState(false);
  const navigate = useNavigate();
  const totalCartCost = useCart(selectTotalCartCost);
  const order = useCart(selectCartList);
  const clearCart = useCart((state) => state.clearCart);

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setUser((state) => ({ ...state, [name]: value }));
    setDirty(true);
  };

  function sendOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const orderInfo = {
      user,
      order,
      status: "pending",
      totalCartCost,
    };
    console.log(orderInfo);
    setUser({ name: "", email: "" });
    clearCart();
    navigate("/thankyou");
  };

  const nameValid = user.name.length;
  const emailValid = user.email.match(EMAIL_REGEX);
  const isValid = nameValid && emailValid;

  return {
    validators: {
        nameValid,
        emailValid,
        isValid,
    },
    actions: {
        sendOrder,
        changeHandler,
    },
    user,
    dirty,
    totalCartCost
  }

}
