import React, {useState, useContext} from 'react';
import { FactureContext } from '../../Context/FactureContext';
import './styles.css';

const AddFacture = () => {

    const {contextValue} = useContext(FactureContext)

    const [newFactureTitle, setNewFactureTitle] = useState('')
    const [newFactureCost, setNewFactureCost] = useState('')

    //  const factureObjectValid = () => {
    //     const titleValid = newFactureTitle && newFactureTitle.split('').find(char => char !== ' ')
    //     const costValid = newFactureCost && Number.parseFloat()

    //      return titleValid && costValid
    //  }
    
    const clearForm = () => {
        setNewFactureCost('')
        setNewFactureTitle('')
    }

    return (
        <div className='add-facture-container'>
        <h2>Combien pourriez-vous économiser?</h2>
        <h6>Entrez une liste de dépenses mensuelles et décocher un élément pour estimer vos éventuels économies quotidiennes, hebdomadaires, mensuelles et annuelles.</h6>
        <input className='add-facture-form-control form-control'
        placeholder='Entrez un titre de facture'
        type='text'
        value={newFactureTitle}
        onChange={(e) => setNewFactureTitle(e.target.value)}></input>
        <input className='add-facture-form-control form-control'
        placeholder='Entrez le montant de la facture'
        type='number'
        value={newFactureCost}
        onChange={(e) => setNewFactureCost(e.target.value)}></input>
        <FactureContext.Consumer value={contextValue}>
            { ({updateFactures}) => (
                <button
                className='add-facture-form-control btn btn-primary'
                onClick={() => {updateFactures({
                    title: newFactureTitle,
                    monthlyCost: newFactureCost
                    })
                    clearForm()
                }}>Ajouter la facture
                </button>
            )
        }
        </FactureContext.Consumer>
        </div>
    );
}

export default AddFacture;
