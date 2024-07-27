import { z } from "zod";
import { SendOrder } from "./cart";

// export async function getCustomerInfo(prevState: any, formData: FormData) {
//   console.log(`Server says hello: ${formData.get("first_name")}`);
//   return {
//     // let firstName = formData.get("firstName");
//     message: `Server says hello: ${formData.get("first_name")}`,
//     alert(${message})
//   };
// }

export const customerInfoSchema = z.object({
  first_name: z.string().min(2, "Please enter first name."),
  last_name: z.string().min(2, "Please enter last name"),
  email: z.string().email().min(1, "Please enter a valid e-mail"),
  phone: z
    .string()
    .refine((value) => /^(?:[0-9-()/.]\s?){6,15}[0-9]$/.test(value)),
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
