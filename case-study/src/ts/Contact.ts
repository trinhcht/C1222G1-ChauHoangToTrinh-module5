interface Contract {
    id: number;
    contractCode: string;
    name: string;
    facilityInfo: number;
    dateStart: string;
    dateEnd: string;
    price: number;
    totalPrice: number;
}

const contracts: Contract[] = [
    {
        "id": 1,
        "contractCode": "SV-1234",
        "name": "Nguyễn Văn A",
        "facilityInfo": 2,
        "dateStart": "10/12/2022",
        "dateEnd": "13/01/2023",
        "price": 5000000,
        "totalPrice": 15000000
    },
    {
        "id": 2,
        "contractCode": "SV-2345",
        "name": "Nguyễn Văn B",
        "facilityInfo": 3,
        "dateStart": "10/12/2022",
        "dateEnd": "13/01/2023",
        "price": 2000000,
        "totalPrice": 10000000
    },
    {
        "id": 3,
        "contractCode": "SV-3456",
        "name": "Nguyễn Văn C",
        "facilityInfo": 1,
        "dateStart": "10/12/2022",
        "dateEnd": "13/01/2023",
        "price": 3000000,
        "totalPrice": 9000000
    },
    {
        "id": 4,
        "contractCode": "SV-1111",
        "name": "Trần Văn B",
        "facilityInfo": 2,
        "dateStart": "10/12/2022",
        "dateEnd": "13/01/2023",
        "price": 12000000,
        "totalPrice": 13000000
    }
];
