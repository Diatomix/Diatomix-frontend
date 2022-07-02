//import Header from '../components/Header';
//import BoundedLayout from '../components/GridLayout';
import { useContext } from 'react';
import LandingPage from '../components/LandingPage';
import NavBar from '../components/NavBar';
import { AppContext } from '../contexts/app-context';
import GridLayout from '../components/GridLayout';
import Header from '../components/Header';
import PlaceOrder from '../components/configurable/PlaceOrder';
import { useParams } from 'react-router-dom';
import arc0017Contract from '../scripts/algo/arc0017Contract';
import { AuthContext } from '../contexts/AuthContext';
import Offer from '../components/configurable/Offer';
import Bid from '../components/configurable/Bid';
import LoadAssetInfoEffect from '../effects/asset/LoadAssetInfoEffect';

export default function Home() {
  const appData = useContext(AppContext);
  const authContext = useContext(AuthContext);
  let params = useParams();
  const asa1Num = parseInt(params.asa1);
  const asa2Num = parseInt(params.asa2);

  let updated = false;
  if (appData.asa1 != asa1Num) {
    appData.asa1 = asa1Num;
  }
  if (appData.asa2 != asa2Num) {
    appData.asa2 = asa2Num;
  }
  if (updated) {
    appData.setAppData({ ...appData });
  }

  return (
    <>
      <Header />
      <div className="flex flex-row">
        <LoadAssetInfoEffect />
        <PlaceOrder className="col m-1"></PlaceOrder>
        <textarea className="col m-2" value={appData.orderTeal}></textarea>
        <textarea className="col m-2" value={JSON.stringify(appData.asa2Config)}></textarea>
        <div className="col m-2">{appData.asa1 && appData.asa2 && <Bid assetBuy={appData.asa1} assetSell={appData.asa2}></Bid>}</div>
        <div className="col m-2">{appData.asa1 && appData.asa2 && <Offer assetBuy={appData.asa1} assetSell={appData.asa2}></Offer>}</div>
      </div>
    </>
  );
}
