import {Header} from "./Header";
import {Footer} from "./Footer";
import React from "react";

export const UpdateCustomer = () =>{
        return(
            <>
                <>
                    <Header/>
                    </>
                <>
                    <div style={{ marginTop: 96, backgroundColor: "rgb(232, 235, 219)" }}>
                        <div className="row mx-0">
                            <div className="col-6">
                                <div className="text-center fw-bold mt-3">
                                    <h2>Cập nhật danh sách khách hàng</h2>
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    <form action="">
                                        <table className="" style={{ width: 500 }}>
                                            <tbody>
                                            <tr style={{ height: 60 }}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Họ và tên:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <input type="text" className="form-control " name="" />
                                                </td>
                                            </tr>
                                            <tr style={{ height: 60 }}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Ngày sinh:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <input type="date" className="form-control" name="" />
                                                </td>
                                            </tr>
                                            <tr style={{ height: 60 }}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Giới tính:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <input type="radio" name="gender" />
                                                    Nam
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        style={{ marginLeft: 20 }}
                                                    />
                                                    Nữ
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        style={{ marginLeft: 20 }}
                                                    />
                                                    Khác
                                                </td>
                                            </tr>
                                            <tr style={{ height: 60 }}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Số CMND:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <input type="text" className="form-control" name="" />
                                                </td>
                                            </tr>
                                            <tr style={{ height: 60 }}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Số điện thoại:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <input type="text" className="form-control " name="" />
                                                </td>
                                            </tr>
                                            <tr style={{ height: 60 }}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Email:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <input type="text" className="form-control " name="" />
                                                </td>
                                            </tr>
                                            <tr style={{ height: 60 }}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Loại khách:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <select style={{ height: 50 }} className="form-select" name="" id="">
                                                        <option value="">Diamond</option>
                                                        <option value="">Platinium</option>
                                                        <option value="">Gold</option>
                                                        <option value="">Silver</option>
                                                        <option value="">Member</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr style={{ height: 60 }}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Địa chỉ:{" "}
                                                    </label>
                                                </th>
                                                <td>
                                                    <input type="text" className="form-control " name="" />
                                                </td>
                                            </tr>
                                            <tr style={{ height: 120 }}>
                                                <td />
                                                <td>
                                                    <button className="btn btn-primary float-start">
                                                        Xác nhận
                                                    </button>
                                                </td>
                                            </tr>
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

                    </>
                <>
                    <Footer/>
                    </>
                </>
        )

}