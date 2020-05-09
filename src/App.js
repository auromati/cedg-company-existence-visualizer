import React, { useState, useEffect } from 'react';
import './App.css';
import { Histogram } from './components/graphs/histogram/histogram';
import { survivalDataService } from './services/survival-data-service';

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
      </div>
    </SurvivalDataContext.Provider>
  );
}

export default App;
