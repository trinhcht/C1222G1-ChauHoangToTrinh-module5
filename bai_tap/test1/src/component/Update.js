// import {useNavigate, useParams} from "react-router";
// import data from "../db.json";
// import React, {useEffect, useState} from "react";
// import {Formik} from "formik";
// import {findAll, getProductType} from "../service/ProductService";
//
// export const Update = () => {
//     let param = useParams();
//     const navigate = useNavigate();
//     const data = data.productList.find(product => product.id == param.id);
//     const [products, setProducts] = useState();
//     const [type, setType] = useState(data.productType);
//     const [values, setValues] = useState({});
//     const hanleNavigation = (idToUpdate) => {
//         navigate(`/update/${idToUpdate}`);
//     }
//     const [isShow, setIsShow] = useState(false);
//     const [idUpdate, setIdUpdate] = useState();
//     const [productType, setProductType] = useState([]);
//
//     const onChange = (e, name) => {
//         setValues(prev => ({
//             ...prev,
//             [name]: e.target.value
//         }))
//     }
//
//     const getListProduct = async () => {
//         const listProduct = await findAll();
//         setProducts(listProduct);
//     }
//
//     const onUpdate = async () => {
//         await update({
//             ...data,
//             ...values,
//             productType: +values.productType,
//         });
//         await getListProduct();
//         navigate('/');
//     }
//     const handleUpdate = (id) => {
//         setIsShow(true)
//         setIdUpdate(id);
//         const current = products.find(o => o.id === id);
//         setType(current?.productType);
//         setValues(current);
//     }
//
//     const dataUpdate = products.find(o => o.id === idUpdate);
//
//     useEffect(() => {
//         getListProduct();
//         const fetchProductTypes = async () => {
//             const data = await getProductType();
//             setProductType(data);
//         }
//
//     return (
//         <>
//             <Formik>
//                 <div>
//                     <h2>Cập nhật danh sách sản phẩm</h2>
//                 </div>
//                 <form>
//                     <input type="hidden" id=""/>
//                     <tr>
//                         <td>
//                             <label>Mã sản phẩm: {""}</label>
//                         </td>
//                         <td>
//                             <input type="text"
//                                    defaultValue={data.code}
//                                    onChange={(e) => {
//                                        onChange(e, 'code')
//                                    }}
//                             />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <label>Tên sản phẩm: {""}</label>
//                         </td>
//                         <td>
//                             <input type="text"
//                                    defaultValue={data.name}
//                                    onChange={(e) => {
//                                        onChange(e, 'name')
//                                    }}
//                             />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <label>Giá sản phẩm: {""}</label>
//                         </td>
//                         <td>
//                             <input type="text"
//                                    defaultValue={data.price}
//                                    onChange={(e) => {
//                                        onChange(e, 'price')
//                                    }}
//                             />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <label>Loại sản phẩm: {""}</label>
//                         </td>
//                         <td>
//                             <select value={type}>
//                                 <option value="1">Điện thoại</option>
//                                 <option value="2">Máy tính bảng</option>
//                                 <option value="3">Laptop</option>
//                             </select>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <label>Ngày sản phẩm: {""}</label>
//                         </td>
//                         <td>
//                             <input type="text"
//                                    defaultValue={data.date}
//                                    onChange={(e) => {
//                                        onChange(e, 'date')
//                                    }}
//                             />
//                         </td>
//                         <td>
//                             <button
//                                 type="button" onClick={onUpdate}
//                             >
//                                 Xác nhận
//                             </button>
//                         </td>
//                     </tr>
//                 </form>
//             </Formik>
//         </>
//     )
// }