import { useState } from 'react';
import CarCard from '../Components/CarCard';

const CarList = () => {
     const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch dealer cars from the backend (Replace with actual API endpoint)
    fetch('https://buycars-mern-2.onrender.com/api/cars')
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="dealer-car-list-page">
      <h1>My Cars</h1>
      <div className="car-list">
        {cars.map(car => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
