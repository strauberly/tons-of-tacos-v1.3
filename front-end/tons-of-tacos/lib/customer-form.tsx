//  write validation for each field case and use state, if field is valid use that as the css class

export function checkName(name: string) {
  return /^[a-z]{2,15}$/.test(name.toLowerCase().trim());
}

export async function checkPhone(phone: string) {
  // if(){
  //     return false;
  // }else{
  // return true;
  // }
}

export async function checkEmail(email: string) {
  // if(){
  //     return false;
  // }else{
  // return true;
  // }
}
