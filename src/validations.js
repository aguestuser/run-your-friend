// String -> ?String
export const isRequired = value =>
  (value == null ? 'Required' : undefined);

// String -> ?String
export const isEmail = value =>
      (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
       ? 'Invalid email'
       : undefined);
