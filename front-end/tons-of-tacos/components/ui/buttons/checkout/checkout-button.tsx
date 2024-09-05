import { useDisplayContext } from "@/context/display-context";
import classes from "./checkout-button.module.css";
import { useFormStatus } from "react-dom";
import { SendOrder } from "@/lib/cart";

// export default function Checkout() {
//   const { setShowCustomerInfoForm } = useDisplayContext();

//   return (
//     <div className={classes.checkout}>
//       <button
//         className={classes.checkout_button}
//         // onClick={() => setShowCustomerInfoForm(true)}
//       >
//         Checkout
//       </button>
//     </div>
//   );
// }

// may need to pass form status, research use form status
// error message if submit clicked before form completed

export default function SubmitButton(validation: {
  firstName: boolean | undefined;
  lastName: boolean | undefined;
  phone: boolean | undefined;
  email: boolean | undefined;
}) {
  // const { pending } = useFormStatus();
  const status = useFormStatus();
  const formData = new FormData();
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
    </button>
  );
}
