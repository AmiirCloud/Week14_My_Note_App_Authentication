import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const Login = () => {



  const initialValues = {
    title: '',
    content: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('Content is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Send the data to the server (localhost:9000/create_note)
    console.log(values);
    addNote({
      title: values.title,
      content: values.content,
    });
    

    // Reset the form after submission
    resetForm();
  };

  return (
    <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-5">
            <Field
              type="gmail"
              name="gmail"
              placeholder="Enter Gmail"
              className="border border-gray-300 shadow p-3 w-full rounded mb-"
            />
            <ErrorMessage name="Gmail" component="div" className="text-red-500" />
          </div>

          <div className="mb-5">
      
            <Field
              as="textarea"
              type="password"
              name="content"
              placeholder="Enter Passwrod"
              className="border border-gray-300 shadow p-3 w-full rounded mb-"
            />
            <ErrorMessage name="content" component="div" className="text-red-500" />
          </div>

          <button
            type="submit"
            className="block w-full bg-blue-400 text-white font-bold p-4 rounded-lg hover:bg-yellow-500"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
