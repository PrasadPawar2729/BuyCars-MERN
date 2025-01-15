const CarCard = ({ car, onDelete }) => {
    return (
        <div style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
            <img src={car.image} alt={car.title} style={{ width: '150px', height: '150px' }} />
            <h3>{car.title}</h3>
            <p>Price: ${car.price}</p>
            <p>Color: {car.color}</p>
            <p>Mileage: {car.mileage} km</p>
            <ul>
                {car.description.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <button onClick={() => onDelete(car.id)} style={{ marginTop: '10px' }}>
                Delete
            </button>
        </div>
    );
};

export default CarCard;
