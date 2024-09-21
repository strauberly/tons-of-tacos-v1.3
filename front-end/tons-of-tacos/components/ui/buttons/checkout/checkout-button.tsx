import { useDisplayContext } from "@/context/display-context";
import classes from "./checkout-button.module.css";
import { useFormStatus } from "react-dom";
import { SendOrder } from "@/lib/cart";

export default function SubmitButton(validation: {
  firstName: boolean | undefined;
  lastName: boolean | undefined;
  phone: boolean | undefined;
  email: boolean | undefined;
}) {
  const status = useFormStatus();
  return (
    <button
      className={classes.checkout_button}
      type="submit"
      disabled={
        !validation.firstName ||
        !validation.lastName ||
        !validation.phone ||
        !validation.email ||
        status.pending
      }
    >
      {status.pending ? "Sending Order... " : "Submit Order"}
      {/* {"Submit Order"} */}
    </button>
  );
}
