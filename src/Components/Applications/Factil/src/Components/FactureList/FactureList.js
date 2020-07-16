import React,{useContext} from 'react';
import './styles.css';
import { FactureContext } from '../../Context/FactureContext';



const FactureList = () => {
    const {factures, editFacture, setEditModeEnabled} = useContext(FactureContext)
    return (
        <div className='factures-container-list'>
            <h6 className='edit-factures-btn'
            onClick={() => setEditModeEnabled(true) }>Modifier</h6>
            {
                factures.map((facture, index) => {
                    return(
                        <div key={index} className='facture-list-content'>
                            <input type="checkbox"
                            className="form-check-input"
                            checked = {!facture.enabled}
                            onChange={() => editFacture({
                                title: facture.title,
                                monthlyCost: facture.monthlyCost,
                                enabled: !facture.enabled
                            })}>
                            </input>
                            <div className="facture-list-row-content">
                                {facture.title} - {facture.monthlyCost}€
                            </div>
                        </div>
                    )
                })
            }
            </div>
    );
};





export default FactureList;
