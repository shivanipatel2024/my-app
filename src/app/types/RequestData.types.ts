export type loginDataType = {
  userName: string;
  password: string;
};
export type signUpDataType = {
  email: string;
  mobileNumber: string;
  password: string;
};

export type resetPasswordDataType = {
  email: string,
  password: string,
  confirmPassword: string
}