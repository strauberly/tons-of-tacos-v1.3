"use client";

// import { CustomerInfoSchema } from "@/lib/actions";
import { useCallback } from "react";
import { useFormState, useFormStatus } from "react-dom";

// import { getCustomerInfo } from "@/lib/actions";
// import { SendOrder } from "@/lib/cart";
// import { useFormState, useFormStatus } from "react-dom";
import type { ZodIssue } from "zod";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending}>
      Submit
    </button>
  );
}

// type Props = {
//   action: (
//     _prevState: any,
//     formData: FormData
//   ) => Promise<{ errors: ZodIssue[] }>;
// };

// const errors = useRef(ZodIssueCode);

// const ErrorMessages = ({ errors }: { errors: string[] }) => {
//   if (errors.length === 0) return null;

//   const text = errors.join(", ");
//   return <div>{text}</div>;
// };

// const findErrors = (fieldName: string, errors: ZodIssue[]) => {
//   return errors
//     .filter((item) => {
//       return item.path.includes(fieldName);
//     })
//     .map((item) => item.message);
// };

// const firstNameErrors = findErrors("first name", errors);

// const customerInfo = {
//   firstName: formData.get("first_name"),
//   lastName: formData.get("last_name"),
//   phone: formData.get("phone"),
//   email: formData.get("email"),
// };

// const result = CustomerInfoSchema.safeParse(customerInfo);

// const FormAction = async (formData: FormData) => {
//   const customerInfo = {
//     firstName: formData.get("first_name"),
//     lastName: formData.get("last_name"),
//     phone: formData.get("phone"),
//     email: formData.get("email"),
//   };
// };

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

  // const FormAction = async (formData: FormData) => {
  // validation
  // const firstNameErrors = useRef<string[]>([]);
  // if (!result.success) {
  // let errorMessage = "";
  // result.error.issues.forEach((issue) => {
  //   errorMessage =
  //     errorMessage + issue.path[0] + ": " + issue.message + ". ";
  // });

  // const customerInfo = {
  //   firstName: formData.get("first_name"),
  //   lastName: formData.get("last_name"),
  //   phone: formData.get("phone"),
  //   email: formData.get("email"),
  // };

  // const result = CustomerInfoSchema.safeParse(customerInfo);

  // if (!result.success) {
  //   const errors = result.error.issues;
  // }

  // const ErrorMessages = ({ errors }: { errors: string[] }) => {
  //   if (errors.length === 0) return null;

  //   const text = errors.join(", ");
  //   return <div>{text}</div>;
  // };

  // const findErrors = (fieldName: string, errors: ZodIssue[]) => {
  //   return errors
  //     .filter((item) => {
  //       return item.path.includes(fieldName);
  //     })
  //     .map((item) => item.message);
  // };

  // const firstNameErrors = findErrors("first name", errors);
  // const lastNameErrors = findErrors("last name", errors);
  // const phoneErrors = findErrors("phone", errors);
  // const emailErrors = findErrors("email", errors);
  // errors

  // styling should be conditional, at x media query change from slide out to drop down

  // const initialState = { message: "" };

  // const [state, formAction] = useFormState(action, { errors: [] });

  // const findErrors = (fieldName: string, errors: ZodIssue[]) => {
  //   return errors
  //     .filter((item) => {
  //       return item.path.includes(fieldName);
  //     })
  //     .map((item) => item.message);
  // };

  const ErrorMessages = ({ errors }: { errors: string[] }) => {
    if (errors?.length === 0) return null;

    const text = errors?.join(", ");
    return <div>{text}</div>;
  };

  // const firstNameErrors = findErrors("first name", errors);
  // const lastNameErrors = findErrors("last name", state.errors);
  // const phoneErrors = findErrors("phone", state.errors);
  // const emailErrors = findErrors("email", state.errors);

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
        {/* <button type="submit">Submit</button> */}
      </form>
    </>
  );
}
