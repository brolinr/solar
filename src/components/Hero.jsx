import { React } from "react";
import theme from './bootstrap-themes.jpg'

const Hero = () => {
    return(
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={theme} className="bd-placeholder-img img-fluid" alt="Bootstrap Themes" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Forstering sloar energy growth</h1>
                        <ul>
                            <li>Service provided for one</li>
                            <li>Service provided for two</li>
                            <li>Service provided for three</li>
                            <li>Service provided for four and last</li>
                        </ul>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Our services</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">About us</button>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Hero;