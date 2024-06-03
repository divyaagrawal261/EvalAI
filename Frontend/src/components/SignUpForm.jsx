import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    firstName: Yup.string(),
    lastName: Yup.string(),
    terms: Yup.boolean().oneOf([true], 'Accept Terms & Conditions is required')
  });

  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    setTimeout(() => {
      setSubmitting(false);
      setStatus({ success: 'Signup successful! A welcome email has been sent.' });
      navigate('/posts');
    }, 1000);
  };

  return (
    <div className='p-2'>
      <div className="max-w-md mx-auto p-6 bg-white drop-shadow-2xl rounded-lg border">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <Formik
          initialValues={{email: '', password: '', confirmPassword: '', firstName: '', lastName: '', terms: false }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, status }) => (
            <Form className="space-y-4">
              <div className="form-group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Field name="email" type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <Field name="password" type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <Field name="confirmPassword" type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="form-group">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <Field name="firstName" type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <Field name="lastName" type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="form-group">
                <label className="inline-flex items-center">
                  <Field type="checkbox" name="terms" className="form-checkbox h-5 w-5 text-indigo-600" />
                  <span className="ml-2 text-sm text-gray-600">I accept the terms and conditions</span>
                </label>
                <ErrorMessage name="terms" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              {status && status.success && <div className="text-green-500 text-sm mb-4">{status.success}</div>}
              <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Sign Up'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpForm;
