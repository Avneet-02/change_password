import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().required("Please enter your Name"),
  email: Yup.string().required("Please enter your Email"),
  password: Yup.string().min(6).required("Please enter your Password"),
  confirm_Password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
