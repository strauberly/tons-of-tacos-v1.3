"use client";

import React, { use, useCallback, useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import classes from "./customer-info-form.module.css";
import { checkEmail, checkName, checkPhone } from "@/lib/customer-form";

function SubmitButton(validation: {
  firstName: boolean | undefined;
  lastName: boolean | undefined;
  phone: boolean | undefined;
  email: boolean | undefined;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      className={classes.checkoutButton}
      type="submit"
      aria-disabled={pending}
      disabled={
        !validation.firstName ||
        !validation.lastName ||
        !validation.phone ||
        !validation.email
      }
    >
      Place Order
    </button>
  );
}

export default function CustomerInfoForm() {
  const data = useFormStatus();
  // const values = getValues();

  const [firstNameValid, setFirstNameValid] = useState<boolean>();
  const [lastNameValid, setLastNameValid] = useState<boolean>();
  const [phoneValid, setPhoneValid] = useState<boolean>();
  const [emailValid, setEmailValid] = useState<boolean>();
  const [errors, setErrors] = useState({
    firstNameError: "First Name must not be blank",
    lastNameError: "Last Name must not be blank",
    phoneError: "Phone Number must not be blank",
    emailError: "Email must not be blank",
  });

  let firstName = useRef("");
  let lastName = useRef("");
  let phoneNumber = useRef("");
  let email = useRef("");

  function validateFirstName(event: React.ChangeEvent<HTMLInputElement>) {
    firstName.current = event.target.value;

    setFirstNameValid(checkName(firstName.current).valid);
    setErrors({
      ...errors,
      firstNameError: `${"First " + checkName(firstName.current).message}`,
    });
  }

  function validateLastName(event: React.ChangeEvent<HTMLInputElement>) {
    lastName.current = event.target.value;
    setLastNameValid(checkName(lastName.current).valid);
    setErrors({
      ...errors,
      lastNameError: `${"Last " + checkName(lastName.current).message}`,
    });
  }

  function validatePhoneNumber(event: React.ChangeEvent<HTMLInputElement>) {
    phoneNumber.current = event.target.value;
    setPhoneValid(checkPhone(phoneNumber.current).valid);
    setErrors({
      ...errors,
      phoneError: checkPhone(phoneNumber.current).message,
    });
  }

  // function validateEmail(event: React.ChangeEvent<HTMLInputElement>) {
  //   const formEmail = event.target.value;
  //   email.current = formEmail;
  //   const fieldValue = checkEmail(email.current);
  //   setEmailValid(fieldValue);
  //   emailReady.current = fieldValue;

  //   console.log(`${email.current} ": " + ${emailValid}`);

  //   if (!emailValid) {
  //     // errorsMessages.current.emailError =
  //     //   "Please ensure e-mail is valid ex(johndoe@doe.doe)";
  //   }
  // }

  return (
    <>
      <form className={classes.form}>
        <div>
          <label className={classes.name}>Name</label>
          <input
            className={` 
            ${firstNameValid ? classes.valid : classes.invalid}

              `}
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Enter First Name"
            maxLength={17}
            required
            onChange={validateFirstName}
          />
          <input
            className={` 
                ${lastNameValid ? classes.valid : classes.invalid}
                  `}
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Enter Last Name"
            maxLength={17}
            required
            onChange={validateLastName}
          />
        </div>
        <div className={classes.errors}>
          {!firstNameValid && (
            <p className={classes.errorMessages}>{errors.firstNameError}</p>
          )}
          {!lastNameValid && (
            <p className={classes.errorMessages}>{errors.lastNameError}</p>
          )}
        </div>
        <div>
          <label>Phone</label>
          <input
            className={`${classes.phone} ${
              phoneValid ? classes.valid : classes.invalid
            }`}
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter Phone Number (ie 555.555.5555)"
            required
            onChange={validatePhoneNumber}
          />
        </div>
        <div className={classes.errors}>
          {!phoneValid && (
            <p className={classes.errorMessages}>{errors.phoneError}</p>
          )}
        </div>
        <div>
          <label>E-mail</label>
          <input
            // className={`${classes.email}
            // ${emailReady.current ? classes.valid : classes.invalid}
            //   `}
            type="text"
            id="email"
            name="email"
            placeholder="Enter E-Mail Address"
            required
            // onChange={validateEmail}
          />
        </div>
        <div className={classes.errors}>
          {!emailValid && (
            <p className={classes.errorMessages}>
              {/* {errorsMessages.current.emailError} */}
            </p>
          )}
        </div>
        {/* <ErrorMessages errors={emailErrors} /> */}
        <SubmitButton
          firstName={firstNameValid}
          lastName={lastNameValid}
          phone={phoneValid}
          email={emailValid}
        />
      </form>
    </>
  );
}
function useForm(): { getValues: any } {
  throw new Error("Function not implemented.");
}
