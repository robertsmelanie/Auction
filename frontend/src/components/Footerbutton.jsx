import { Link } from 'react-router-dom';
import '../styles/Components.css';

function FooterButtons() {
    return (
        <div className="footer-buttons">
            <Link to="/" className='custom-footer-button'>Home</Link>
            <Link to="/contact" className='custom-footer-button'>Contact Page</Link>
            <Link to="/about" className='custom-footer-button'>About Us</Link>
                    
            <Link to="/health" className="custom-footer-button">Health</Link>
            <Link to="/supplies" className="custom-footer-button">Supplies</Link>
            <Link to="/history" className="custom-footer-button">History</Link>

        </div>
    );
}

export default FooterButtons;
