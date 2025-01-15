import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', background: '#333', color: '#fff' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
            <Link to="/signup" style={{ color: '#fff', textDecoration: 'none' }}>Sign Up</Link>
            <Link to="/dealer/add-car" style={{ color: '#fff', textDecoration: 'none' }}>Add Car</Link>
            <Link to="/dealer/cars" style={{ color: '#fff', textDecoration: 'none' }}>My Cars</Link>
        </nav>
    );
};

export default Navbar;
