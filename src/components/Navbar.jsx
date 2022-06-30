import { React } from "react";

const Navbar = () => {
    return(
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-success border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none logo">
                    <span className="fs-4">Company Name</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#" className="nav-link active text-white" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-dark">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-dark">Services</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-dark">Contact us</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-dark">About us</a></li>
                </ul>
            </header>
        </div>
    );
}

export default Navbar;