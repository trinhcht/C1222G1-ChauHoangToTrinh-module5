interface Facility {
    id: number;
    name: string;
    area: string;
    price: string;
    rentType: number;
    img: string;
    people: string;
    facilitiesType: number;
    standard: string | null;
    description: string | null;
    poolarea: string | null;
    numberFloors: number | null;
    serviceFree: string;
    facilityService: string[];
}

export const facilities: Facility[] = [
    {
        id: 3,
        name: "PHÒNG SUITE HƯỚNG BIỂN",
        area: "85.8m2",
        price: "2000",
        rentType: 1,
        img: "https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-768x496.jpg",
        people: "4",
        facilitiesType: 1,
        standard: null,
        description: null,
        poolarea: null,
        numberFloors: null,
        serviceFree: "massage",
        facilityService: ["3", "4", "5"],
    },
];