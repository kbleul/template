import React from "react";
import { metaObject } from "@/config/site.config";
import SignInForm from "@/app/components/organism/form/signin-form";

export const metadata = {
  ...metaObject("Sign In"),
};
const Signin = () => {
  return <SignInForm />;
};

export default Signin;
