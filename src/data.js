import apartment1 from "./assets/apartment1.jpg";
import apartment2 from "./assets/apartment2.jpg";
import apartment3 from "./assets/apartment3.jpg";
import apartment4 from "./assets/apartment4.jpg";
import villa1 from "./assets/villa1.jpg";
import villa2 from "./assets/villa2.jpg";
import villa3 from "./assets/villa3.jpg";
import villa4 from "./assets/villa4.jpg";
import villa5 from "./assets/villa5.jpg";
import villa6 from "./assets/villa6.jpg";
import office1 from "./assets/office1.jpg";
import office2 from "./assets/office2.jpg";
import room1 from "./assets/room1.jpg";
import room2 from "./assets/room2.jpg";
import room3 from "./assets/room3.jpg";
import room4 from "./assets/room4.jpg";
import { IoBookOutline } from "react-icons/io5";
import { MdBalcony } from "react-icons/md";
import { FaLandmark, FaSpa, FaSwimmingPool } from "react-icons/fa";
import { TbAirConditioning, TbHanger, TbToolsKitchen3 } from "react-icons/tb";
import { LuPalmtree, LuParkingSquare } from "react-icons/lu";
import { PiSecurityCamera } from "react-icons/pi";
import { CgGym } from "react-icons/cg";

export const filterOptions = [
  {
    id: 1,
    title: "property type",
    options: ["residential", "commercial", "land", "industrial"],
  },
  {
    id: 2,
    title: "price limit",
    options: [
      "$1000",
      "$50,000",
      "$100,000",
      "$250,000",
      "$500,000",
      "$500,000+",
    ],
  },
  {
    id: 3,
    title: "Bedrooms",
    options: ["1 Bedroom", "2 Bedrooms", "3 Bedrooms", "3 Bedrooms+"],
  },
  {
    id: 4,
    title: "Bathrooms",
    options: ["1 Bathroom", "2 Bathrooms", "3 Bathrooms", "3 Bathrooms+"],
  },
  {
    id: 5,
    title: "Area Size (sqm)",
    options: ["100 (sqm)", "150 (sqm)", "175 (sqm)", "200 (sqm)", "200+ (sqm)"],
  },
];

export const properties = [
  {
    id: 1,
    title: "rent",
    image: apartment1,
    address: "45 Oxford Street, London",
    type: "apartment",
    price: "$1500/month",
    bedrooms: 2,
    bathrooms: 1,
    size: 120,
  },
  {
    id: 2,
    title: "sale",
    image: villa1,
    address: "72 High Street, Birmingham",
    type: "villa",
    price: "$1,500,000",
    bedrooms: 5,
    bathrooms: 3,
    size: 350,
  },
  {
    id: 3,
    title: "rent",
    image: villa2,
    address: "15 King Street, Manchester",
    type: "villa",
    price: "$5000/month",
    bedrooms: 6,
    bathrooms: 3,
    size: 400,
  },
  {
    id: 4,
    title: "rent",
    image: office1,
    address: "88 Princes Street, Edinburgh",
    type: "office",
    price: "$2500/month",
    bedrooms: 1,
    bathrooms: 1,
    size: 100,
  },
  {
    id: 5,
    title: "rent",
    image: apartment2,
    address: "221B Baker Street, London",
    type: "apartment",
    price: "$2000/month",
    bedrooms: 3,
    bathrooms: 1,
    size: 150,
  },
  {
    id: 6,
    title: "sale",
    image: villa3,
    address: "30 Queen Street, Glasgow",
    type: "villa",
    price: "$2,000,000",
    bedrooms: 7,
    bathrooms: 3,
    size: 550,
  },
  {
    id: 7,
    title: "rent",
    image: villa4,
    address: "12 George Street, Oxford",
    type: "villa",
    price: "$6000/month",
    bedrooms: 6,
    bathrooms: 3,
    size: 450,
  },
  {
    id: 8,
    title: "sale",
    image: apartment3,
    address: "50 Victoria Street, Liverpool",
    type: "apartment",
    price: "$750,000",
    bedrooms: 3,
    bathrooms: 2,
    size: 170,
  },
  {
    id: 9,
    title: "sale",
    image: apartment4,
    address: "25 Church Road, Bristol",
    type: "apartment",
    price: "$800,000",
    bedrooms: 4,
    bathrooms: 2,
    size: 200,
  },
  {
    id: 10,
    title: "sale",
    image: villa5,
    address: "5 Park Lane, London",
    type: "villa",
    price: "$2,500,000",
    bedrooms: 5,
    bathrooms: 3,
    size: 500,
  },
  {
    id: 11,
    title: "rent",
    image: villa6,
    address: "18 Mill Road, Cambridge",
    type: "villa",
    price: "$5500/month",
    bedrooms: 5,
    bathrooms: 2,
    size: 300,
  },
  {
    id: 12,
    title: "rent",
    image: office2,
    address: "100 Castle Street, Cardiff",
    type: "office",
    price: "4000/month",
    bedrooms: 1,
    bathrooms: 1,
    size: 120,
  },
];

export const propertyImages = [
  {
    id: 1,
    image: room1,
  },
  {
    id: 2,
    image: room2,
  },
  {
    id: 3,
    image: room3,
  },
  {
    id: 4,
    image: room4,
  },
];

export const amenities = [
  {
    id: 1,
    title: "Study",
    icon: <IoBookOutline />,
  },
  {
    id: 2,
    title: "Balcony",
    icon: <MdBalcony />,
  },
  {
    id: 3,
    title: "Private Pool",
    icon: <FaSwimmingPool />,
  },
  {
    id: 4,
    title: "Shared Spa",
    icon: <FaSpa />,
  },
  {
    id: 5,
    title: "Covered Parking",
    icon: <LuParkingSquare />,
  },
  {
    id: 6,
    title: "Central A/C",
    icon: <TbAirConditioning />,
  },
  {
    id: 7,
    title: "Private Garden",
    icon: <LuPalmtree />,
  },
  {
    id: 8,
    title: "Security",
    icon: <PiSecurityCamera />,
  },
  {
    id: 9,
    title: "Built in Wardrobes",
    icon: <TbHanger />,
  },
  {
    id: 10,
    title: "Kitchen Appliances",
    icon: <TbToolsKitchen3 />,
  },
  {
    id: 11,
    title: "View of Landmark",
    icon: <FaLandmark />,
  },
  {
    id: 12,
    title: "Shared Gym",
    icon: <CgGym />,
  },
];