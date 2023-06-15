import React from "react";
import '../index.css'
import {Link, useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <header>
                <nav className="header-fixed" style={{position: "fixed", zIndex: 1, left: 0, right: 0}}>
                    <div style={{backgroundColor: "#fffafa"}}
                         className="d-flex align-items-center justify-content-center py-3 border-bottom">
                        <Link to={`/`}
                              className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
                              style={{marginRight: -180 + "px"}}>
                            <img width="40px" style={{marginLeft: 70 + "px"}}
                                 src="https://furamavietnam.com/wp-content/uploads/2018/08/logo.png" alt=""/>
                        </Link>

                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <Link to={`/`} className="nav-link fs-5 px-4 fw-bold text-dark text-hover">
                                    Trang chủ
                                </Link>
                            </li>
                            <li>
                                <Link to={`/contract`} className="nav-link fs-5 px-4 fw-bold text-dark text-hover">
                                    Hợp đồng
                                </Link>
                            </li>
                            <li>
                                <Link to={`/customer`} className="nav-link fs-5 px-4 fw-bold text-dark text-hover">
                                    Khách hàng
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
                                >
                                    Khuyến mãi
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
                                >
                                    Hỗ trợ
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle fs-5 px-4 fw-bold text-dark text-hover"
                                    href="#"
                                    type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Quản lí
                                </a>
                                <ul className="dropdown-menu" style={{backgroundColor: "#fffafa"}}>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Dịch vụ
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Khách hàng
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Hợp đồng
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="col-md-3 ps-5">
                            <button type="button" className="btn btn-outline-dark me-2 shadow">
                                Đăng nhập
                            </button>
                            <button
                                type="button"
                                className=" btn btn-dark shadow rigister-hover ms-2"
                            >
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );

}