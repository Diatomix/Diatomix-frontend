//import Header from '../components/Header';
//import BoundedLayout from '../components/GridLayout';
import { useContext } from 'react';
import LandingPage from '../components/LandingPage';
import NavBar from '../components/NavBar';
import { AppContext } from '../contexts/app-context';
import GridLayout from '../components/GridLayout';
import Header from '../components/Header';
import PlaceOrder from '../components/configurable/PlaceOrder/PlaceOrder';
import { Link, useParams } from 'react-router-dom';
import { Card } from 'primereact/card';

export default function SelectAsset() {
  const appData = useContext(AppContext);

  return (
    <>
      <Header />
      <Card className="m-2">
        <h1>Select asset</h1>
        <div className="flex flex-row">
          {appData.appConfiguration &&
            appData.appConfiguration.assetList &&
            appData.appConfiguration.assetList.map(assetMapping => (
              <Card className="m-2">
                <Link to={`/trade/${assetMapping.asa1}/${assetMapping.asa2}`} key={`/trade/${assetMapping.asa1}/${assetMapping.asa2}`}>
                  <button type="button" className="btn btn-primary btn-lg px-4">
                    {assetMapping.name}
                  </button>
                </Link>
              </Card>
            ))}
        </div>
      </Card>
    </>
  );
}
