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
                        <li>                    
                            <h4> Jogo 1 </h4>
                        </li>                   
                        <li>
                            <h4> Jogo 2 </h4>
                        </li>                   
                        <li>
                            <h4> Jogo 3 </h4>
                        </li>                   
                        <li>
                            <h4> Jogo 4 </h4>
                        </li>                   
                        <li>
                            <h4> Jogo 5 </h4>
                        </li>                   
                        <li>
                            <h4> Jogo 6 </h4>
                        </li>   
                    </ul>                    
                </div>
                
        </div>

        </>
    );
};