//import Header from '../components/Header';
//import BoundedLayout from '../components/GridLayout';
import { useContext } from 'react';
// import LandingPage from '../components/LandingPage';
// import NavBar from '../components/NavBar';
import { AppContext } from '../contexts/app-context';
import GridLayout from '../components/GridLayout';
import Header from '../components/Header';

export default function Trading() {
  const appData = useContext(AppContext);
  return (
    <>
      <Header />
      <GridLayout layout="trading"></GridLayout>
    </>
  );
}
