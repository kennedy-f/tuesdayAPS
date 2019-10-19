import React, { useState } from 'react';
import './style.css'; 


import Game1 from '../../../src/assets/CapaForzaHorizon4Wivernz@2x.png'

export default props => {

    const [ game , setGame] = useState ([]); 

    
    return (
        <>
        <div className="sideContainer">

            <h1> Meus Jogos </h1>

            <ul className="listinha ">            
                    <li>                    
                    <h3> forza </h3>
                    </li>
                    <li>                    
                        <h3> forza </h3>
                    </li>
                    <li>                    
                        <h3> forza </h3>
                    </li>
                    <li>
                        <h3> forza </h3>
                    </li>
                    <li>
                        <h3> forza </h3>
                    </li>
                    <li>
                        <h3> forza </h3>
                    </li>

                    
            </ul>
                {game.every}
        </div>

        </>
    );
};