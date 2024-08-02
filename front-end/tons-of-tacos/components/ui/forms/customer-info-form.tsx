"use client";

import { useCallback } from "react";
import { useFormState, useFormStatus } from "react-dom";

import type { ZodIssue } from "zod";

import classes from "./customer-info-form.module.css";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending}>
      Submit
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

  const findErrors = useCallback(
    (fieldName: string) => {
      return state?.errors
        .filter((item: { path: string | string[] }) => {
          return item.path.includes(fieldName);
        })

        .map((item: { message: any }) => item.message);
    },
    [state?.errors]
  );

  const firstNameErrors = findErrors("first_name");
  const lastNameErrors = findErrors("last_name");
  const phoneErrors = findErrors("phone");
  const emailErrors = findErrors("email");

  const ErrorMessages = ({ errors }: { errors: string[] }) => {
    if (errors?.length === 0) return null;

    const text = errors?.join(", ");
    return <div>{text}</div>;
  };

  return (
    <>
      <form className={classes.form} action={formAction}>
        {/* <p>
          Please enter your information so that we can finalize your order and
          let you know when it is ready.
        </p> */}
        <div>
          <label className={classes.name}>Name</label>
          <input
            className={classes.firstName}
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Enter First Name"
            required
          />
          <ErrorMessages errors={firstNameErrors} />
          <input
            className={classes.lastName}
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Enter Last Name"
            required
          />
          <ErrorMessages errors={lastNameErrors} />
        </div>
        <div>
          <label>Phone</label>
          <input
            className={classes.phone}
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter Phone Number (ie 555.555.5555)"
            required
          />
          <ErrorMessages errors={phoneErrors} />
        </div>
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
          <ErrorMessages errors={emailErrors} />
        </div>
        {/* <SubmitButton /> */}
      </form>
    </>
  );
}
