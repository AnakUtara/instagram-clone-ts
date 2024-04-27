"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);
import FormWrapper from "@/app/_components/form/FormWrapper";
import clsx from "clsx";

type SignUp = {
  email: string;
  fullname: string;
  username: string;
  password: string;
};
type Props = {};
export default function RegistrationForm({}: Props) {
  const init: SignUp = {
    email: "",
    fullname: "",
    username: "",
    password: "",
  };
  const formik = useFormik({
    initialValues: init,
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required(""),
      fullname: Yup.string().min(2).max(50).required(""),
      username: Yup.string().min(1).max(50).required(""),
      password: Yup.string()
        .minSymbols(0)
        .minNumbers(0)
        .password()
        .required(""),
    }),
    onSubmit: () => {},
  });
  return (
    <FormWrapper isLogin={false}>
      <form className="flex flex-col">
        <label className="form-control w-full max-w-xs" htmlFor="email">
          <input
            type="email"
            className="input input-bordered input-md"
            placeholder="E-mail"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <div className="label">
            <span className="label-text-alt">{formik.errors.email}</span>
          </div>
        </label>
        <label className="form-control w-full max-w-xs" htmlFor="fullname">
          <input
            className="input input-bordered input-md"
            placeholder="Full Name"
            name="fullname"
            id="fullname"
            value={formik.values.fullname}
            onChange={formik.handleChange}
          />
          <div className="label">
            <span className="label-text-alt">{formik.errors.fullname}</span>
          </div>
        </label>
        <label className="form-control w-full max-w-xs" htmlFor="username">
          <input
            className="input input-bordered input-md"
            placeholder="Username"
            name="username"
            id="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <div className="label">
            <span className="label-text-alt">{formik.errors.username}</span>
          </div>
        </label>
        <label className="form-control w-full max-w-xs" htmlFor="username">
          <input
            className="input input-bordered input-md"
            placeholder="Password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <div className="label">
            <span className="label-text-alt">{formik.errors.password}</span>
          </div>
        </label>
        <button
          className={clsx(
            "btn btn-block btn-primary text-white disabled:bg-secondary disabled:text-white",
          )}
          disabled={
            formik.values.email &&
            formik.values.fullname &&
            formik.values.username &&
            formik.values.password
              ? false
              : true
          }
        >
          Sign-up
        </button>
      </form>
    </FormWrapper>
  );
}
