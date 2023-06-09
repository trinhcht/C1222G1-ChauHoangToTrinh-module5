import React, {useEffect, useState} from "react";
import {Formik, Form, Field} from "formik";
import * as LibraryService from "../service/LibraryService";
import {toast} from "react-toastify";
import {useNavigate, useParams, Link} from "react-router-dom";
import {RotatingLines} from "react-loader-spinner";

export function Update() {
    const navigate = useNavigate();
    const param = useParams();
    const [book, setBook] = useState();

    useEffect(() => {
        console.log(param.id)
        async function getBookDetail() {
            const bookDetail = await LibraryService.findById(param.id);
            setBook(bookDetail.data);
        }

        getBookDetail();
    }, [param.id]);

    if (!book) {
        return (
            <RotatingLines
        strokeColor="pink"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        />
        );
    }

    return (
        <>
            <Link to="/" className="btn btn-dark">
                List
            </Link>
            <Formik
                initialValues={{
                    id: book?.id,
                    title: book?.title,
                    quantity: book?.quantity,
                }}
                onSubmit={(values, {setSubmitting}) => {
                    const create = async () => {
                        console.log(values);
                        try {
                            await LibraryService.edit(values)
                            toast("Update successful");
                            navigate("/");
                        } catch (error) {
                            toast("Update failed");
                        }

                        setSubmitting(false);
                    };
                    create();
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <h1>Update</h1>
                        <Field id="id" type="hidden" name="id"/>
                        <div className="mb-3">
                            <label htmlFor="title" style={{width: "80px"}}>
                                Title:
                            </label>
                            <Field id="title" name="title"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantity" style={{width: "80px"}}>
                                Quantity:
                            </label>
                            <Field type="number" id="quantity" name="quantity"/>
                        </div>
                        {isSubmitting ? (
                            <RotatingLines
                                strokeColor="pink"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="96"
                                visible={true}
                            />
                        ) : (
                            <button type="submit" className="btn btn-success">
                                Update
                            </button>
                        )}
                    </Form>
                )}
            </Formik>
        </>
    );
}