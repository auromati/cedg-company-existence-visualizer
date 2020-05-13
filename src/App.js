import React, { useState, useEffect } from 'react';
import './App.css';
import { Histogram } from './components/graphs/histogram/histogram';
import { survivalDataService } from './services/survival-data-service';
import { PanelPkd } from './components/graphs/pkd/panelPkd';
import { ShareholderController } from './components/graphs/durationByShareholder/shareholderController';
import { PlacesController } from './components/graphs/numOfPlaces/placesController';
import { LicencesController } from './components/graphs/numOfLicences/licencesController';
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
        <ShareholderController/>
        <PlacesController/>
        <LicencesController/>
      </div>
    </SurvivalDataContext.Provider>
  );
}

export default App;
