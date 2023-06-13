import {Header} from "./Header";
import {Footer} from "./Footer";
import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import dbData from "../db.json";
import {findAllCustomer, update} from "../service/CustomerService";

export const UpdateCustomer = () => {
    let paramsCustomer = useParams();
    const data = dbData.customerList.find(customer => customer.id == paramsCustomer.id);
    console.log("data", data)
    const navigate = useNavigate();
    const [customers, setCustomer] = useState([])
    const [customerTypes, setCustomerTypes] = useState([])
    const [isShow, setIsShow] = useState(false)
    const [values, setValues] = useState({})
    const [idUpdate, setIdUpdate] = useState();
    const [type, setType] = useState(data.customerType)
    const hanleNavigation = (idToUpdate) => {
        navigate(`/customer/update/${idToUpdate}`);
    }


    const onUpdate = async () => {
        // setIsShow(false);
        await update({
            ...data,
            ...values,
            customerType: +values.customerType,
        });
        await getListCustomer();
        navigate('/customer');
    }


    const handleUpdate = (id) => {
        setIsShow(true)
        setIdUpdate(id);
        const current = customers.find(o => o.id === id);
        setType(current?.customerType);
        setValues(current);
    }

    const getListCustomer = async () => {
        const listCustomer = await findAllCustomer();
        setCustomer(listCustomer);
    }

    const onChange = (e, name) => {
        setValues(prev => ({
            ...prev,
            [name]: e.target.value
        }))
    }

    const dataUpdate = customers.find(o => o.id === idUpdate);

    useEffect(() => {
        getListCustomer();
        const fetchCustomerTypes = async () => {
            const data = await getListCustomer();
            setCustomerTypes(data);
        }
        fetchCustomerTypes()
    }, [])
    return (
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
                            <h2 className="text-center fw-bold mt-3">Chỉnh sửa thông khách hàng</h2>
                        </div>
                        <div className="dropdown text-center mt-3" style={{paddingRight: 360}}>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <form action="" style={{width: "35rem"}}>
                                <table className="" style={{width: 500}}>
                                    <input type="hidden" id=""/>
                                    <tbody>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Họ và tên:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control "
                                                name=""
                                                defaultValue={data?.name}
                                                onChange={(e) => {
                                                    onChange(e, 'name')
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Ngày sinh:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name=""
                                                defaultValue={data?.dateOfBirth}
                                                onChange={(e) => {
                                                    onChange(e, 'dateOfBirth')
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Giới tính:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <input type="text"
                                                   className="form-control"
                                                   name=""
                                                   defaultValue={data?.gender}
                                                   onChange={(e) => {
                                                       onChange(e, 'gender')
                                                   }}
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Số CMND:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name=""
                                                defaultValue={data?.citizenIdentification}
                                                onChange={(e) => {
                                                    onChange(e, 'citizenIdentification')
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Số điện thoại:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name=""
                                                defaultValue={data?.phone}
                                                onChange={(e) => {
                                                    onChange(e, 'phone')
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Email:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                ype="text"
                                                className="form-control"
                                                name=""
                                                defaultValue={data?.email}
                                                onChange={(e) => {
                                                    onChange(e, 'email')
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Loại khách:{" "}
                                            </label>
                                        </th>

                                        <td>
                                            <select value={type} className="form-select" aria-label=""
                                                    style={{marginLeft: "10rem", width: "13rem"}}
                                                    onChange={(e) => {
                                                        setType(e.target.value)
                                                        setValues(prev => ({
                                                            ...prev,
                                                            customerType: e.target.value
                                                        }))
                                                    }}
                                            >
                                                <option value="1">Diamond</option>
                                                <option value="2">Platinium</option>
                                                <option value="3">Gold</option>
                                                <option value="4">Silver</option>
                                                <option value="5">Member</option>
                                            </select>
                                        </td>

                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Địa chỉ:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                ype="text"
                                                className="form-control"
                                                name=""
                                                defaultValue={data?.address}
                                                onChange={(e) => {
                                                    onChange(e, 'address')
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 120}}>
                                        <td>
                                            <div style={{marginLeft: "11rem"}}>

                                                <Link to={`/customer`} style={{marginLeft: "-6rem"}}>
                                                    <button type="button" onClick={() => setIsShow(false)}
                                                            className="btn btn-secondary" className="btn btn-dark me-4"
                                                            data-dismiss="modal">Đóng
                                                    </button>
                                                </Link>

                                                <button
                                                    style={{width: "5.7rem"}}
                                                    type="button" onClick={onUpdate} className="btn btn-primary"
                                                >
                                                    Xác nhận
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                    <div className="col-5 p-0">
                        <img
                            className="w-100 h-100 "
                            src="https://furamavietnam.com/wp-content/uploads/2018/10/FRD_Airport_Staff_Service_-2.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </>
            <>
                <Footer/>
            </>
        </>
    )

}