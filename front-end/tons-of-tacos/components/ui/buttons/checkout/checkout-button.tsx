"use client";

import { useDisplayContext } from "@/context/display-context";
import classes from "./checkout-button.module.css";
import { useFormStatus } from "react-dom";
import { useAlertContext } from "@/context/alert-context";
import { useEffect } from "react";

export default function SubmitButton(validation: {
  firstName: boolean | undefined;
  lastName: boolean | undefined;
  phone: boolean | undefined;
  email: boolean | undefined;
  state: string;
}) {
  const status = useFormStatus();
  const { setShowAlert } = useDisplayContext();
  const { setAlert } = useAlertContext();

  useEffect(() => {
    setAlert(validation.state);
  }, [setAlert, validation.state]);

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
      onClick={async () => {
        setAlert(validation.state);
        await new Promise((resolve) => setTimeout(resolve, 250));
        setShowAlert(true);
      }}
    >
      {status.pending ? "Sending Order... " : "Submit Order"}
    </button>
  );
}
