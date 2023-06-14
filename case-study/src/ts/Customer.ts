interface Customer {
    id: number;
    name: string;
    dateOfBirth: string;
    gender: string;
    citizenIdentification: string;
    phone: string;
    email: string;
    customerType: number;
    address: string;
}

export const customers: Customer[] = [
    {
        id: 1,
        name: "Nguyễn Văn AA",
        dateOfBirth: "13-01-1999",
        gender: "Nữ",
        citizenIdentification: "201322266",
        phone: "0909999343",
        email: "nguyenvanaa@gmail.com",
        customerType: 2,
        address: "1 Hoàng Văn Thụ, Đà Nẵng"
    },
    {
        id: 2,
        name: "Nguyễn Văn A",
        dateOfBirth: "13-01-2000",
        gender: "Nam",
        citizenIdentification: "201322211",
        phone: "0909999999",
        email: "nguyenb@gmail.com",
        customerType: 2,
        address: "123 Nguyễn Hoàng, Đà Nẵng"
    }
];
