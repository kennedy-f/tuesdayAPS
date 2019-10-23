import React, { useState } from 'react';
import './style.css'; 
import api from '../../services/api';


import Game1 from '../../../src/assets/CapaForzaHorizon4Wivernz@2x.png'

export default function ({history}) {

    const [ game , setGame] = useState ([]); 

    
    return (
        <>
        <div className="side-bar">

            <div className="insidebar">
                <h2> Meus Jogos </h2>
                    <ul className="listinha ">  
                        
                    </ul>                    
                </div>
                
        </div>

        </>
    );
};