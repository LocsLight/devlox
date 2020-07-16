import React, {useContext} from 'react';
import { FactureContext } from '../../Context/FactureContext';
import './styles.css';

const EditFactures = () => {
    const {factures, setEditModeEnabled, editFacture, deleteFacture} = useContext(FactureContext)
    return (
        <div className='edit-factures-container'>
        <h6 className='edit-mode-done-btn' onClick={() => setEditModeEnabled(false)}>
        J'ai fini !
      </h6>
      {factures.map((facture, factureIndex) => {
          return(

              <div className='edit-factures-content'>
              <input className='edit-bill-cost-input'
              type='number'
              value={facture.monthlyCost}
              onChange={(e) => editFacture({
                title: facture.title,
                enabled: facture.enabled,
                monthlyCost: e.target.value
              })}></input>
              <h6 onClick={() => deleteFacture(facture)} className='delete-button'>SUPPRIMER</h6>
              </div>
          )
      })}
        </div>
    );
}

export default EditFactures;
