"use client";

import { getCustomerInfo } from "@/lib/actions";
import { SendOrder } from "@/lib/cart";
import { useFormStatus, useFormState } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending}>
      Submit
    </button>
  );
}

export default function CustomerInfoForm() {
  // styling should be conditional, at x media query change from slide out to drop down

  const initialState = { message: "" };

  const [state, formAction] = useFormState(getCustomerInfo, initialState);

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
        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Enter Last Name"
          required
        />
        <label>phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter Phone Number (ie 555.555.5555)"
          required
        />
        <label>email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter E-Mail Address"
          required
        />
        <SubmitButton />
      </form>
    </>
  );
}
