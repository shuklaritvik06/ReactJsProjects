import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from "yup";

const initialValues = {
    name: "",
    email: "",
    comment: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid mail").required("Required"),
    comment: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
function Validating() {
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    // validateOnMount
  >
    {(formik) => {
      console.log("Formik props", formik);
      return (
        <>
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label htmlFor="comment">Comment</label>
              <Field
                as="textarea"
                name="comment"
                id="comment"
                cols="30"
                rows="10"
              />
              <ErrorMessage name="comment" />
            </div>
          </Form>
          <button onClick={()=>formik.validateForm()}>Validate all</button>
          <button onClick={()=>formik.validateField("comment")}>Validate field</button>
          <button type='submit' disabled= {!formik.isValid}>Submit</button>
        </>
      );
    }}
  </Formik>
  )
}

export default Validating