import React from 'react';
import {FactureProvider} from '../Applications/Factil/src/Context/FactureContext';
import FactilApp from '../Applications/Factil/src/App/factilApp';
import bgFactil from '../../img/bgFactil.jpg';


const Projets = () => {
    let imgFactil ={
        background: `linear-gradient(to right, #faea3d93, #6dd16098),url(${bgFactil})` /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
    }
    return (
        <>
        <section data-aos='fade-right' className='left-content'>
*                
                    <h1  className='page-title'>Projet 1</h1>
                    <h2 className='page-subtitle'>Un gestionnaire de budget</h2>
                    <p>Le fonctionnement est simple:</p>
                    <p>Entrez une liste de dépenses mensuelles et décocher un élément pour estimer vos éventuels économies quotidiennes, hebdomadaires, mensuelles et annuelles.</p>

                
        </section>
        <section style={imgFactil} className='right-content right-bg'>
            <div>
                <FactureProvider>
                <FactilApp />
                </FactureProvider>,
            </div>
        </section>
        </>
    );
}

export default Projets;
