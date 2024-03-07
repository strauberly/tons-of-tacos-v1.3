"use client";

import { GetCart } from "@/lib/cartFunctions";
import classes from "@/components/ui/badges/cart-quantity.module.css";
import { useEffect, useState } from "react";
import { useCartContext } from "@/context/cart-context";

export default function CartQuantity() {
  const { cartQuantity, itemsInCart } = useCartContext();
  let quantity = cartQuantity;
  // items in cart true.
  return <button className={classes.quantityBadge}>{quantity}</button>;
}
