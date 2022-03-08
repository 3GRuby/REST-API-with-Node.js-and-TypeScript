import { isBooleanObject } from "util/types";
import { object, string, ref } from "yup";

export const createUserSchema = object({
  body: object({
    name: string().required("Name is requried"),
    password: string()
      .required("Password is requried")
      .min(6, "Password is too short - should be 6 chars minimum.")
      .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin latters."),
    passwordConfirmation: string().oneOf(
      [ref("password"), null],
      "Passwords must match"
    ),
    email: string()
      .email("must be a valid email")
      .required("Email is required"),
  }),
});
