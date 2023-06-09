import React, {Component} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Dropdown} from "./Dropdown";
import { useNavigate } from "react-router-dom";
export const UpdateFacility = () => {
        return (
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
                                <h2 className="text-center fw-bold mt-3">Chỉnh sửa thông tin phòng</h2>
                            </div>
                            <div className="dropdown text-center mt-3" style={{paddingRight: 360}}>
                                {/*<button*/}
                                {/*    className="btn btn-secondary dropdown-toggle"*/}
                                {/*    type="button"*/}
                                {/*    data-bs-toggle="dropdown"*/}
                                {/*    aria-expanded="false"*/}
                                {/*    onClick="toggleSelect()"*/}
                                {/*>*/}
                                {/*    Danh sách cơ sở*/}
                                {/*</button>*/}
                                {/*<select id="room-select">*/}
                                {/*    <option value="1">Phòng</option>*/}
                                {/*    <option value="2">Căn hộ</option>*/}
                                {/*    <option value="3">Biệt thự</option>*/}
                                {/*</select>*/}
                                <Dropdown/>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <form action="">
                                    <table className="" style={{width: 500}}>
                                        <input type="hidden" id=""/>
                                        <tbody>
                                        <tr style={{height: 60}}>
                                            <th>
                                                <label className="fs-5" htmlFor="">
                                                    Tên dịch vụ:{" "}
                                                </label>
                                            </th>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    name=""
                                                    defaultValue=""
                                                />
                                            </td>
                                        </tr>
                                        <tr style={{height: 60}}>
                                            <th>
                                                <label className="fs-5" htmlFor="">
                                                    Diện tích sử dụng:{" "}
                                                </label>
                                            </th>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name=""
                                                    defaultValue=""
                                                />
                                            </td>
                                        </tr>
                                        <tr style={{height: 60}}>
                                            <th>
                                                <label className="fs-5" htmlFor="">
                                                    Chi phí thuê:{" "}
                                                </label>
                                            </th>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name=""
                                                    defaultValue=""
                                                />
                                            </td>
                                        </tr>
                                        <tr style={{height: 60}}>
                                            <th>
                                                <label className="fs-5" htmlFor="">
                                                    Số lượng người tối đa:{" "}
                                                </label>
                                            </th>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name=""
                                                    defaultValue=""
                                                />
                                            </td>
                                        </tr>
                                        <tr style={{height: 60}}>
                                            <th>
                                                <label className="fs-5" htmlFor="">
                                                    Kiểu thuê:{" "}
                                                </label>
                                            </th>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    name=""
                                                    defaultValue=""
                                                />
                                            </td>
                                        </tr>
                                        <tr style={{height: 60}}>
                                            <th>
                                                <label className="fs-5" htmlFor="">
                                                    Dịch vụ miễn phí đi kèm:{" "}
                                                </label>
                                            </th>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    name=""
                                                    defaultValue=""
                                                />
                                            </td>
                                        </tr>
                                        <tr style={{height: 120}}>
                                            <td>
                                                <button className="btn btn-primary float-end">Xác nhận</button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                        <div className="col-5 p-0">
                            <img
                                className="w-100 h-100"
                                src="https://chefjob.vn/wp-content/uploads/2020/07/tieng-anh-loai-phong-khach-san.jpg"
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