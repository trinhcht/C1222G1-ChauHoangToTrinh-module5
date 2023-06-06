import {Component} from "react";

export class  Footer extends Component{
    render() {
        return(
            <>
                <>
                    {/*footer*/}
                    <footer className="text-center text-lg-start bg-light text-muted">
                        {/* Section: Links  */}
                        <section
                            className=""
                            style={{ backgroundColor: "#addccf", height: "auto" }}
                        >
                            <div className="container text-center text-md-start">
                                {/* Grid row */}
                                <div className="row mt-2">
                                    {/* Grid column */}
                                    <div
                                        className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"
                                        style={{ backgroundColor: "#f3f3f3", width: 320 }}
                                    >
                                        {/* Content */}
                                        <h6
                                            className="text-uppercase fw-bold mb-4"
                                            style={{
                                                marginTop: 50,
                                                color: "#cbbe73",
                                                fontSize: 25,
                                                textAlign: "center"
                                            }}
                                        >
                                            <i className="fas fa-gem me-3" />
                                            Hướng dẫn di chuyển
                                        </h6>
                                        <p style={{ fontSize: 13 }}>
                                            Khu nghỉ dưỡng Furama là cơ sở hàng đầu để khám phá một trong
                                            những điểm đến hấp dẫn nhất Châu Á. Chỉ cách Đà Nẵng một quãng lái
                                            xe ngắn là bốn Di sản Văn hóa Thế giới được UNESCO công nhận
                                        </p>
                                        <button
                                            style={{
                                                marginLeft: "20%",
                                                backgroundColor: "#046056",
                                                borderColor: "#046056",
                                                color: "white",
                                                height: 40
                                            }}
                                        >
                                            Xem trên bản đồ
                                        </button>
                                        <p style={{ color: "#cbbe73", marginTop: 15 }}>Địa điểm</p>
                                        <table className="table" style={{ fontSize: 13 }}>
                                            <tbody>
                                            <tr>
                                                <td>1.Cố đô Huế</td>
                                                <td>2 tiếng</td>
                                            </tr>
                                            <tr>
                                                <td>2.Phố cổ Hội An</td>
                                                <td>30 phút</td>
                                            </tr>
                                            <tr>
                                                <td>3.Thánh địa Mỹ Sơn</td>
                                                <td>90 phút</td>
                                            </tr>
                                            <tr>
                                                <td>4.Động Phong Nha</td>
                                                <td>3 tiếng</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* Links */}
                                        <ul style={{ marginTop: 50, marginLeft: "-70px" }}>
                                            <li style={{ textAlign: "left" }}>Giá công bố</li>
                                            <li style={{ textAlign: "left" }}>LifeStyle blog</li>
                                            <li style={{ textAlign: "left" }}>Tuyển dụng</li>
                                            <li style={{ textAlign: "left" }}>Liên hệ</li>
                                        </ul>
                                        <img
                                            width="300%"
                                            style={{ marginTop: 170, marginLeft: "-70px" }}
                                            src="https://furamavietnam.com/wp-content/uploads/2023/03/Ariyana-Tourism-Complex-02-500x131.png"
                                        />
                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div
                                        className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"
                                        style={{ marginTop: 50 }}
                                    >
                                        <div className="block-23 mb-3">
                                            <h6
                                                className="text-uppercase fw-bold mb-4"
                                                style={{ color: "#cbbe73" }}
                                            >
                                                Liên hệ
                                            </h6>
                                            <ul>
                                                <li>
                  <span
                      className="icon icon-map-marker"
                      style={{ color: "#2a2a29" }}
                  />
                                                    <span
                                                        className="text"
                                                        style={{ color: "#2a2a29", marginLeft: 10 }}
                                                    >
                    103 – 105 Đường Võ Nguyên Giáp, Phường Khuê Mỹ, Quận Ngũ
                    hành Sơn, Tp. Đà Nẵng, Việt Nam
                  </span>
                                                </li>
                                                <li>
                                                    <a>
                    <span
                        className="icon icon-phone"
                        style={{ color: "#2a2a29" }}
                    />
                                                        <span
                                                            className="text"
                                                            style={{ color: "#2a2a29", marginLeft: 10 }}
                                                        >
                      84-236-3847 333/888
                    </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                    <span
                        className="icon icon-envelope"
                        style={{ color: "#2a2a29" }}
                    />
                                                        <span
                                                            className="text"
                                                            style={{ color: "#2a2a29", marginLeft: 20 }}
                                                        >
                      reservation@furamavietnam.com
                    </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <hr />
                                        <img
                                            style={{ width: 32, height: 32, float: "left" }}
                                            src="https://furamavietnam.com/wp-content/uploads/2019/06/incon-Facbook-1.png"
                                            alt=""
                                            width={32}
                                            height={32}
                                        />
                                        <img
                                            style={{ width: 40, height: 32, float: "left" }}
                                            src="https://furamavietnam.com/wp-content/uploads/2019/06/social-ins.png"
                                            alt=""
                                            width={40}
                                            height={32}
                                        />
                                        <img
                                            style={{ width: 40, height: 32, float: "left" }}
                                            src="https://furamavietnam.com/wp-content/uploads/2021/10/social-youtube.png"
                                            alt=""
                                            width={40}
                                            height={32}
                                        />
                                    </div>
                                    {/* Grid column */}
                                </div>
                                {/* Grid row */}
                            </div>
                        </section>
                        {/* Section: Links  */}
                    </footer>
                </>

            </>
        )
    }

}