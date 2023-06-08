import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import React from "react";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {RotatingLines} from "react-loader-spinner";

export function HealthDeclaration() {
    return (
        <>
            <Formik initialValues={
                {
                    name: '',
                    id: '',
                    yearOfBirth: '',
                    gender: '',
                    nationality: '',
                    companyWorking: '',
                    partsWorking: '',
                    isHaveHealthInsuranceCard: false,
                    province: '',
                    district: '',
                    wards: '',
                    apartmentNumber: '',
                    phone: '',
                    email: '',
                    textarea: '',
                    signOfIllness: [],
                    contactWith: []
                }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Không được bỏ trống'),
                        id: Yup.string().required('Không được bỏ trống'),
                        yearOfBirth: Yup.number().integer('Không được bỏ trống')
                            .min(1990),
                        nationality: Yup.string().required('Không được bỏ trống'),
                        province: Yup.string().required('Không được bỏ trống'),
                        district: Yup.string().required('Không được bỏ trống'),
                        wards: Yup.string().required('Không được bỏ trống'),
                        apartmentNumber: Yup.string().required('Không được bỏ trống'),
                        phone: Yup.string().required('Không được bỏ trống').matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Vui lòng nhập số điện thoại đúng mẫu: 0xxxxxxx'),
                        email: Yup.string().required('Không được bỏ trống').matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Vui lòng nhập email theo mẫu: xxx@x.x"),
                    })}

                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            setSubmitting(false);
                            toast("Khai báo y tế thành công");
                        }, 500)
                    }}
            >
                {
                    ({isSubmitting}) => (
                        <Form>
                            <div className="row px-5 mt-2">
                                <div className='col-5'>
                                    <h2 className='fw-bold mt-2'>Khai báo y tế</h2>
                                    <div className='form-group'>
                                        <label>Họ tên</label>
                                        <Field type='text' className="form-control" name='name' id='name'/>
                                        <ErrorMessage name='name' component={'div'} className='text-danger'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Số hộ chiếu /CMND</label>
                                        <Field type="text" className="form-control" name="id" id='id'/>
                                        <ErrorMessage name='id' component={'div'} className='text-danger'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Năm sinh</label>
                                        <Field type="number" className="form-control" name="yearOfBirth"
                                               id='yearOfBirth'/>
                                    </div>
                                    <div className='form-group'>

                                        <label>Giới tính</label>

                                        <div className="form-check form-check-inline">
                                            <Field
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="rd-1"
                                                value="1"
                                            />
                                            <label className="form-check-label" htmlFor="rd-1">
                                                Nam
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Field
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="rd-2"
                                                value="2"
                                            />
                                            <label className="form-check-label" htmlFor="rd-2">
                                                Nữ
                                            </label>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label>Quốc tịch</label>
                                        <Field type="text" className="form-control" name="nationality"
                                               id='nationality'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Công ty làm việc</label>
                                        <Field type="text" className="form-control" name='companyWorking'
                                               id='companyWorking'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Bộ phận làm việc</label>
                                        <Field type="text" className="form-control" name="partsWorking"
                                               id='partsWorking'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Có thẻ bảo hiểm y tế</label>
                                        <Field className="form-check-input pt-1" style={{marginLeft: "4%"}}
                                               type="checkbox" name="isHaveHealthInsuranceCard"/>
                                    </div>
                                    <h4 className='fw-bold'>Địa chỉ liên lạc tại Việt Nam</h4>
                                    <div className='form-group'>
                                        <label>Tỉnh thành</label>
                                        <Field type="text" className="form-control" name="province" id='province'/>
                                        <ErrorMessage name='province' component={'div'} className='text-danger'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Quận /huyện</label>
                                        <Field type="text" className="form-control" name="district" id='district'/>
                                        <ErrorMessage name='district' component={'div'} className='text-danger'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Phường /xã</label>
                                        <Field type="text" className="form-control" name="wards" id='wards'/>
                                        <ErrorMessage name='wards' component={'div'} className='text-danger'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Số nhà, phố, tổ dân phố /thôn /đội</label>
                                        <Field type="text" className="form-control" name="apartmentNumber"
                                               id='apartmentNumber'/>
                                        <ErrorMessage name='apartmentNumber' component={'div'} className='text-danger'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Điện thoại</label>
                                        <Field type="number" className="form-control" name='phone' id='phone'/>
                                        <ErrorMessage name='phone' component={'div'} className='text-danger'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <Field type="text" className="form-control" type='email' name='email'
                                               id='email'/>
                                        <ErrorMessage name='email' component={'div'} className='text-danger'/>
                                    </div>
                                    <div className='form-group'>
                                        <h5>Trong vòng 14 ngày qua, Anh /Chị có đến quốc gia /vùng lãnh thổ nào (Có
                                            thể đi
                                            qua nhiều quốc gia)</h5>
                                        {/*<textarea name="placesPassed"/>*/}
                                        <Field component='textarea' className="form-control" name="placesPassed"
                                               id="textarea" placeholder=""/>
                                    </div>
                                    <div className='form-group'>
                                        <h5>Trong vòng 14 ngày qua, Anh /Chị có thấy xuất hiện dấu hiệu nào sau đây
                                            không?</h5>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-1"
                                                value="cb-1"
                                                name="signOfIllness"
                                            />
                                            <label className="form-check-label" htmlFor="cb-1">
                                                Sốt
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-2"
                                                value="cb-2"
                                                name="signOfIllness"
                                            />
                                            <label className="form-check-label" htmlFor="cb-2">
                                                Ho
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-3"
                                                value="cb-3"
                                                name="signOfIllness"
                                            />
                                            <label className="form-check-label" htmlFor="cb-3">
                                                Khó thở
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-4"
                                                value="cb-4"
                                                name="signOfIllness"
                                            />
                                            <label className="form-check-label" htmlFor="cb-4">
                                                Viêm phổi
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-5"
                                                value="cb-5"
                                                name="signOfIllness"
                                            />
                                            <label className="form-check-label" htmlFor="cb-5">
                                                Đau họng
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-6"
                                                value="cb-6"
                                                name="signOfIllness"
                                            />
                                            <label className="form-check-label" htmlFor="cb-6">
                                                Mệt mỏi
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <h5>Trong vòng 14 ngày qua, Anh /Chị có tiếp xúc với?</h5>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-01"
                                                value="cb-01"
                                                name="contactWith"
                                            />
                                            <label className="form-check-label" htmlFor="cb-01">
                                                Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-02"
                                                value="cb-02"
                                                name="contactWith"
                                            />
                                            <label className="form-check-label" htmlFor="cb-02">
                                                Người từ nước có bệnh COVID-19
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-03"
                                                value="cb-03"
                                                name="contactWith"
                                            />
                                            <label className="form-check-label" htmlFor="cb-03">
                                                Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        {
                                            isSubmitting ?
                                                <RotatingLines
                                                    strokeColor="grey"
                                                    strokeWidth="5"
                                                    animationDuration="0.75"
                                                    width="30"
                                                    visible={true}
                                                /> : <button type="submit" className="btn btn-primary">Xác nhận</button>
                                        }
                                    </div>
                                    <div className='col-4'></div>
                                </div>
                            </div>
                            <ToastContainer/>
                        </Form>
                    )
                }
            </Formik>

        </>
    )

}