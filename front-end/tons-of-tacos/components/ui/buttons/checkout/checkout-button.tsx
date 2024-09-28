"use client";

import { useDisplayContext } from "@/context/display-context";
import classes from "./checkout-button.module.css";
import { useFormStatus } from "react-dom";
import { resp, SendOrder } from "@/lib/cart";
// import { resp, SendOrder } from "@/lib/cart";
import { useAlertContext } from "@/context/alert-context";
import { useEffect, useRef } from "react";

export default function SubmitButton(validation: {
  firstName: boolean | undefined;
  lastName: boolean | undefined;
  phone: boolean | undefined;
  email: boolean | undefined;
  state: string;
}) {
  // const res = useRef();
  const status = useFormStatus();
  const { setShowAlert } = useDisplayContext();
  const { setAlert, alert } = useAlertContext();
  console.log("passed state: " + validation.state);
  // setAlert(validation.state);
  console.log("from response: " + resp);
  // useEffect(() => {
  //   return setAlert(alert.concat(resp));
  //   console.log("resp: " + alert);
  // }, []);
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
      onClick={() => {
        setShowAlert(true);
        setAlert(validation.state);
        // console.log("state: " + validation.state);
        console.log("state: " + alert);
      }}
    >
      {status.pending ? "Sending Order... " : "Submit Order"}
    </button>
  );
}
