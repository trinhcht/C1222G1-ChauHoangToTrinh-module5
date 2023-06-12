import React, {Component, useEffect, useState} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Dropdown} from "./Dropdown";
import { useNavigate,useParams } from "react-router-dom";
import {facilityData} from "../data/FacilityData";
import {findAll, getFacilitiesType, update} from "../service/FacilityService";
export const UpdateFacility = () => {
    let params = useParams();
    const navigate = useNavigate();
    const [facilitys, setFacilitys] = useState([])
    const [facilityTypes, setFacilityTypes] = useState([])
    const [isShow, setIsShow] = useState(false)
    const [values, setValues] = useState({})
    const [idUpdate, setIdUpdate] = useState();
    const [type, setType] = useState("0")
    const hanleNavigation = (idToUpdate) =>{
        navigate(`/update/${idToUpdate}`);
    }
    const data = facilityData.find(facility => facility.id == params.id);

    const onUpdate = async () => {
        setIsShow(false);
        await update({
            ...values,
            facilitiesType: +values.facilitiesType
        });
        await getListFacilities();
    }

    const handleUpdate= (id) => {
        setIsShow(true)
        setIdUpdate(id);
        const current = facilitys.find(o => o.id === id);
        setType(current?.facilitiesType);
        setValues(current);
    }

    const getListFacilities = async () => {
        const listFacilities = await findAll();
        setFacilitys(listFacilities);
    }

    const onChange = (e, name)=>{
        setValues(prev => ({
            ...prev,
            [name]: e.target.value
        }))
    }
    const dataUpdate = facilitys.find(o => o.id === idUpdate);

    useEffect(() => {
        getListFacilities();
        const fetchFacilityTypes = async () => {
            const data = await getFacilitiesType();
            setFacilityTypes(data);
        }
        fetchFacilityTypes()
    }, [])

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
                            <select value={type} className="form-select mt-3" aria-label="Danh sách cơ sở"
                                    style={{marginLeft: "20rem"}}
                                    onChange={(e) => {
                                        setType(e.target.value)
                                        setValues(prev => ({
                                            ...prev,
                                            facilitiesType: e.target.value
                                        }))
                                    }}
                            >
                                <option value="0">Danh sách cơ sở</option>
                                <option value="1">Phòng</option>
                                <option value="2">Căn hộ</option>
                                <option value="3">Biệt thự</option>
                            </select>
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