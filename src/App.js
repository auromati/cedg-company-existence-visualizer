import React, { useState, useEffect } from 'react';
import './App.css';
import { Histogram } from './components/graphs/histogram/histogram';
import { survivalDataService } from './services/survival-data-service';
import { PanelPkd } from './components/graphs/pkd/panelPkd';

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
        <Histogram></Histogram>
        <PanelPkd></PanelPkd>
      </div>
    </SurvivalDataContext.Provider>
  );
}

export default App;
