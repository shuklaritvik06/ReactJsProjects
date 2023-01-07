import React, { useState } from 'react'
import { Field, Form, Formik } from "formik"
const initialValues = {
  name: '',
  email: ''
}
const savedValueData = {
  name: 'John',
  email:  'john@example.com'
}
function LoadData() {
  const [ savedValues,setSavedValues ] = useState(null);
  return (
    <Formik 
      initialValues={savedValues || initialValues}
      enableReinitialize
      onSubmit={values => console.log('Form data', values)}
    >
        <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
            </div>
            <button type='button' onClick={()=>setSavedValues(savedValueData)}>Load Saved Values</button>
            <button type='submit'>Submit</button>
        </Form>
    </Formik>
  )
}

export default LoadData