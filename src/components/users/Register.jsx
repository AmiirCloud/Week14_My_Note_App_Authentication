import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../store/api/AuthSlice';

const Register = () => {

const navigate  = useNavigate()
const [register, {error  ={}}]   = useRegisterMutation()

  const initialValues = {
    name: '',
    email:"",
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('name is required'),
    email: Yup.string().required('gmail is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values) => {
    // Send the data to the server (localhost:9000/create_note)
   
    register({
     name:values.name, 
     email: values.email, 
     password: values.password
    }).unwrap().then(()=>{
        navigate("/")
    })  
  };
  return (
    <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
    <h1 className='text-3xl mb-5'>Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-5">
            <Field
              type="text"
              name="name"
              placeholder="Enter name"
              className="border border-gray-300 shadow p-3 w-full rounded mb-"
            />
            <ErrorMessage name="name" component="div" className="text-red-500" />
          </div>
          <div className="mb-5">
            <Field
              type="email"
              name="email"
              placeholder="Enter Gmail"
              className="border border-gray-300 shadow p-3 w-full rounded mb-"
            />
            <ErrorMessage name="gmail" component="div" className="text-red-500" />
          </div>

          <div className="mb-5">
      
            <Field
           
              type="password"
              name="password"
              placeholder="Enter Passwrod"
              className="border border-gray-300 shadow p-3 w-full rounded mb-"
            />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>

          <button
            type="submit"
            className="block w-full bg-blue-400 text-white font-bold p-4 rounded-lg hover:bg-yellow-500"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
