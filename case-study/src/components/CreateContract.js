import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import '../index.css'
import {useNavigate} from "react-router";
import * as ContractService from "../service/ContractService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import * as Yup from "yup";

export function CreateContract() {
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                contractCode: "",
                name: "",
                dateStart: "",
                dateEnd: "",
                price: "",
                totalPrice: "",
            }}
            validationSchema={Yup.object({
                contractCode: Yup.string().required('Không được bỏ trống').matches(/^SV-\d{4}$/, 'Mã hợp đồng không hợp lệ SV-xxxx'),
                name: Yup.string().required('Không được bỏ trống'),
                dateStart: Yup.string().required('Không được bỏ trống').matches(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/, 'Định dạng ngày tháng không hợp lệ (dd/mm/yyyy)'),
                dateEnd: Yup.string().required('Không được bỏ trống').matches(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/, 'Định dạng ngày tháng không hợp lệ (dd/mm/yyyy)'),
                price: Yup.number().positive('Tiền cọc trước là số dương').required('Không được bỏ trống'),
                totalPrice: Yup.number().positive('Tổng số tiền thanh toán phải là số dương').required('Không được bỏ trống'),
            })}

            onSubmit={(values, {setSubmitting}) => {
                const create = async () => {
                    await ContractService.save(values)
                    setSubmitting(false)
                    navigate('/contract')
                }
                create();
            }}
        >
            <>
                <>
                    <Header/>
                </>
                <>
                    <div style={{marginTop: 96, backgroundColor: "rgb(245,228,248)"}}>
                        <div className="row mx-0">
                            <div className="col-7">
                                <div className="text-center fw-bold" style={{marginTop: "5%"}}>
                                    <h2>Thêm Mới Hợp Đồng</h2>
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    <Form>
                                        <table className="" style={{width: 500}}>
                                            <tbody>
                                            <tr style={{height: 60}}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Mã hợp đồng:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        type="text"
                                                        className="form-control "
                                                        name="contractCode"
                                                        id="contractCode"
                                                        placeholder="Nhập mã hợp đồng"
                                                    />
                                                    <ErrorMessage name='contractCode' component={'div'} className='text-danger'/>
                                                </td>
                                            </tr>
                                            <tr style={{height: 60}}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Tên khách hàng:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        type="text"
                                                        className="form-control "
                                                        name="name"
                                                        id="name"
                                                        placeholder="Nhập tên khách hàng"
                                                    />
                                                    <ErrorMessage name='name' component={'div'} className='text-danger'/>
                                                </td>
                                            </tr>
                                            <tr style={{height: 60}}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Ngày bắt đầu:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="dateStart"
                                                        id="dateStart"
                                                        placeholder="Nhập ngày bắt đầu"
                                                    />
                                                    <ErrorMessage name='dateStart' component={'div'} className='text-danger'/>
                                                </td>
                                            </tr>
                                            <tr style={{height: 60}}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Ngày kết thúc:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="dateEnd"
                                                        id="dateEnd"
                                                        placeholder="Nhập ngày kết thúc"
                                                    />
                                                    <ErrorMessage name='dateEnd' component={'div'} className='text-danger'/>
                                                </td>
                                            </tr>
                                            <tr style={{height: 60}}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Số tiền cọc trước:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        type="number"
                                                        className="form-control"
                                                        name="price"
                                                        id="price"
                                                        placeholder="Nhập số tiền cọc trước"
                                                    />
                                                    <ErrorMessage name='price' component={'div'} className='text-danger'/>
                                                </td>
                                            </tr>
                                            <tr style={{height: 60}}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Tổng số tiền thanh toán:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field style={{height: 60, width: 300}}
                                                           type="number"
                                                           className="form-control "
                                                           name="totalPrice"
                                                           id="totalPrice"
                                                           placeholder="Nhập tổng số tiền thanh toán"
                                                    />
                                                    <ErrorMessage name='totalPrice' component={'div'} className='text-danger'/>
                                                </td>
                                            </tr>
                                            <tr style={{
                                                height: 120,
                                                width: 300,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                marginTop: '3rem'
                                            }}>
                                                <div style={{marginLeft: "12rem"}}>
                                                    <Link to={`/contract`}>
                                                        <button type="button"
                                                                className="btn btn-secondary"
                                                                className="btn btn-dark me-4"
                                                                style={{marginLeft: "-5rem"}}
                                                                data-dismiss="modal">Đóng
                                                        </button>
                                                    </Link>

                                                    <button
                                                        type="submit" className="btn btn-primary"
                                                        style={{width: "6rem"}}
                                                    >
                                                        Xác nhận
                                                    </button>
                                                </div>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </Form>
                                </div>
                            </div>
                            <div className="col-5 p-0">
                                <img
                                    className="w-100 h-100 "
                                    src="https://cungbandulich.net/wp-content/uploads/2022/06/uu-dai-diem-den-mua-he-tu-furama-resort-da-nang-1.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                </>
                <>
                    <Footer/>
                </>
            </>
        </Formik>
    )
}