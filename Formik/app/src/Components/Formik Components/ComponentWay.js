import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
const initialValues = {
  name: "",
  email: "",
  channel: "",
  details: "",
  propComp: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNum: ["", ""],
  phNumbers: [""],
};
const onSubmitHandler = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});
function ComponentWay() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          {/* Render Props Pattern */}
          <ErrorMessage name="email">
            {(errorMsg) => {
              <div>{errorMsg}</div>;
            }}
          </ErrorMessage>
        </div>
        <div>
          <label htmlFor="channel">Channel</label>
          <Field type="text" name="channel" />
          <ErrorMessage name="channel" />
        </div>
        <div>
          <label htmlFor="details">Details</label>
          <Field as="textarea" name="details" />
        </div>
        <div>
          <Field name="propComp">
            {(props) => {
              console.log(props);
              const { field, form, meta } = props;
              return (
                <div>
                  <label htmlFor="details">Details</label>
                  <input type="text" {...field} />
                  {meta.touched ? <div>{form.errors.name}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>
        <div>
          <label htmlFor="facebook">Facebook</label>
          <Field type="text" name="social.facebook" />
        </div>
        <div>
          <label htmlFor="twitter">Twitter</label>
          <Field type="text" name="social.twitter" />
        </div>
        <div>
          {/* Array Input */}
          <label htmlFor="primaryPh">Primary Phone Number</label>
          <Field type="text" name="phoneNum[0]" />
        </div>
        <div>
          <label htmlFor="secondaryPh">Secondary Phone Number</label>
          <Field type="text" name="phoneNum[1]" />
        </div>
        <div>
          <label htmlFor="phNum">List of Phone</label>
          <FieldArray name="phNumbers">
            {(fieldArrayProps) => {
              const { form, pop, push } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;
              return <div>
                {
                  phNumbers.map((number,index)=>{
                    return <div key={index}>
                      <Field name={`phNumbers[${index}]`}/>
                      {index > 0 && <button type="button" onClick={()=>pop(index)}>Remove</button>}
                     <button type="button" onClick={()=>push('')}>Add</button>
                    </div>
                  })
                }
              </div>
            }}
          </FieldArray>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default ComponentWay;

// FastField Component is best for performance