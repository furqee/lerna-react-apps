export const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
export const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const validString = /^[\w\- ]{1,100}$/;

const regex = {
  email: emailRegex,
  password: passwordRegex,
  string: validString,
};

export default regex;
