import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as ProductService from "../service/ProductService"
import {getProductType} from "../service/ProductService"
import * as Yup from 'yup';

export function Create() {
    const navigate = useNavigate();
    const [productType, setProductType] = useState([]);

    useEffect(() => {
        const fetchProductTypes = async () => {
            const data = await getProductType();
            setProductType(data);
        }
        fetchProductTypes();
    }, [])
    return (
        <>
            <Formik
                initialValues={{
                    // id: "",
                    code: "",
                    name: "",
                    price: "",
                    productType: "",
                    date: "",
                }}
                validationSchema={Yup.object({
                    // id: Yup.number().required('Không được bỏ trống'),
                    code: Yup.string().matches(/^SP-\d{4}$/, 'Mã sản phẩm không hợp lệ').required('Không được bỏ trống'),
                    name: Yup.string().required('Không được bỏ trống'),
                    price: Yup.number().positive('Giá sản phẩm phải là số dương').required('Không được bỏ trống'),
                    productType: Yup.string().notOneOf(['0'], 'Không được bỏ trống').required('Không được bỏ trống'),
                    date: Yup.string().required('Không được bỏ trống').matches(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/, 'Định dạng ngày tháng không hợp lệ (dd/mm/yyyy)'),

                })}
                onSubmit={ async (values) => {
                    values.productType = parseInt(values.productType);
                    await ProductService.save(values)
                    navigate('/')
                }
                }

            >
                <>
                    <div>
                        <h2>Thêm mới sản phẩm</h2>
                    </div>
                    <Form>
                        <table>
                            {/*<tr>*/}
                            {/*    <th>*/}
                            {/*        <label>ID:{" "}</label>*/}
                            {/*    </th>*/}
                            {/*    <td>*/}
                            {/*        <Field*/}
                            {/*            type="number"*/}
                            {/*            name="id"*/}
                            {/*            id="id"*/}
                            {/*        />*/}
                            {/*        <ErrorMessage name='id' component={'div'} className='text-danger'/>*/}
                            {/*    </td>*/}
                            {/*</tr>*/}
                            <tr>
                                <th>
                                    <label>Mã sản phẩm:{" "}</label>
                                </th>
                                <td>
                                    <Field
                                        type="text"
                                        name="code"
                                        id="code"
                                    />
                                    <ErrorMessage name='code' component={'div'} className='text-danger'/>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Tên sản phẩm:{" "}</label>
                                </th>
                                <td>
                                    <Field
                                        type="text"
                                        name="name"
                                        id="name"
                                    />
                                    <ErrorMessage name='name' component={'div'} className='text-danger'/>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Gía sản phẩm:{" "}</label>
                                </th>
                                <td>
                                    <Field
                                        type="number"
                                        name="price"
                                        id="price"
                                    />
                                    <ErrorMessage name='price' component={'div'} className='text-danger'/>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Loại sản phẩm:{" "}</label>
                                </th>
                                <td>
                                    <Field
                                        as={"select"}
                                        name="productType"
                                        id="productType"
                                    >
                                        <option value="0"></option>
                                        <option value="1">Điện thoại</option>
                                        <option value="2">Máy tính bảng</option>
                                        <option value="3">Laptop</option>
                                    </Field>
                                    <ErrorMessage name='productType' component={'div'} className='text-danger'/>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Ngày sản xuất:{" "}</label>
                                </th>
                                <td>
                                    <Field
                                        type="text"
                                        name="date"
                                        id="date"
                                    />
                                    <ErrorMessage name='date' component={'div'} className='text-danger'/>
                                </td>
                            </tr>
                            <tr>
                                <button type="submit">Xác nhận</button>
                            </tr>
                        </table>
                    </Form>
                </>

            </Formik>
        </>
    )
}