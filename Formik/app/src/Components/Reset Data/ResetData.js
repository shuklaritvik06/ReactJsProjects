import React from 'react'
import { Field, Form, Formik } from "formik"
const onSubmit = (values,props)=>{
    console.log('Form data', values)
    console.log('submit props', props)
    props.resetForm()
}
function ResetData() {
  return (
    <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={onSubmit}
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
            <button type='submit'>Submit</button>
            <button type='reset'>Reset</button>
        </Form>
    </Formik>
  )
}

export default ResetData