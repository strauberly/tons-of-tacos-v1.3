//  write validation for each field case and use state, if field is valid use that as the css class

export function checkName(name: string) {
  const nameValid: NameValid = {
    valid: false,
    message: "",
  };

  if (name.trim().length === 0) {
    nameValid.message = "Name must not be blank";
  } else if (!/^S*[a-z]+$/.test(name.toLowerCase())) {
    nameValid.message = "Check for only valid characters and no spaces";
  } else if (
    (/^[a-z]+$/.test(name.toLowerCase().trim()) && name.length == 1) ||
    (/^[a-z]+$/.test(name.toLowerCase().trim()) && name.length > 16)
  ) {
    nameValid.message = "Name must be more than 1 and less than 16 characters";
  } else {
    nameValid.valid = true;
  }
  return nameValid;
}

export function checkPhone(phone: string) {
  return /^[0-9.]{12}$/.test(phone);
}

export function checkEmail(email: string) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
}
