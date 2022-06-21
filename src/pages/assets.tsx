import { useContext } from 'react';
import React, { useState } from "react";
//import LandingPage from '../components/LandingPage';
//import NavBar from '../components/NavBar';
import { AppContext } from '../contexts/app-context';
import { TabView, TabPanel } from 'primereact/tabview';
//import GridLayout from '../components/GridLayout';
import Header from '../components/Header';


export default function Home() {
  const appData = useContext(AppContext);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Header />

      <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
        <TabPanel header="Assets">
          Account Balance
        </TabPanel>
        <TabPanel header="Withdrawal">
          Content II
        </TabPanel>
        <TabPanel header="Deposit">
          Content III
        </TabPanel>
      </TabView>
    </>
  );
}
