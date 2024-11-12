"use client";
import classes from "./cart-confirmation.module.css";
import { useDisplayContext } from "@/context/display-context";
import { useRouter } from "next/navigation";
import { CreateCart, ResetCart } from "@/lib/cart";
import { useCartContext } from "@/context/cart-context";
import { useCartConfirmationContext } from "@/context/cart-confirmation-context";

export default function CartConfirmation() {
  const { showCartConfirmation, setShowCartConfirmation } = useDisplayContext();
  const { setCartQuantity } = useCartContext();
  const { cartConfirmation } = useCartConfirmationContext();
  const router = useRouter();

  console.log(cartConfirmation);
  return (
    <>
      {showCartConfirmation && (
        <div className={classes.alertBackdrop}>
          <div className={classes.alert}>
            <div className={classes.alertBackground}>
              <pre>
                <p>{cartConfirmation}</p>
              </pre>
              <button
                className={classes.close}
                onClick={() => {
                  setShowCartConfirmation(false);
                  ResetCart();
                  CreateCart();
                  setCartQuantity(0);
                  router.push("/");
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
