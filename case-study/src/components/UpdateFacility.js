import React, {Component} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Dropdown} from "./Dropdown";
import { useNavigate,useParams } from "react-router-dom";
import {facilityData} from "../data/FacilityData";
export const UpdateFacility = () => {
    let params = useParams();
    const data = facilityData.find(facility => facility.id == params.id);

    const onUpdate = () => {

    }
    console.log({data})
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
                                                defaultValue={data?.nameFacility}
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
                                                defaultValue={data?.usableArea}
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
                                                defaultValue={data?.price}
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
                                                defaultValue={data?.people}
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
                                                defaultValue={data?.rentalType}
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
                                                defaultValue={data?.freeService}
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 120}}>
                                        <td>
                                            <button
                                                className="btn btn-primary float-end"
                                                onClick={onUpdate}
                                            >
                                                Xác nhận
                                            </button>
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