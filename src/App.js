import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import { orginals, action,Romance, Horror,comdey,Dcoumentaries } from './url'



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={orginals} tilte="NetFlix Orginals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={Romance} title="Romance" isSmall />
      <RowPost url={Horror} title="Horror" isSmall />
      <RowPost url={comdey} title="Comdey" isSmall />
      <RowPost url={Dcoumentaries} title="Dcoumentaries" isSmall />
    </div>
  );
}

export default App;
