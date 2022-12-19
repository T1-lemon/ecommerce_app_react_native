import * as Yup from "yup";
const phoneReg = /(0|\(\+84\))[0-9]{9}/
const passReg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,20}$/
export const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
  .matches(passReg, '6 to 20 characters which contain at least one numeric digit and a special character')
  .required("This field is required"),
  confirmPass: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
  phone: Yup.string().matches(phoneReg, 'Phone number is not valid')
  .required('A phone number is required'),
});

export const SignInSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  password: Yup.string()
  .matches(passReg, '6 to 20 characters which contain at least one numeric digit and a special character')
  .required("This field is required"),
});
