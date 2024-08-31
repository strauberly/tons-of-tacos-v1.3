"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import classes from "./customer-info-form.module.css";
import {
  checkEmail,
  checkName,
  checkPhone,
  useCheckName,
  // useCheckName,
} from "@/lib/customer-form";

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
  // const [checkName, setCheckName] = useState<NameValid>();

  // const [formValid, setFormValid] = useState<boolean>();
  // const [firstNameError, setFirstNameError] = useState(
  //   "First Name must not be blank"
  // );

  const [errors, setErrors] = useState({
    firstNameError: "First Name must not be blank",
    lastNameError: "Last Name must not be blank",
    phoneError: "Phone Number must not be blank",
    emailError: "Email must not be blank",
  });

  // let firstNameReady = useRef<boolean>();
  let lastNameReady = useRef<boolean>();
  let phoneReady = useRef<boolean>();
  let emailReady = useRef<boolean>();

  let firstName = useRef("");
  let lastName = useRef("");
  let phoneNumber = useRef("");
  let email = useRef("");

  const Errors = {
    firstNameError: "First Name must not be blank",
    lastNameError: "Last Name must not be blank",
    phoneError: "Phone Number must not be blank",
    emailError: "Email must not be blank",
  };

  let errorsMessages = useRef(Errors);

  //  set example for handle name and then look to place logic in library
  function validateName(event: React.ChangeEvent<HTMLInputElement>) {
    firstName.current = event.target.value;

    // setCheckName(useCheckName(firstName.current))

    if (
      checkName(firstName.current) &&
      firstName.current.length >= 2 &&
      firstName.current.length <= 16
    ) {
      setFirstNameValid(true);
    } else {
      setFirstNameValid(false);
    }

    if (event.target.value.trim().length === 0) {
      setErrors({ ...errors, firstNameError: "First Name must not be blank" });
    } else if (!checkName(firstName.current)) {
      setErrors({
        ...errors,
        firstNameError: "Check for only valid characters and no spaces",
      });
    } else if (
      (checkName(firstName.current) && firstName.current.length == 1) ||
      (checkName(firstName.current) && firstName.current.length > 16)
    ) {
      setErrors({
        ...errors,
        firstNameError: "Name must be more than 1 and less than 16 characters",
      });
    }
    // console.log(firstName.current.length);
    // console.log(firstName.current);
  }

  function validateLastName(event: React.ChangeEvent<HTMLInputElement>) {
    const formLastName = event.target.value;
    lastName.current = formLastName;
    const fieldValid = checkName(formLastName);
    setLastNameValid(fieldValid);
    lastNameReady.current = fieldValid;

    if (lastName.current.length < 2 || formLastName.length > 15) {
      lastNameReady.current = false;
      errorsMessages.current.lastNameError =
        "Name must be more than 1 and less than 16";
    } else if (!fieldValid) {
      lastNameReady.current = false;
      errorsMessages.current.lastNameError = "Please only use letters";
    } else {
      lastNameReady.current = true;
    }
  }

  function validatePhoneNumber(event: React.ChangeEvent<HTMLInputElement>) {
    const formPhoneNumber = event.target.value;
    phoneNumber.current = formPhoneNumber;
    const fieldValue = checkPhone(phoneNumber.current);
    setPhoneValid(fieldValue);
    phoneReady.current = fieldValue;

    console.log();

    if (phoneNumber.current.length < 12 || phoneNumber.current.length > 12) {
      errorsMessages.current.phoneError =
        "Please ensure entered phone number matches the example 555.555.5555";
    }
  }

  function validateEmail(event: React.ChangeEvent<HTMLInputElement>) {
    const formEmail = event.target.value;
    email.current = formEmail;
    const fieldValue = checkEmail(email.current);
    setEmailValid(fieldValue);
    emailReady.current = fieldValue;

    console.log(`${email.current} ": " + ${emailValid}`);

    if (!emailValid) {
      // errorsMessages.current.emailError =
      //   "Please ensure e-mail is valid ex(johndoe@doe.doe)";
    }
  }

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
            // required
            onChange={validateName}
          />
          <input
            className={` 
                ${lastNameReady.current ? classes.valid : classes.invalid}
                  `}
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Enter Last Name"
            required
            onChange={validateLastName}
          />
        </div>
        <div className={classes.errors}>
          {!firstNameValid && (
            <p className={classes.errorMessages}>{errors.firstNameError}</p>
            // <p className={classes.errorMessages}>{}</p>
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
            className={`${classes.phone} ${
              phoneReady.current ? classes.valid : classes.invalid
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
            <p className={classes.errorMessages}>
              {errorsMessages.current.phoneError}
            </p>
          )}
          {/* <ErrorMessages errors={phoneErrors} /> */}
        </div>
        <div>
          <label>E-mail</label>
          <input
            className={`${classes.email}
            ${emailReady.current ? classes.valid : classes.invalid}
              `}
            type="text"
            id="email"
            name="email"
            placeholder="Enter E-Mail Address"
            required
            onChange={validateEmail}
          />
        </div>
        <div className={classes.errors}>
          {!emailValid && (
            <p className={classes.errorMessages}>
              {errorsMessages.current.emailError}
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
