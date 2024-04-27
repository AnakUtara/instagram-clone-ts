"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "@/app/_components/form/FormWrapper";

type Props = {};
type auth = { username: string; password: string };
export default function LoginForm({}: Props) {
  const init: auth = { username: "", password: "" };
  const formik = useFormik({
    initialValues: init,
    validationSchema: Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required(),
    }),
    onSubmit: () => {},
  });
  const isFormEmpty: string = formik.values.username && formik.values.password;
  return (
    <FormWrapper isLogin>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
        <label className="form-control w-full max-w-xs" htmlFor="username">
          <input
            className="input input-bordered input-secondary input-md"
            placeholder="Username or email"
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </label>
        <label className="form-control w-full max-w-xs" htmlFor="password">
          <input
            type="password"
            className="input input-bordered input-secondary input-md"
            placeholder="Password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </label>
        <button
          className={"btn btn-block btn-secondary text-white"}
          disabled={isFormEmpty ? false : true}
        >
          Sign in
        </button>
      </form>
    </FormWrapper>
  );
}
