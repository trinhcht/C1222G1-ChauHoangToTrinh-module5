import React, {useEffect, useState} from "react";
import * as ProductService from "../service/ProductService";
import {findAll, getProductType} from "../service/ProductService";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {Field, Form, Formik} from "formik";
import data from "bootstrap/js/src/dom/data";


export const ProductList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState();
    const [productType, setProductType] = useState([]);
    const [idDelete, setIdDelete] = useState(null)
    const [nameDelete, setNameDelete] = useState(null)

    const getListProduct = async () => {
        const listProduct = await findAll();
        setProducts(listProduct);
        console.log("123", listProduct)
    }

    const onDelete = async (id) => {
        const res = await remove(id);
        console.log("res", res)
        if(res.code === 200){
            await getListProduct();
        }
    }

    const getInfoDelete = (id, name) => {
        setIdDelete(id)
        setNameDelete(name)
    }

    useEffect(() => {
        getListProduct();
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
                    name: '',
                    productType: ""
                }}
                onSubmit={(values) => {
                    const searchByName = async () => {
                        let result = await ProductService.findByName(values.name, values.productType)
                        setProducts(result.data)
                        console.log("value", values)
                    }
                    searchByName()
                }
                }>
                <Form>
                    <Field type='text' name='name'/>
                    <Field component='select' name='productType'>
                        {
                            productType.map(((value, index) => (
                                <option key={index} value={value.id}>
                                    {value.nameType}
                                </option>
                            )))
                        }
                    </Field>
                    <button type='submit'>tìm kiếm</button>
                </Form>

            </Formik>
            <div>
                <h2>Danh sách sản phẩm</h2>
            </div>
            <Link to={`create`}>
                <button>Tạo mới</button>
            </Link>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá sản phẩm</th>
                    <th>Loại sản phẩm</th>
                    <th>Ngày sản xuất</th>
                    <th></th>
                </tr>
                <tbody>
                {products?.map((product, index) => {
                    console.log("data", product)
                    return (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.code}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{
                                productType.filter(pro => pro.id === product.productType)[0]?.nameType
                            }</td>
                            <td>{product.date}</td>
                            <td>
                                <Link to={`/update/${product.id}`}>
                                    <button>Chỉnh sửa</button>
                                </Link>

                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => getInfoDelete(products.id, products.name)}
                                >Delete
                                </button>

                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div className="modal" tabIndex={-1} id={"exampleModal"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-danger">Bảng xóa khách hàng</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div>Bạn có muốn xóa <h5 className={"text-danger"}>{nameDelete} ?</h5></div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" data-bs-dismiss="modal"
                                    className="btn btn-danger"
                                    onClick={() => onDelete(idDelete)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
