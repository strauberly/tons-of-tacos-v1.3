import { useDisplayContext } from "@/context/display-context";
import classes from "./checkout-button.module.css";

export default function Checkout() {
  const { setShowCustomerInfoForm } = useDisplayContext();

  return (
    <div className={classes.checkout}>
      <button
        className={classes.checkout_button}
        onClick={() => setShowCustomerInfoForm(true)}
      >
        Checkout
      </button>
    </div>
  );
}
