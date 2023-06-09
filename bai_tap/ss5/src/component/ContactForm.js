import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import 'react-toastify/dist/ReactToastify.css'
import {toast, ToastContainer} from "react-toastify";
import * as Yup from 'yup'
import {RotatingLines} from "react-loader-spinner";

export function ContactForm() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Không được để trống"),
                    email: Yup.string().required("Không được để trống").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
                    phone: Yup.number().string().required("Không được để trống"),

                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log(values)
                        setSubmitting(false)
                        toast.success(`success ${values.name}`)
                    }, 1000)
                }}
            >
                {
                    ({isSubmitting}) => (
                        <div className='container'>
                            <h1>Contact Form</h1>
                            <Form>
                                <div className='mb-3'>
                                    <label htmlFor='contactName'>Name</label>
                                    <Field type='text' className='form-control' id='contactName' name='name'/>
                                    <ErrorMessage name='name' className='form-err' component='span'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='contactEmail' className='form-label'>Email</label>
                                    <Field type='text' className='form-control' id='contactEmail' name='email'/>
                                    <ErrorMessage name='email' className='form-err' component='span'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='contactPhone' className='form-label'>Phone</label>
                                    <Field type='text' className='form-control' id='contactPhone' name='phone'/>
                                    <ErrorMessage name='phone' className='form-err' component='span'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='contactMessage' className='form-label'>Message</label>
                                    <Field type='textarea' className='form-control' id='contactMessage' name='message'/>
                                </div>
                                {
                                    isSubmitting ?
                                        <RotatingLines
                                            strokeColor="lightPink"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            width="96"
                                            visible={true}
                                        />
                                        :
                                        <button type='submit' className='btn btn-primary'>Submit</button>
                                }
                            </Form>
                        </div>
                    )
                }
            </Formik>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}