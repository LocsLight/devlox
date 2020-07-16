import React, {useContext} from 'react';
import { FactureContext } from '../../Context/FactureContext';
import './styles.css';

const OptionsFacture = () => {
    const {selectedCostInterval, setSelectedCostInterval} = useContext(FactureContext)
    return (
        <div className='interval-options-container'>

            <div className={selectedCostInterval === 'jour'? 'selected-interval' : 'interval'}
                onClick={(e) => setSelectedCostInterval(e.target.innerText)}>
                jour
            </div>

            <div className={selectedCostInterval === 'semaine'? 'selected-interval' : 'interval'}
                onClick={(e) => setSelectedCostInterval(e.target.innerText)}>
                semaine
            </div>

            <div className={selectedCostInterval === 'mois'? 'selected-interval' : 'interval'}
                onClick={(e) => setSelectedCostInterval(e.target.innerText)}>
                mois
            </div>

            <div className={selectedCostInterval === 'an'? 'selected-interval' : 'interval'}
                onClick={(e) => setSelectedCostInterval(e.target.innerText)}>
                an
            </div>
        
        </div>
    );
}

export default OptionsFacture;
