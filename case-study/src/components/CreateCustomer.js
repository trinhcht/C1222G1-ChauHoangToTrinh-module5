import React, {Component, useState} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {ErrorMessage, Formik, Field, Form} from "formik";
import * as Yup from 'yup';
import {ToastContainer, toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {customerData, customerType} from "../data/CustomerData";

export function CreateCustomer() {
    const navigate = useNavigate();

    return (
        <>
            <>
                <Header/>
            </>
            <>
                <Formik initialValues={
                    {
                        name: '',
                        dateOfBirth: '',
                        citizenIdentification: '',
                        phone: '',
                        email: ''
                    }
                } validationSchema={Yup.object(
                    {
                        name: Yup.string().required('Không được bỏ trống')
                            .matches(/^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/, 'Tên phải đúng định dạng VD: Nguyễn Văn A'),
                        dateOfBirth: Yup.date().required('Không được bỏ trống').matches(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/, 'Ngày sinh phải nhập đúng định dạng ngày/tháng/năm'),
                        citizenIdentification: Yup.string().required('Không được bỏ trống').matches(/^[0-9]{9,10}$/, 'Số CMND phải đúng định dạng XXXXXXXXX (X là số 0-9)'),
                        phone: Yup.string().required('Không được bỏ trống').matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Vui lòng nhập số điện thoại đúng mẫu: 0xxxxxxx'),
                        email: Yup.string().required('Không được bỏ trống').email()
                    }
                )
                }


                        onSubmit={(values, {setSubmitting}) => {
                            const create = async () => {
                                await customerList.save(values)
                                setSubmitting(false)
                                toast("Thêm mới thành công")
                                navigate("/")
                            }
                            create()
                        }
                        }
                >
                    {
                        ({isSubmitting}) => (
                            <Form>
                                <div style={{marginTop: 96, backgroundColor: "rgb(232, 235, 219)"}}>
                                    <div className="row mx-0">
                                        <div className="col-6">
                                            <div className="text-center fw-bold" style={{marginTop: "5%"}}>
                                                <h2>Thêm mới khách hàng</h2>
                                            </div>
                                            <div className="d-flex justify-content-center mt-3">
                                                <form action="">
                                                    <table className="" style={{width: 500}}>
                                                        <tbody>
                                                        <tr style={{height: 60}}>
                                                            <th>
                                                                <label className="fs-5" htmlFor="">
                                                                    Họ và tên:
                                                                </label>
                                                            </th>
                                                            <td>
                                                                <Field
                                                                    type="text"
                                                                    className="form-control "
                                                                    name="name"
                                                                    placeholder="Nhập họ và tên"
                                                                />
                                                                <ErrorMessage name='name' component='span' className='form-err'/>
                                                            </td>
                                                        </tr>
                                                        <tr style={{height: 60}}>
                                                            <th>
                                                                <label className="fs-5" htmlFor="">
                                                                    Ngày sinh:
                                                                </label>
                                                            </th>
                                                            <td>
                                                                <Field
                                                                    type="date"
                                                                    className="form-control"
                                                                    name="dateOfBirth"
                                                                    placeholder="Nhập ngày sinh"
                                                                />
                                                                <ErrorMessage name='dateOfBirth' component='span' className='form-err'/>
                                                            </td>
                                                        </tr>
                                                        <tr style={{height: 60}}>
                                                            <th>
                                                                <label className="fs-5" htmlFor="">
                                                                    Giới tính:
                                                                </label>
                                                            </th>
                                                            <td>
                                                                <Field type="radio" name="gender"/>
                                                                Nam
                                                                <Field
                                                                    type="radio"
                                                                    name="gender"
                                                                    style={{marginLeft: 20}}
                                                                />
                                                                Nữ
                                                                <Field
                                                                    type="radio"
                                                                    name="gender"
                                                                    style={{marginLeft: 20}}
                                                                />
                                                                Khác
                                                            </td>
                                                        </tr>
                                                        <tr style={{height: 60}}>
                                                            <th>
                                                                <label className="fs-5" htmlFor="">
                                                                    Số CMND:
                                                                </label>
                                                            </th>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="citizenIdentification"
                                                                    placeholder="Nhập số CMND"
                                                                />
                                                                <ErrorMessage name='citizenIdentification' component='span' className='form-err'/>
                                                            </td>
                                                        </tr>
                                                        <tr style={{height: 60}}>
                                                            <th>
                                                                <label className="fs-5" htmlFor="">
                                                                    Số điện thoại:
                                                                </label>
                                                            </th>
                                                            <td>
                                                                <Field
                                                                    type="text"
                                                                    className="form-control "
                                                                    name="phone"
                                                                    placeholder="Nhập số điện thoại"
                                                                />
                                                                <ErrorMessage name='phone' component='span' className='form-err'/>
                                                            </td>
                                                        </tr>
                                                        <tr style={{height: 60}}>
                                                            <th>
                                                                <label className="fs-5" htmlFor="">
                                                                    Email:{" "}
                                                                </label>
                                                            </th>
                                                            <td>
                                                                <Field
                                                                    type="text"
                                                                    className="form-control "
                                                                    name="email"
                                                                    placeholder="Nhập email"
                                                                />
                                                                <ErrorMessage name='email' component='span' className='form-err'/>
                                                            </td>
                                                        </tr>
                                                        <tr style={{height: 60}}>
                                                            <th>
                                                                <label className="fs-5" htmlFor="">
                                                                    Loại khách:
                                                                </label>
                                                            </th>
                                                            <td>
                                                                {/*<select style={{height: 50}} className="form-select"*/}
                                                                {/*        name="" id="">*/}
                                                                {/*    <option value="">Diamond</option>*/}
                                                                {/*    <option value="">Platinium</option>*/}
                                                                {/*    <option value="">Gold</option>*/}
                                                                {/*    <option value="">Silver</option>*/}
                                                                {/*    <option value="">Member</option>*/}
                                                                {/*</select>*/}
                                                                <Field component="select" name="customerType" className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                                    {
                                                                        customerType.map((customerType) => (
                                                                            <option value={customerType.id}>{customerType.nameType}</option>
                                                                        ))
                                                                    }
                                                                </Field>
                                                            </td>
                                                        </tr>
                                                        <tr style={{height: 60}}>
                                                            <th>
                                                                <label className="fs-5" htmlFor="">
                                                                    Địa chỉ:
                                                                </label>
                                                            </th>
                                                            <td>
                                                                <Field
                                                                    type="text"
                                                                    className="form-control "
                                                                    name=""
                                                                    placeholder="Nhập địa chỉ"
                                                                />
                                                            </td>
                                                        </tr>
                                                        {
                                                            isSubmitting ? <Oval
                                                                height={80}
                                                                width={40}
                                                                color="grey"
                                                                wrapperStyle={{}}
                                                                wrapperClass=""
                                                                visible={true}
                                                                ariaLabel='oval-loading'
                                                                secondaryColor="grey"
                                                                strokeWidth={2}
                                                                strokeWidthSecondary={2}
                                                            /> : <tr style={{ height: 120 }}>
                                                                <td />
                                                                <td>
                                                                    <button className="btn btn-primary float-start">
                                                                        Xác nhận
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        }
                                                        {/*<tr style={{height: 120}}>*/}

                                                            {/*<td/>*/}
                                                            {/*<td>*/}
                                                            {/*    <button className="btn btn-primary float-start">*/}
                                                            {/*        Xác nhận*/}
                                                            {/*    </button>*/}
                                                            {/*</td>*/}
                                                        {/*</tr>*/}
                                                        </tbody>
                                                    </table>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-6 px-0">
                                            <img
                                                className="w-100 h-100 "
                                                src="https://furamavietnam.com/wp-content/uploads/2018/10/FRD_Airport_Staff_Service_-2.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>

                            </Form>
                        )


                    }
                </Formik>
            </>
            <>
                <Footer/>
            </>

        </>
    )
}

