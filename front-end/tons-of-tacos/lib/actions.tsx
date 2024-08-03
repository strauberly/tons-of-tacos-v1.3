import { z } from "zod";
import { SendOrder } from "./cart";

function isNameValid(name: string) {
  // must be no less than 2 and no greater than 12 and matches "^\\p{L}+[\\p{L}\\p{Pd}\\p{Zs}']*\\p{L}+$|^\\p{L}+$"

  return true || false;
}
function isPhoneValid(phone: string) {
  //  if (customerPhone.matches("[0-9.]*")
  // && customerPhone.charAt(3) == (char) 46
  // && customerPhone.charAt(7) == (char) 46
  // && customerPhone.length()==12){
}
function isEmailValid(email: string) {
  // ^[\w-.]+@([\w-]+\.)+[\w-]{2,}
}

export const customerInfoSchema = z.object({
  first_name: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(15, "First name must not be more than 15 characters"),
  last_name: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(15, "Last name must not be more than 15 characters"),
  email: z
    .string()
    .refine(
      (value) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,}/.test(value),
      "Please enter a valid e-mail address"
    ),
  phone: z
    .string()
    .refine(
      (value) => /^(?:[0-9-()/.]\s?){6,15}[0-9]$/.test(value),
      "Please enter a valid phone number"
    ),
});

export default async function customerInfoValidation(
  _prevState: any,
  formData: FormData
) {
  const result = customerInfoSchema.safeParse({
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
  });

  if (result.success) {
    // does something sends the order
    alert("hooray");
  } else {
    return {
      errors: result.error.issues,
    };
  }
}
