import { useState,useEffect } from "react";


const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch cars from the backend API (Replace with actual endpoint)
    fetch('https://buycars-mern-2.onrender.com/api/cars')
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="home-page">
      <h1>Available Cars</h1>
      <div className="car-list">
        {cars.map(car => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Home;
