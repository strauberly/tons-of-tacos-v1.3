"use client";

import { useCallback, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import type { ZodIssue } from "zod";

import classes from "./customer-info-form.module.css";
import { checkName } from "@/lib/customer-form";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className={classes.checkoutButton}
      type="submit"
      aria-disabled={pending}
    >
      Place Order
    </button>
  );
}

type Props = {
  action: (
    _prevState: any,
    formData: FormData
  ) => Promise<any | { errors: ZodIssue[] }>;
};

export default function CustomerInfoForm({ action }: Props) {
  const [state, formAction] = useFormState(action, { errors: [] });
  // export default function CustomerInfoForm({ action }: Props) {
  //   const [state, formAction] = useFormState(action, { errors: [] });

  // const findErrors = (fieldName: string, errors: ZodIssue[]) => {
  //   return errors
  //     .filter((item) => {
  //       return item.path.includes(fieldName);
  //     })
  //     .map((item) => item.message);
  // };

  const findErrors = useCallback(
    (fieldName: string) => {
      return state.errors
        .filter((item: { path: string | string[] }) => {
          return item.path.includes(fieldName);
        })

        .map((item: { message: any }) => item.message);
    },
    [state.errors]
  );

  const firstNameErrors = findErrors("first_name");
  // const firstNameErrors = findErrors("first_name", state.errors);
  // const lastNameErrors = findErrors("last_name", state.errors);
  const lastNameErrors = findErrors("last_name");
  const phoneErrors = findErrors("phone");
  // const phoneErrors = findErrors("phone", state.errors);
  const emailErrors = findErrors("email");
  // const emailErrors = findErrors("email", state.errors);

  const ErrorMessages = ({ errors }: { errors: string[] }) => {
    if (errors?.length === 0) return null;

    const text = errors.join(", ");
    return <div className={classes.errorMessages}>{text}</div>;
  };

  const [firstName, setFirstName] = useState<boolean>();

  setFirstName(checkName("first_name"));

  return (
    <>
      <form className={classes.form} action={formAction}>
        {/* <p>
          Please enter your information so that we can finalize your order and
          let you know when it is ready.
          </p> */}

        <div>
          <label>Name</label>
          <input
            className={`
              ${classes.firstName} ${firstName === true ? classes.valid : " "}
              `}
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Enter First Name"
            required
          />
          <input
            className={classes.lastName}
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Enter Last Name"
            required
          />
        </div>

        <ErrorMessages errors={firstNameErrors} />
        <ErrorMessages errors={lastNameErrors} />
        <label>Phone</label>
        <div>
          <input
            className={classes.phone}
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter Phone Number (ie 555.555.5555)"
            required
          />
        </div>
        <ErrorMessages errors={phoneErrors} />
        <div>
          <label>E-mail</label>
          <input
            className={classes.email}
            type="text"
            id="email"
            name="email"
            placeholder="Enter E-Mail Address"
            required
          />
        </div>
        <ErrorMessages errors={emailErrors} />
        <SubmitButton />
      </form>
    </>
  );
}
