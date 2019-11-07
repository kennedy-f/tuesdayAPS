import React, {useEffect, useState} from 'react'

import {Button} from 'react-bootstrap'
import qs from 'query-string'; 

import api from  '../../services/api'; 

import './style.css'



export default function (props){
    const thePageUrl = window.location.href;

    const parsed = qs.parseUrl(thePageUrl);

    const _id = parsed.query;     
    
    const [game, setGame] = useState([]); 

    useEffect(() => {

        async function getGame(){

            const response = await api.get('/game', {params : _id}); 
            setGame(response.data); 
            console.log(response.data);
        }

        getGame(); 

    }, []);

    
    

    return(
        <div className="gamePage">            
            {game.map(games => (
                <div className="gamepage_container" key={games._id}>
                    <div className="game_image">
                        <img src={games.thumbnail_url} alt="" />
                    </div>
                    <div className="gamepage_content">
                        <h1> {games.name} </h1>

                        <div className="descGame">
                            <p> {games.desc} </p>
                        </div>

                        <div className="gameRequirements">
                            <h3> Requisitos </h3>
                            <div className="requirement_container">
                                <div className="requirementType">
                                    <h5> Minimo </h5>
                                    {games.minReq.map(requirement => (
                                        <div  key={requirement}>
                                            <p> {requirement} </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="requirementType">
                                    <h5> Recomendado </h5>
                                    {games.recReq.map(requirement => (
                                        
                                        <div key={requirement}>                                            
                                            <h4></h4>
                                            <p> {requirement} </p>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                        

                    </div>
                    

                </div>

            ))}
            <Button >
                Botão de comprar
            </Button>
        </div>
    )
}