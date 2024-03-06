"use client";

import { GetCart } from "@/lib/cartFunctions";
import classes from "@/components/ui/badges/cart-quantity.module.css";
import { useEffect, useState } from "react";
import { useCartContext } from "@/context/cart-context";

export default function CartQuantity() {
  const { cartQuantity } = useCartContext();
  let quantity = cartQuantity;

  return <button className={classes.quantityBadge}>{quantity}</button>;
}
