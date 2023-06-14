import {useNavigate} from "react-router";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as CustomerService from "../service/CustomerService"
import React from "react";
import '../index.css'
import {Footer} from "./Footer";
import {Link} from "react-router-dom";
import {Header} from "./Header";
import * as Yup from "yup";

export function CreateCustomer() {
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{
                name: "",
                dateOfBirth: "",
                gender: "",
                citizenIdentification: "",
                phone: "",
                email: "",
                customerType: parseInt("0"),
                address: "",
            }}

            validationSchema={Yup.object({
                name: Yup.string().required('Không được bỏ trống'),
                dateOfBirth: Yup.string().required('Không được bỏ trống').matches(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/, 'Định dạng ngày tháng không hợp lệ (dd/mm/yyyy)'),
                gender: Yup.string().required('Không được bỏ trống').matches(/^(Nam|Nữ|Khác)$/, 'Giới tính không hợp lệ (Nam|Nữ|Khác)'),
                citizenIdentification: Yup.number().positive('Không được chứa dấu -').required('Không được bỏ trống'),
                phone: Yup.string().matches(/^\d{10}$/, 'Số điện thoại phải có 10 chữ số').required('Không được bỏ trống'),
                email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'Email phải có định dạng xxxx@yyyy.com').required('Không được bỏ trống'),
                customerType: Yup.string().notOneOf(['0'], 'Không được bỏ trống').required('Không được bỏ trống'),
                address: Yup.string().required('Không được bỏ trống'),
            })}

            onSubmit={(values, {setSubmitting}) => {
                console.log({values});
                const create = async () => {
                    await CustomerService.save(values)
                    setSubmitting(false)
                    navigate('/customer')
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
                        style={{marginTop: 96, backgroundColor: "rgb(245,228,248)"}}
                    >
                        <div className="col-7">
                            <div>
                                <h2 className="text-center mt-3">
                                    Thêm khách hàng mới
                                </h2>
                            </div>

                            <Form>
                                <div className="dropdown text-center mt-3" style={{paddingRight: 360}}>
                                    <div className="dropdown text-center mt-3" style={{paddingRight: 360}}>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-3"
                                     style={{width: "33rem", marginLeft: "11rem"}}>
                                    <table className="" style={{width: 500}}>
                                        <tr style={{height: 60}}>
                                            <th>
                                                <label className="fs-5" htmlFor="name">
                                                    Họ và tên:{" "}
                                                </label>
                                            </th>
                                            <td>
                                                <Field
                                                    style={{width: "18rem"}}
                                                    type="text"
                                                    className="form-control "
                                                    name="name"
                                                    id="name"
                                                    placeholder="Nhập họ và tên"
                                                />
                                                <ErrorMessage name='name' component={'div'} className='text-danger'/>
                                            </td>
                                        </tr>
                                        <tr style={{height: 60}}>
                                            <th>
                                                <label className="fs-5" htmlFor="img">
                                                    Ngày sinh:{" "}
                                                </label>
                                            </th>
                                            <td>
                                                <Field
                                                    style={{width: "18rem"}}
                                                    type="text"
                                                    className="form-control "
                                                    name="dateOfBirth"
                                                    id="dateOfBirth"
                                                    placeholder="Nhập ngày sinh"
                                                />
                                                <ErrorMessage name='dateOfBirth' component={'div'} className='text-danger'/>
                                            </td>
                                        </tr>
                                        <tr style={{height: 60}}>
                                            <th>
                                                <label className="fs-5" htmlFor="area">
                                                    Giới tính:{" "}
                                                </label>
                                            </th>
                                            <td>
                                                <Field
                                                    style={{width: "18rem"}}
                                                    type="text"
                                                    className="form-control"
                                                    name="gender"
                                                    id="gender"
                                                    placeholder="Nam/Nữ/Khác"
                                                />
                                                <ErrorMessage name='gender' component={'div'} className='text-danger'/>
                                            </td>
                                        </tr>
                                        <tr style={{height: 60}}>
                                            <th>
                                                <label className="fs-5" htmlFor="price">
                                                    Số CMND:{" "}
                                                </label>
                                            </th>
                                            <td>
                                                <Field
                                                    style={{width: "18rem"}}
                                                    type="number"
                                                    className="form-control"
                                                    name="citizenIdentification"
                                                    id="citizenIdentification"
                                                    placeholder="Nhập số cmnd"
                                                />
                                                <ErrorMessage name='citizenIdentification' component={'div'} className='text-danger'/>
                                            </td>
                                        </tr>
                                        <tr style={{height: 60}}>
                                            <th>
                                                <label className="fs-5" htmlFor="people">
                                                    Số điện thoại:{" "}
                                                </label>
                                            </th>
                                            <td>
                                                <Field
                                                    style={{width: "18rem"}}
                                                    type="text"
                                                    className="form-control"
                                                    name="phone"
                                                    id="phone"
                                                    placeholder="Nhập số điện thoại"
                                                />
                                                <ErrorMessage name='phone' component={'div'} className='text-danger'/>
                                            </td>
                                        </tr>
                                        <tr style={{height: 60}}>
                                            <th>
                                                <label className="fs-5" htmlFor="rentType">
                                                    Email:{" "}
                                                </label>
                                            </th>
                                            <td>
                                                <Field
                                                    style={{width: "18rem"}}
                                                    type="text"
                                                    className="form-control "
                                                    name="email"
                                                    id="email"
                                                    placeholder="Nhập email"
                                                />
                                                <ErrorMessage name='email' component={'div'} className='text-danger'/>
                                            </td>
                                        </tr>
                                        <tr style={{height: 60}}>
                                            <th>
                                                <label className="fs-5" htmlFor="serviceFree">
                                                    Loại khách hàng:{" "}
                                                </label>
                                            </th>

                                            <td>
                                                <Field
                                                    as={"select"} id='customerType' name="customerType"
                                                       className="form-select mt-3"
                                                       aria-label="Loại khách hàng"
                                                       style={{ width: "13rem"}}>
                                                    <option value="0"></option>
                                                    <option value="1">Diamond</option>
                                                    <option value="2">Platinium</option>
                                                    <option value="3">Gold</option>
                                                    <option value="4">Silver</option>
                                                    <option value="5">Member</option>
                                                </Field>
                                                <ErrorMessage name='customerType' component={'div'} className='text-danger'/>
                                            </td>
                                        </tr>
                                        <tr style={{height: 60}}>
                                            <th>
                                                <label className="fs-5" htmlFor="serviceFree">
                                                    Loại khách hàng:{" "}
                                                </label>
                                            </th>
                                            <td>
                                                <Field
                                                    type="text"
                                                    className="form-control "
                                                    name="address"
                                                    id="address"
                                                    placeholder="Nhập địa chỉ"
                                                />
                                                <ErrorMessage name='address' component={'div'} className='text-danger'/>
                                            </td>
                                        </tr>
                                        <tr style={{height: 120}}>
                                            <td>
                                                <div style={{marginLeft: "7rem"}}>
                                                    <Link to={`/`}>
                                                        <button type="button"
                                                                className="btn btn-secondary"
                                                                className="btn btn-dark me-4"
                                                                style={{marginLeft: "-5rem"}}
                                                                data-dismiss="modal">Đóng
                                                        </button>
                                                    </Link>

                                                    <button
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

// export function CreateCustomer() {
//     const navigate = useNavigate();
//
//     return (
//         <>
//             <>
//                 <Header/>
//             </>
//             <>
//                 <Formik initialValues={
//                     {
//                         name: '',
//                         dateOfBirth: '',
//                         citizenIdentification: '',
//                         phone: '',
//                         email: ''
//                     }
//                 } validationSchema={Yup.object(
//                     {
//                         name: Yup.string().required('Không được bỏ trống')
//                             .matches(/^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/, 'Tên phải đúng định dạng VD: Nguyễn Văn A'),
//                         dateOfBirth: Yup.date().required('Không được bỏ trống').matches(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/, 'Ngày sinh phải nhập đúng định dạng ngày/tháng/năm'),
//                         citizenIdentification: Yup.string().required('Không được bỏ trống').matches(/^[0-9]{9,10}$/, 'Số CMND phải đúng định dạng XXXXXXXXX (X là số 0-9)'),
//                         phone: Yup.string().required('Không được bỏ trống').matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Vui lòng nhập số điện thoại đúng mẫu: 0xxxxxxx'),
//                         email: Yup.string().required('Không được bỏ trống').email()
//                     }
//                 )
//                 }
//
//
//                         onSubmit={(values, {setSubmitting}) => {
//                             const create = async () => {
//                                 await customerList.save(values)
//                                 setSubmitting(false)
//                                 toast("Thêm mới thành công")
//                                 navigate("/")
//                             }
//                             create()
//                         }
//                         }
//                 >
//                     {
//                         ({isSubmitting}) => (
//                             <Form>
//                                 <div style={{marginTop: 96, backgroundColor: "rgb(232, 235, 219)"}}>
//                                     <div className="row mx-0">
//                                         <div className="col-6">
//                                             <div className="text-center fw-bold" style={{marginTop: "5%"}}>
//                                                 <h2>Thêm mới khách hàng</h2>
//                                             </div>
//                                             <div className="d-flex justify-content-center mt-3">
//                                                 <form action="">
//                                                     <table className="" style={{width: 500}}>
//                                                         <tbody>
//                                                         <tr style={{height: 60}}>
//                                                             <th>
//                                                                 <label className="fs-5" htmlFor="">
//                                                                     Họ và tên:
//                                                                 </label>
//                                                             </th>
//                                                             <td>
//                                                                 <Field
//                                                                     type="text"
//                                                                     className="form-control "
//                                                                     name="name"
//                                                                     placeholder="Nhập họ và tên"
//                                                                 />
//                                                                 <ErrorMessage name='name' component='span' className='form-err'/>
//                                                             </td>
//                                                         </tr>
//                                                         <tr style={{height: 60}}>
//                                                             <th>
//                                                                 <label className="fs-5" htmlFor="">
//                                                                     Ngày sinh:
//                                                                 </label>
//                                                             </th>
//                                                             <td>
//                                                                 <Field
//                                                                     type="date"
//                                                                     className="form-control"
//                                                                     name="dateOfBirth"
//                                                                     placeholder="Nhập ngày sinh"
//                                                                 />
//                                                                 <ErrorMessage name='dateOfBirth' component='span' className='form-err'/>
//                                                             </td>
//                                                         </tr>
//                                                         <tr style={{height: 60}}>
//                                                             <th>
//                                                                 <label className="fs-5" htmlFor="">
//                                                                     Giới tính:
//                                                                 </label>
//                                                             </th>
//                                                             <td>
//                                                                 <Field type="radio" name="gender"/>
//                                                                 Nam
//                                                                 <Field
//                                                                     type="radio"
//                                                                     name="gender"
//                                                                     style={{marginLeft: 20}}
//                                                                 />
//                                                                 Nữ
//                                                                 <Field
//                                                                     type="radio"
//                                                                     name="gender"
//                                                                     style={{marginLeft: 20}}
//                                                                 />
//                                                                 Khác
//                                                             </td>
//                                                         </tr>
//                                                         <tr style={{height: 60}}>
//                                                             <th>
//                                                                 <label className="fs-5" htmlFor="">
//                                                                     Số CMND:
//                                                                 </label>
//                                                             </th>
//                                                             <td>
//                                                                 <input
//                                                                     type="text"
//                                                                     className="form-control"
//                                                                     name="citizenIdentification"
//                                                                     placeholder="Nhập số CMND"
//                                                                 />
//                                                                 <ErrorMessage name='citizenIdentification' component='span' className='form-err'/>
//                                                             </td>
//                                                         </tr>
//                                                         <tr style={{height: 60}}>
//                                                             <th>
//                                                                 <label className="fs-5" htmlFor="">
//                                                                     Số điện thoại:
//                                                                 </label>
//                                                             </th>
//                                                             <td>
//                                                                 <Field
//                                                                     type="text"
//                                                                     className="form-control "
//                                                                     name="phone"
//                                                                     placeholder="Nhập số điện thoại"
//                                                                 />
//                                                                 <ErrorMessage name='phone' component='span' className='form-err'/>
//                                                             </td>
//                                                         </tr>
//                                                         <tr style={{height: 60}}>
//                                                             <th>
//                                                                 <label className="fs-5" htmlFor="">
//                                                                     Email:{" "}
//                                                                 </label>
//                                                             </th>
//                                                             <td>
//                                                                 <Field
//                                                                     type="text"
//                                                                     className="form-control "
//                                                                     name="email"
//                                                                     placeholder="Nhập email"
//                                                                 />
//                                                                 <ErrorMessage name='email' component='span' className='form-err'/>
//                                                             </td>
//                                                         </tr>
//                                                         <tr style={{height: 60}}>
//                                                             <th>
//                                                                 <label className="fs-5" htmlFor="">
//                                                                     Loại khách:
//                                                                 </label>
//                                                             </th>
//                                                             <td>
//                                                                 {/*<select style={{height: 50}} className="form-select"*/}
//                                                                 {/*        name="" id="">*/}
//                                                                 {/*    <option value="">Diamond</option>*/}
//                                                                 {/*    <option value="">Platinium</option>*/}
//                                                                 {/*    <option value="">Gold</option>*/}
//                                                                 {/*    <option value="">Silver</option>*/}
//                                                                 {/*    <option value="">Member</option>*/}
//                                                                 {/*</select>*/}
//                                                                 <Field component="select" name="customerType" className="form-select" id="floatingSelect" aria-label="Floating label select example">
//                                                                     {
//                                                                         customerType.map((customerType) => (
//                                                                             <option value={customerType.id}>{customerType.nameType}</option>
//                                                                         ))
//                                                                     }
//                                                                 </Field>
//                                                             </td>
//                                                         </tr>
//                                                         <tr style={{height: 60}}>
//                                                             <th>
//                                                                 <label className="fs-5" htmlFor="">
//                                                                     Địa chỉ:
//                                                                 </label>
//                                                             </th>
//                                                             <td>
//                                                                 <Field
//                                                                     type="text"
//                                                                     className="form-control "
//                                                                     name=""
//                                                                     placeholder="Nhập địa chỉ"
//                                                                 />
//                                                             </td>
//                                                         </tr>
//                                                         {
//                                                             isSubmitting ? <Oval
//                                                                 height={80}
//                                                                 width={40}
//                                                                 color="grey"
//                                                                 wrapperStyle={{}}
//                                                                 wrapperClass=""
//                                                                 visible={true}
//                                                                 ariaLabel='oval-loading'
//                                                                 secondaryColor="grey"
//                                                                 strokeWidth={2}
//                                                                 strokeWidthSecondary={2}
//                                                             /> : <tr style={{ height: 120 }}>
//                                                                 <td />
//                                                                 <td>
//                                                                     <button className="btn btn-primary float-start">
//                                                                         Xác nhận
//                                                                     </button>
//                                                                 </td>
//                                                             </tr>
//                                                         }
//                                                         {/*<tr style={{height: 120}}>*/}
//
//                                                             {/*<td/>*/}
//                                                             {/*<td>*/}
//                                                             {/*    <button className="btn btn-primary float-start">*/}
//                                                             {/*        Xác nhận*/}
//                                                             {/*    </button>*/}
//                                                             {/*</td>*/}
//                                                         {/*</tr>*/}
//                                                         </tbody>
//                                                     </table>
//                                                 </form>
//                                             </div>
//                                         </div>
//                                         <div className="col-6 px-0">
//                                             <img
//                                                 className="w-100 h-100 "
//                                                 src="https://furamavietnam.com/wp-content/uploads/2018/10/FRD_Airport_Staff_Service_-2.jpg"
//                                                 alt=""
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//
//                             </Form>
//                         )
//
//
//                     }
//                 </Formik>
//             </>
//             <>
//                 <Footer/>
//             </>
//
//         </>
//     )
// }

