//

import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas/Index";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_Password: "",
};

export const Registration = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      // handle submission logic
      resetForm();
    },
  });

  return (
    <>
      <div className="container">
        <div className="modal">
          <div className="modal-container">
            <div className="modal-left">
              <h1 className="modal-title">Welcome</h1>
              <p className="modal-desc">
                To the Avneet KAUR website for programmers
              </p>
              <form onSubmit={handleSubmit}>
                <div className="input-block">
                  <label htmlFor="name" className="input-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    id="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? (
                    <p className="form-error">{errors.name}</p>
                  ) : null}
                </div>
                <div className="input-block">
                  <label htmlFor="email" className="input-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="form-error">{errors.email}</p>
                  ) : null}
                </div>
                <div className="input-block">
                  <label htmlFor="password" className="input-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    autoComplete="off"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error">{errors.password}</p>
                  ) : null}
                </div>
                <div className="input-block">
                  <label htmlFor="confirm_Password" className="input-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirm_Password"
                    autoComplete="off"
                    id="confirm_Password"
                    placeholder="Confirm Password"
                    value={values.confirm_Password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirm_Password && touched.confirm_Password ? (
                    <p className="form-error">{errors.confirm_Password}</p>
                  ) : null}
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
