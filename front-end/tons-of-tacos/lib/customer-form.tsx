//  write validation for each field case and use state, if field is valid use that as the css class

export function checkName(name: string) {
  return /^[a-z]{2,15}$/.test(name.toLowerCase().trim());
}

export function checkPhone(phone: string) {
  return /^[0-9.]{12}$/.test(phone);
}

export function checkEmail(email: string) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
}
