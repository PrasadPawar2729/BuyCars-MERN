import { useState } from 'react';

const AddCar = () => {
    const [carDetails, setCarDetails] = useState({
        title: '',
        image: '',
        description: ['', '', '', '', ''],
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // Add car to the backend (Replace with actual API endpoint)
        const response = await fetch('https://buycars-mern-2.onrender.com/api/cars', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(carDetails),
        });
        const data = await response.json();
        if (data.message) {
          alert('Car added successfully');
        } else {
          alert('Failed to add car');
        }
      };
    
      return (
        <div className="dealer-add-car-page">
          <h1>Add a Car</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Car Title" value={carDetails.title} onChange={(e) => setCarDetails({ ...carDetails, title: e.target.value })} required />
            <input type="text" placeholder="Image URL" value={carDetails.image} onChange={(e) => setCarDetails({ ...carDetails, image: e.target.value })} required />
            {carDetails.description.map((desc, index) => (
              <input key={index} type="text" placeholder={`Description ${index + 1}`} value={desc} onChange={(e) => {
                const newDescription = [...carDetails.description];
                newDescription[index] = e.target.value;
                setCarDetails({ ...carDetails, description: newDescription });
              }} required />
            ))}
            <button type="submit">Add Car</button>
          </form>
        </div>
      );
    };

export default AddCar;
