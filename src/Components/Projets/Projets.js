import React from 'react';
import {FactureProvider} from '../Applications/Factil/src/Context/FactureContext';
import FactilApp from '../Applications/Factil/src/App/factilApp';

const Projets = () => {
    return (
        <div className=" page factil-page">
            <h1>Gestionnaire de budget</h1>
            <div>
            <FactureProvider>
            <FactilApp />
            </FactureProvider>,
            </div>
        </div>
    );
}

export default Projets;
