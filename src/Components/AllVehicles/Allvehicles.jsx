import React, { useEffect, useState } from "react";
import car1 from "./../../assets/imges/landing-page/car1.png";
import car2 from "./../../assets/imges/landing-page/car2.png";
import car3 from "./../../assets/imges/landing-page/car3.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Pagination } from "flowbite-react";

const carImages = [car1, car2, car3];

const SearchBar = ({ onSearch }) => (
  <div className="flex shadow-lg mx-[7%] rounded-md">
    <input
      type="search"
      placeholder="Search by name"
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg"
      onChange={(e) => onSearch(e.target.value)}
    />
    <button
      className="bg-blue-700 text-white p-2.5 rounded-lg"
      onClick={() => onSearch("")}
    >
      Search
    </button>
  </div>
);

const CarCard = ({ car, image, onViewDetails }) => (
  <div className="bg-white border rounded-lg shadow-lg m-3">
    <img className="w-full rounded-lg" src={image} alt="Car" />
    <div className="p-4">
      <h5 className="text-xl font-medium">{car.car} {car.car_model}</h5>
      <p className="text-sm text-gray-500">{car.car_model_year}</p>
      <p className="text-sm text-gray-500">Price: {car.price} /day</p>
      <button className="bg-blue-700 text-white p-2 rounded-lg mt-2" onClick={onViewDetails}>
        View Details
      </button>
    </div>
  </div>
);

export default function Allvehicles() {
  const [carDetails, setCarDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data } = await axios.get(`https://myfakeapi.com/api/cars/`);
        setCarDetails(data.cars.slice(0, 30));
      } catch (error) {
        console.error("Error fetching car details:", error);
        setCarDetails([]);
      }
    };
    fetchCars();
  }, []);

  const filteredCars = carDetails.filter((car) =>
    car.car.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentItems = filteredCars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="py-4">
      <SearchBar onSearch={setSearchQuery} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mt-6">
        {currentItems.map((car, index) => (
          <CarCard
            key={index}
            car={car}
            image={carImages[index % carImages.length]}
            onViewDetails={() => navigate("/details")}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredCars.length / itemsPerPage)}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
