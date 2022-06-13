//import Header from '../components/Header';
//import BoundedLayout from '../components/GridLayout';
import { useContext } from 'react';
import LandingPage from '../components/LandingPage';
import NavBar from '../components/NavBar';
import { AppContext } from '../contexts/app-context';
import GridLayout from '../components/GridLayout';
import Header from '../components/Header';
import PlaceOrder from '../components/configurable/PlaceOrder';

export default function Home() {
  const appData = useContext(AppContext);
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <PlaceOrder className="col m-2"></PlaceOrder>
        <div className="col m-2">&nbsp;</div>
        <div className="col m-2">&nbsp;</div>
      </div>
    </>
  );
}
