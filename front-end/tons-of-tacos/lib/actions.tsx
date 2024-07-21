"use server";

export async function getCustomerInfo(prevState: any, formData: FormData) {
  console.log(`Server says hello: ${formData.get("first_name")}`);
  return {
    // let firstName = formData.get("firstName");
    message: `Server says hello: ${formData.get("first_name")}`,
    // alert({ firstName });
  };
}
