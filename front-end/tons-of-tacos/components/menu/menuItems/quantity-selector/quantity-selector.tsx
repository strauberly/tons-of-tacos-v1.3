import classes from "@/components/menu/menuItems/quantity-selector/quantity-selector.module.css";
import ArrowIcon from "./arrow-icon";

export default function QuantitySelector() {
  return (
    <div className={classes.quantity}>
      <button className={`${classes.decrement}`}>
        <ArrowIcon />
      </button>
      <>
        <input
          type="number"
          defaultValue={1}
          min="1"
          max="10"
          disabled={true}
        />
      </>
      <button className={`${classes.increment}`}>
        <ArrowIcon />
      </button>
    </div>
  );
}
