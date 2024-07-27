"use client";

import { useCallback } from "react";
import { useFormState, useFormStatus } from "react-dom";

import type { ZodIssue } from "zod";

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
      <form action={formAction}>
        <label>name</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          placeholder="Enter First Name"
          required
        />
        <ErrorMessages errors={firstNameErrors} />
        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Enter Last Name"
          required
        />
        <ErrorMessages errors={lastNameErrors} />
        <label>phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter Phone Number (ie 555.555.5555)"
          required
        />
        <ErrorMessages errors={phoneErrors} />
        <label>email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter E-Mail Address"
          required
        />
        <ErrorMessages errors={emailErrors} />
        <SubmitButton />
      </form>
    </>
  );
}
