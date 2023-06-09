import React from "react";
import { Formik, Form, Field } from "formik";
import * as LibraryService from "../service/LibraryService";
import { toast } from "react-toastify";
import { useNavigate, NavLink } from "react-router-dom";
import { Oval } from "react-loader-spinner";

export function Create() {
    const navigate = useNavigate();
    return (
        <>
            <NavLink to="/" className="btn btn-dark">
                List
            </NavLink>
            <Formik
                initialValues={{
                    title: "",
                    quantity: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                    const create = async () => {
                        console.log(values);
                        try {
                            await LibraryService.save(values)
                            toast("Added successful");
                            navigate("/");
                        } catch (error) {
                            toast("Added failed");
                        }
                        setSubmitting(false);
                    };
                    create();
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <h1>Add a new Book</h1>
                        <div className="mb-3">
                            <label htmlFor="title" style={{ width: "80px" }}>
                                Title:
                            </label>
                            <Field id="title" name="title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantity" style={{ width: "80px" }}>
                                Quantity:
                            </label>
                            <Field type="number" id="quantity" name="quantity" />
                        </div>
                        { isSubmitting ? (
                            <Oval
                                height={80}
                                width={80}
                                color="#4fa94d"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                                ariaLabel="oval-loading"
                                secondaryColor="#4fa94d"
                                strokeWidth={2}
                                strokeWidthSecondary={2}
                            />
                        ) : (
                            <button type="submit" className="btn btn-success">
                                Add
                            </button>
                        )}
                    </Form>
                )}
            </Formik>
        </>
    );
}