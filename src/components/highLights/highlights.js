import React from 'react';
import './styles.css';

import game1 from '../../../src/assets/CapaForzaHorizon4Wivernz.png'
import game2 from '../../../src/assets/FundoAssassinsCreedUnityGoldEditionELAMIGOSWivernz.png'

// <li> <img src={game1} alt="" /> </li> 
//<li> <img src={game1} alt="" /> </li>
function changeSlide(){
    alert('pegou');
}


export default props => {
    return (
        <>
            <div className="highlights">

                <div className="inHighLights">
                    <ul className="slide">
                            <li> 
                                <a href="" onClick={changeSlide}>                            
                                    <img src={game1} alt="" />                             
                                </a>
                            </li>

                            <li> 
                            <a href="" onClick={changeSlide}>
                                    <img src={game2} alt="" /> 
                                </a>
                            </li>
                    </ul>
                
                </div>        
                <div className="preview">
                    <ul>
                        <li>
                            <img src={game1} alt=""/>
                        </li>
                        <li>
                            <img src={game2} alt="" />
                        </li>                        
                    </ul>
                    <ul>
                        <li>
                            <img src={game1} alt="" />
                        </li>
                        <li>
                            <img src={game2} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};