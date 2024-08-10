"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

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

export default function CustomerInfoForm() {
  const [firstNameValid, setFirstNameValid] = useState<boolean>();
  const [lastNameValid, setLastNameValid] = useState<boolean>();
  let firstNameCorrect = useRef<boolean>();
  let lastNameCorrect = useRef<boolean>();
  let firstName = useRef("");
  let lastName = useRef("");

  const Errors = {
    firstNameError: "First Name must not be blank",
    lastNameError: "Last Name must not be blank",
  };

  let errorsMessages = useRef(Errors);

  function validateFirstName(event: React.ChangeEvent<HTMLInputElement>) {
    const formFirstName = event.target.value;
    firstName.current = formFirstName;
    const fieldValid = checkName(formFirstName);
    setFirstNameValid(fieldValid);
    firstNameCorrect.current = fieldValid;

    if (firstName.current.length < 2 || formFirstName.length > 15) {
      firstNameCorrect.current = false;
      errorsMessages.current.firstNameError =
        "Name must be more than 1 and less than 16";
    } else if (!fieldValid) {
      firstNameCorrect.current = false;
      errorsMessages.current.firstNameError = "Please only use letters";
    } else {
      firstNameCorrect.current = true;
    }
  }

  function validateLastName(event: React.ChangeEvent<HTMLInputElement>) {
    const formLastName = event.target.value;
    lastName.current = formLastName;
    const fieldValid = checkName(formLastName);
    setLastNameValid(fieldValid);
    lastNameCorrect.current = fieldValid;

    if (lastName.current.length < 2 || formLastName.length > 15) {
      lastNameCorrect.current = false;
      errorsMessages.current.lastNameError =
        "Name must be more than 1 and less than 16";
    } else if (!fieldValid) {
      lastNameCorrect.current = false;
      errorsMessages.current.lastNameError = "Please only use letters";
    } else {
      lastNameCorrect.current = true;
    }

    console.log(
      `${formLastName}` +
        ": " +
        `${fieldValid}` +
        // `${nameValid.current}` +
        ": " +
        Errors.lastNameError
    );
  }
  // if (!firstName) {
  //   Errors.firstNameError = "Please enter first name";
  // } else if (!/^[a-z]{2,15}$/.test(firstName.toLowerCase().trim())) {
  //   Errors.firstNameError =
  //     "First name must be 2 characters or greater, less 15 characters and only characters";
  // } else {
  //   setFirstNameValid(true);
  // }

  return (
    <>
      <form className={classes.form}>
        {/* <form className={classes.form} action={formAction}> */}
        {/* <p>
          Please enter your information so that we can finalize your order and
          let you know when it is ready.
        </p> */}
        <div>
          <label className={classes.name}>Name</label>
          {/* <input
            className={` 
            ${formFirstName1 ? classes.firstName : classes.firstNameValid}
              `} */}

          <input
            className={` 
            ${firstNameCorrect.current ? classes.valid : classes.invalid}
              `}
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Enter First Name"
            // value={firstName}
            required
            onChange={validateFirstName}
          />
          <input
            className={` 
                ${lastNameCorrect.current ? classes.valid : classes.invalid}
                  `}
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Enter Last Name"
            required
            onChange={validateLastName}
          />
        </div>
        <div className={classes.nameErrors}>
          {!firstNameValid && (
            <p className={classes.errorMessages}>
              {errorsMessages.current.firstNameError}
            </p>
          )}
          {!lastNameValid && (
            <p className={classes.errorMessages}>
              {errorsMessages.current.lastNameError}
            </p>
          )}
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
        </div>
        {/* <ErrorMessages errors={phoneErrors} /> */}
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
        {/* <ErrorMessages errors={emailErrors} /> */}
        <SubmitButton />
      </form>
    </>
  );
}
