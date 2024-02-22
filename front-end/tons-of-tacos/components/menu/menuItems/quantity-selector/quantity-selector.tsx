import classes from "@/components/menu/menuItems/quantity-selector/quantity-selector.module.css";
import ArrowIcon from "./arrow-icon";
import { SetStateAction, useState } from "react";

export default function QuantitySelector(props: {
  value: number;
  increment: () => void;
  decrement: () => void;
}) {
  const defaultValue: number = 1;

  const [value, setValue] = useState(defaultValue);

  // function increaseQuantity() {
  //   setValue(value + 1);
  //   if (value >= 10) {
  //     setValue(10);
  //     alert(
  //       "The limit for this item is 10. If you need more please give us a call so we can try to accommodate your order. Thanks!"
  //     );
  //   }
  // }

  return (
    <div className={classes.quantity}>
      <button
        className={`${classes.decrement}`}
        onClick={() => props.decrement()}
      >
        <ArrowIcon />
      </button>
      <input
        type="number"
        min="1"
        max="10"
        disabled={true}
        value={`${props.value}`}
      />
      <button
        className={`${classes.increment}`}
        onClick={() => props.increment()}
      >
        <ArrowIcon />
      </button>
    </div>
  );
}
