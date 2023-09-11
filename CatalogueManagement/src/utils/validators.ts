export const validatePinCode = (value: string, setError: Function) => {
  if (value == '') {
    setError('Pin Code is required');
    return false;
  }
  setError('');
  return true;
};

export const validateAddress = (value: string, setError: Function) => {
  if (value == '') {
    setError('Address is required');
    return false;
  }
  if (value.length > 70) {
    setError('Address should not be more then 70 characters');
    return false;
  }
  setError('');
  return true;
};
export const validateLocality = (value: string, setError: Function) => {
  if (value == '') {
    setError('Locality is required');
    return false;
  }
  if (value.length > 20) {
    setError('Locality should not be more then 20 characters');
    return false;
  }
  setError('');
  return true;
};
export const validateCity = (value: string, setError: Function) => {
  if (value == '') {
    setError('City is required');
    return false;
  }
  setError('');
  return true;
};

export const validateState = (value: string, setError: Function) => {
  if (value == '') {
    setError('State is required');
    return false;
  }
  setError('');
  return true;
};

export const validateName = (value: string, setError: Function) => {
  if (value == '') {
    setError('Name is required');
    return false;
  }
  if (value.length > 50) {
    setError('Name should not be more then 70 characters');
    return false;
  }
  setError('');
  return true;
};

export const validateMobile = (
  value: string,
  inputRef: any,
  setError: Function,
) => {
  if (value == '') {
    setError('Mobile is required');
    return false;
  }
  if (!inputRef.current?.isValidNumber()) {
    setError('Mobile Number is invalid');
    return false;
  }
  setError('');
  return true;
};
