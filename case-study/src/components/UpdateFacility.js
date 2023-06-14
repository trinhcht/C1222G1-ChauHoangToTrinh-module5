import React, {useEffect, useState} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Link, useNavigate, useParams} from "react-router-dom";
import {findAll, getFacilitiesType, update} from "../service/FacilityService";
import dbData from "../db.json"

export const UpdateFacility = () => {
    let params = useParams();
    const data = dbData.facilitiesList.find(facility => facility.id == params.id);
    console.log("data", data)
    const navigate = useNavigate();
    const [facilitys, setFacilitys] = useState([])
    const [facilityTypes, setFacilityTypes] = useState([])
    const [isShow, setIsShow] = useState(false)
    const [values, setValues] = useState({})
    const [idUpdate, setIdUpdate] = useState();
    const [type, setType] = useState(data.facilitiesType)
    const hanleNavigation = (idToUpdate) => {
        navigate(`/update/${idToUpdate}`);
    }


    const onUpdate = async () => {
        // setIsShow(false);
        await update({
            ...data,
            ...values,
            facilitiesType: +values.facilitiesType,
        });
        await getListFacilities();
        navigate('/');
    }


    const handleUpdate = (id) => {
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

    const onChange = (e, name) => {
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
                            <h2 className="text-center fw-bold mt-3">Chỉnh sửa thông tin phòng</h2>
                        </div>
                        <div className="dropdown text-center mt-3" style={{paddingRight: 360}}>
                            <tr style={{height: 60}}>
                                <th></th>
                                <td>
                                    <select value={type} className="form-select mt-3" aria-label="Danh sách cơ sở"
                                            style={{marginLeft: "27rem", width: "13rem"}}
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
                                </td>
                            </tr>

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
                                                Ảnh:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control "
                                                name=""
                                                defaultValue={data?.img}
                                                onChange={(e) => {
                                                    onChange(e, 'img')
                                                }}
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
                                                defaultValue={data?.area}
                                                onChange={(e) => {
                                                    onChange(e, 'area')
                                                }}
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
                                                onChange={(e) => {
                                                    onChange(e, 'price')
                                                }}
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
                                                type="number"
                                                className="form-control"
                                                name=""
                                                defaultValue={data?.people}
                                                onChange={(e) => {
                                                    onChange(e, 'people')
                                                }}
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
                                                defaultValue={data?.rentType}
                                                onChange={(e) => {
                                                    onChange(e, 'rentType')
                                                }}
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
                                                defaultValue={data?.serviceFree}
                                                onChange={(e) => {
                                                    onChange(e, 'serviceFree')
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 120}}>
                                        <td>
                                            <div style={{marginLeft: "7rem"}}>
                                                <Link to={`/`}>
                                                    <button type="button" onClick={() => setIsShow(false)}
                                                            className="btn btn-secondary" className="btn btn-dark me-4"
                                                            data-dismiss="modal">Đóng
                                                    </button>
                                                </Link>

                                                <button
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