"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "@/app/_components/form/FormWrapper";
import { userLogin } from "@/app/_lib/redux/middleware/auth.middleware";
import { TUser } from "@/app/_models/user.models";
import { useAppDispatch } from "@/app/hooks";

type Props = {};
type Login = { username: string; password: string };
export default function LoginForm({}: Props) {
  const init: Login = { username: "", password: "" };
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: init,
    validationSchema: Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required(),
    }),
    onSubmit: async (values: TUser) => {
      await dispatch(userLogin(values));
    },
  });
  const isFormEmpty: string = formik.values.username && formik.values.password;
  return (
    <FormWrapper isLogin>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
        <label className="form-control w-full max-w-xs" htmlFor="username">
          <input
            className="input input-md input-bordered"
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
            className="input input-md input-bordered"
            placeholder="Password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </label>
        <button
          className={
            "btn btn-primary btn-block text-white disabled:bg-secondary disabled:text-white"
          }
          disabled={isFormEmpty ? false : true}
        >
          Sign in
        </button>
      </form>
    </FormWrapper>
  );
}
