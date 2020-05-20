import React, { useState, useEffect } from 'react';
import './App.css';
import { survivalDataService } from './services/survival-data-service';
import { PanelPkd } from './components/graphs/pkd/panelPkd';
import { Home } from './components/home/home';

import { Home } from './components/home/home';
export const SurvivalDataContext = React.createContext();


function App() {
  const [survivalData, setSurvivalData] = useState([]);

  useEffect(() => {
    survivalDataService.readSurvivalData().then(newSurvivalData => {
      setSurvivalData(newSurvivalData);
    });
  }, []);

  return (
    <SurvivalDataContext.Provider value={survivalData}>
      <div className="App">
        <Home></Home>
        </div>
    </SurvivalDataContext.Provider>
  );
}

export default App;
