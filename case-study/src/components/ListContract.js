import React, {useState} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Link, useNavigate} from "react-router-dom";
import dbData from "../db.json";
import {findAllContract} from "../service/ContractService";

export const ListContract = () => {
    const navigate = useNavigate();
    const [contract, setContract] = useState(dbData.contractList)


    const getListContract = async () => {
        const listContract = await findAllContract();
        setContract(listContract);
    }

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });

    return (
        <>
            <>
                <Header/>
            </>
            <>
                <>
                    <div className="row mx-0" style={{marginTop: 96}}>
                        <img
                            className="img-fluid px-0"
                            style={{height: 400}}
                            src="https://saigonrealestate.vn/wp-content/uploads/2022/03/phoi-canh-biet-thu-Furama-Resort-Spa-Phu-Quoc.jpg"
                            alt=""
                        />
                        <h2 className="text-center pt-4" style={{
                            fontFamily: '"Playfair Display"',
                            position: "absolute",
                            margin: "inherit",
                            fontSize: 40,
                            color: "#FF0000",
                            textAlign: "center",
                            fontWeight: 700,
                            fontStyle: "normal"
                        }}>
                            DANH SÁCH HỢP ĐỒNG
                        </h2>
                    </div>
                    <div><h2></h2></div>
                    {/*thêm mới*/}
                    <div>
                        <Link to={`/contract/create`}>
                            <button
                                type="button"
                                className="btn btn-success"
                                style={{
                                    marginBottom: "2%",
                                    marginLeft: "8%",
                                    backgroundColor: "#a5eee6"
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    color="black"
                                    className="bi bi-cart4"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                </svg>
                                <a href="#" style={{textDecoration: "none", color: "#1d1d1d"}}>
                                    <i className="bi bi-cart4"> Thêm hợp đồng mới</i>
                                </a>
                            </button>
                        </Link>
                    </div>
                    <div className="row mx-0 mt-3 px-5 py-1">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã hợp đồng</th>
                                <th>Tên khách hàng</th>
                                <th>Ngày bắt đầu</th>
                                <th>Ngày kết thúc</th>
                                <th>Số tiền cọc trước</th>
                                <th>Tổng số tiền thanh toán</th>
                            </tr>
                            </thead>
                            <tbody>
                            {dbData.contractList.map((contract, index) => (
                                <tr>
                                    <td scope="row">{index+1}</td>
                                    <td>{contract.contractCode}</td>
                                    <td>{contract.name}</td>
                                    <td>{contract.dateStart}</td>
                                    <td>{contract.dateEnd}</td>
                                    <td>{formatter.format(contract.price)}</td>
                                    <td>{formatter.format(contract.totalPrice)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    {/*Phân trang*/}
                    <nav
                        className="d-flex justify-content-center"
                        aria-label="Page navigation example"
                    >
                        <ul className="pagination">
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    style={{
                                        border: "none",
                                        backgroundColor: "#daeae9",
                                        color: "#1d1d1c"
                                    }}
                                >
                                    Trước
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    style={{
                                        border: "none",
                                        backgroundColor: "#daeae9",
                                        color: "#1d1d1c"
                                    }}
                                >
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    style={{
                                        border: "none",
                                        backgroundColor: "#daeae9",
                                        color: "#1d1d1c"
                                    }}
                                >
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    style={{
                                        border: "none",
                                        backgroundColor: "#daeae9",
                                        color: "#1d1d1c"
                                    }}
                                >
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    style={{
                                        border: "none",
                                        backgroundColor: "#daeae9",
                                        color: "#1d1d1c"
                                    }}
                                >
                                    Sau
                                </a>
                            </li>
                        </ul>
                    </nav>
                </>

            </>
            <>
                <Footer/>
            </>
        </>
    )

}