import { useContext } from 'react';
import React, { useState } from "react";
//import LandingPage from '../components/LandingPage';
//import NavBar from '../components/NavBar';
import { AppContext } from '../contexts/app-context';
import { TabView, TabPanel } from 'primereact/tabview';
//import { Chart } from 'primereact/chart';
import { Card } from 'primereact/card';
//import GridLayout from '../components/GridLayout';
import Header from '../components/Header';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { AuthContext } from '../contexts/AuthContext';
import { useParams } from 'react-router-dom';


export default function Assets() {
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

  const [activeIndex, setActiveIndex] = useState(0);
  const [chartData] = useState({
    labels: ['A', 'B', 'C'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
});

const [lightOptions] = useState({
  plugins: {
      legend: {
          labels: {
              color: '#495057'
          }
      }
  }
});

  return (
    <>
      <Header />

      <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
        <TabPanel header="Assets">
          <Card>
            $6000
          </Card>
        </TabPanel>
        {/* <TabPanel header="Withdrawal">
          Withdrawal
        </TabPanel>
        <TabPanel header="Deposit">
          Wallet Addresses
        </TabPanel> */}
      </TabView>

      <div>
            <div className="card" style={{ height: 'calc(100vh - 145px)' }}>
                <DataTable key={appData.orderTeal} scrollable scrollHeight="flex">
                    <Column field="name" header="Assets"></Column>
                    <Column field="country.name" header="-"></Column>
                    <Column field="representative.name" header="-"></Column>
                    <Column field="status" header="Value"></Column>
                </DataTable>
            </div>
        </div>
    </>
  );
}
