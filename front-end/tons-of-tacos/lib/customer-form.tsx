//  write validation for each field case and use state, if field is valid use that as the css class

import { useRef } from "react";

// let firstNameReady = useRef<boolean>();
export function useCheckName(name: string) {
  let firstNameReady = useRef<boolean>();
  let firstName = useRef("");
  let error: string;
  let validCharacters = /^[a-z]+$/.test(name.toLowerCase().trim());

  if (name.length < 1) {
    return "First name must not be blank";
  } else if (name.length) {
  }
}
export function checkName(name: string) {
  return /^[a-z]+$/.test(name.toLowerCase().trim());
}

export function checkPhone(phone: string) {
  return /^[0-9.]{12}$/.test(phone);
}

export function checkEmail(email: string) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
}
