import Hero from '../assets/images/algo.png';
import { Link } from 'react-router-dom';
import Authenticate from './Authenticate';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Card } from 'primereact/card';

export default function LandingPage() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={Hero} className="d-block mx-lg-auto img-fluid hero_img" alt="trust logo" width="800" height="800" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <Card>
            <h1 className="display-5 fw-bold lh-1 mb-3">Diatomix!</h1>
            <p className="fs-5">Order Book Trading!</p>
            <p className="fs-5">The Future of your money is here, Trade in Crypto now!</p>
          </Card>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
            <Authenticate></Authenticate>
            <Link to="/trade">
              <button type="button" className="btn btn-primary btn-lg px-4">
                See the market
              </button>
            </Link>
            {/* <Link to="/registration"> */}
            {/* <button type="button" className="btn btn-primary btn-lg px-4">Personal</button> */}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}