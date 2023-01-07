import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmitHandler = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required"),
})
function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit: onSubmitHandler,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema
  });
  return (
    <div>
      <h1>Youtube Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div>:null}
        </div>
        <div>
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.channel && formik.errors.channel ? <div>{formik.errors.channel}</div> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
