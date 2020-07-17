import React from 'react';
import './factilApp.css';
import AddFacture from '../Components/AddFacture/AddFacture';
import FactureList from '../Components/FactureList/FactureList';
import TotalFacture from '../Components/TotalFacture/TotalFacture';
import OptionsFacture from '../Components/OptionsFacture/OptionsFacture';
import EditFactures from '../Components/EditFactures/EditFactures'
import { FactureContext, FactureProvider } from '../Context/FactureContext';




function FactilApp() {
  const {editModeEnabled} = React.useContext(FactureContext)
  return (
    <div className="factilApp">
    <FactureProvider>
      <header className="factilApp-header">

      </header>
      <div className="factures-container">
      {editModeEnabled ? <EditFactures/> :
      <span>
      <OptionsFacture/>
      <AddFacture/>
      <TotalFacture/>
      <FactureList/>
      </span>
    }
      </div>
    </FactureProvider>
    </div>
  );
}

export default FactilApp;
