import classes from "./checkout-button.module.css";

export default function Checkout() {
  return (
    <div className={classes.checkout}>
      <button className={classes.checkout_button}>Checkout</button>
    </div>
  );
}
