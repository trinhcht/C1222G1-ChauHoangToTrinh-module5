import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import '../index.css'
import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as FacilityService from "../service/FacilityService";
import * as Yup from 'yup';


export function CreateFacility() {
    const navigate = useNavigate();

    return (
        <Formik
            initialValues = {{
                name: "",
                img: "",
                facilitiesType: "",
                area: "",
                price: "",
                people: "",
                rentType: "",
                serviceFree: "",
            }}
            validationSchema={Yup.object({
                name: Yup.string().required('Không được bỏ trống'),
                img: Yup.string().required('Không được bỏ trống'),
                facilitiesType:Yup.string().notOneOf(['0'], 'Không được bỏ trống').required('Không được bỏ trống'),
                area: Yup.number().positive('Diện tích phải là số dương').required('Không được bỏ trống'),
                price: Yup.number().positive('Chi phí thuê phải là số dương').required('Không được bỏ trống'),
                people: Yup.number().positive('Số lượng người tối đa phải là số dương').required('Không được bỏ trống'),
                rentType: Yup.string().required('Không được bỏ trống').matches(/^(Ngày|Tháng|Năm)$/, 'Kiểu thuê không hợp lệ (Ngày|Tháng|Năm)'),
                serviceFree: Yup.string().required('Không được bỏ trống').matches(/^(Massage|Karaoke|Thức ăn|Nước uống|Thuê xe)$/, 'Dịch vụ đi kèm không hợp lệ (Massage|Karaoke|Thức ăn|Nước uống|Thuê xe)'),
            })}

            onSubmit={(values, {setSubmitting}) => {
                const create = async () =>{
                    await FacilityService.save(values)
                    setSubmitting(false)
                    navigate('/')
                }
                create();
            }}
        >


            <>
                <>
                    <Header/>
                </>
                <>
                    <div
                        className="row mx-0"
                        style={{marginTop: 96, backgroundColor: "rgb(232, 235, 219)"}}
                    >
                        <div className="col-7">
                            <div>
                                <h2 className="text-center mt-3" style={{marginTop: "7%"}}>
                                    Thêm phòng mới
                                </h2>
                            </div>

                            <Form>
                                <div className="dropdown text-center mt-3" style={{paddingRight: 360}}>
                                    <div className="dropdown text-center mt-3" style={{paddingRight: 360}}>
                                        <tr>
                                            <th></th>
                                            <td>
                                                <Field as={"select"} id='facilitiesType' name="facilitiesType" className="form-select mt-3"
                                                       aria-label="Danh sách cơ sở"
                                                       style={{marginLeft: "27rem", width: "14rem"}}>
                                                    <option value="0">Danh sách cơ sở</option>
                                                    <option value="1">Phòng</option>
                                                    <option value="2">Căn hộ</option>
                                                    <option value="3">Biệt thự</option>
                                                </Field>
                                                <ErrorMessage name='facilitiesType' component={'div'} className='text-danger'/>
                                            </td>
                                        </tr>

                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                        <table className="" style={{width: 500}}>
                                            <tr style={{height: 60}}>
                                                <th>
                                                    <label className="fs-5" htmlFor="name">
                                                        Tên dịch vụ:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        style={{marginLeft: "2rem", width: "19rem"}}
                                                        type="text"
                                                        className="form-control "
                                                        name="name"
                                                        id="name"
                                                        placeholder="Nhập tên dịch vụ"
                                                    />
                                                    <ErrorMessage name='name' component={'div'} className='text-danger'/>
                                                </td>
                                            </tr>
                                            <tr style={{height: 60}}>
                                                <th>
                                                    <label className="fs-5" htmlFor="img">
                                                        Hình ảnh:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        type="text"
                                                        className="form-control "
                                                        name="img"
                                                        id="img"
                                                        placeholder="Thêm ảnh"
                                                    />
                                                    <ErrorMessage name='img' component={'div'} className='text-danger'/>
                                                </td>
                                            </tr>
                                            <tr style={{height: 60}}>
                                                <th>
                                                    <label className="fs-5" htmlFor="area">
                                                        Diện tích sử dụng:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="area"
                                                        id="area"
                                                        placeholder="Nhập diện tích sử dụng"
                                                    />
                                                    <ErrorMessage name='area' component={'div'} className='text-danger'/>
                                                </td>
                                            </tr>
                                            <tr style={{height: 60}}>
                                                <th>
                                                    <label className="fs-5" htmlFor="price">
                                                        Chi phí thuê:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        type="number"
                                                        className="form-control"
                                                        name="price"
                                                        id="price"
                                                        placeholder="Nhập chi phí thuê"
                                                    />
                                                    <ErrorMessage name='price' component={'div'} className='text-danger'/>
                                                </td>
                                            </tr>
                                            <tr style={{height: 60}}>
                                                <th>
                                                    <label className="fs-5" htmlFor="people">
                                                        Số lượng người tối đa:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="people"
                                                        id="people"
                                                        placeholder="Nhập số lượng người tối đa"
                                                    />
                                                    <ErrorMessage name='people' component={'div'} className='text-danger'/>
                                                </td>
                                            </tr>
                                            <tr style={{height: 60}}>
                                                <th>
                                                    <label className="fs-5" htmlFor="rentType">
                                                        Kiểu thuê:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        type="text"
                                                        className="form-control "
                                                        name="rentType"
                                                        id="rentType"
                                                        placeholder="Ngày/Tháng/Năm"
                                                    />
                                                    <ErrorMessage name='rentType' component={'div'} className='text-danger'/>
                                                </td>
                                            </tr>
                                            <tr style={{height: 60}}>
                                                <th>
                                                    <label className="fs-5" htmlFor="serviceFree">
                                                        Dịch vụ miễn phí đi kèm:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        type="text"
                                                        className="form-control "
                                                        name="serviceFree"
                                                        id="serviceFree"
                                                        placeholder="Massage/Thuê xe/Thức ăn/Karaoke"
                                                    />
                                                    <ErrorMessage name='serviceFree' component={'div'} className='text-danger'/>
                                                </td>
                                            </tr>
                                            <tr style={{height: 120}}>
                                                <td style={{marginLeft: "auto", marginRight: "auto"}}>
                                                    <div style={{marginLeft: "7rem", textAlign: "center", display: "flex", justifyContent: "center"}}>
                                                        <Link to={`/`}>
                                                            <button type="button"
                                                                    className="btn btn-dark me-4"
                                                                    data-dismiss="modal">Đóng
                                                            </button>
                                                        </Link>

                                                        <button
                                                            style={{width: "6rem"}}
                                                            type="submit" className="btn btn-primary"
                                                        >
                                                            Xác nhận
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                        </table>
                                </div>
                            </Form>
                        </div>
                        <div className="col-5 p-0">
                            <img
                                className="w-100 h-100"
                                src="https://khunghiduong.vn/wp-content/uploads/2017/07/can-ho-1-phong-ngu-ariyana_2.jpg"
                                alt=""
                            />
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