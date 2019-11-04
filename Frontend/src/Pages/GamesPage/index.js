import React, {useEffect, useState} from 'react'
import qs from 'query-string'; 

import api from  '../../services/api'; 

import './style.css'



export default function (props){
    
    const thePageUrl = window.location.href;   

    const parsed = qs.parseUrl(thePageUrl); 

    const _id = parsed.query; 

    console.log(parsed); 

    console.log(_id);



    
    const [game, setGame] = useState([]); 
    
    


    useEffect(() => {

        async function getGame(){
            const response = await api.get('/game', {params : _id}); 
            setGame(response.data); 
            console.log(response.data);
        }

        getGame(); 

    }, [thePageUrl])

    
    

    return(
        <div className="gamePage">            
            {game.map(games => (
                <div className="gamepage_container">
                    <div className="game_image">
                        <img src={games.thumbnail_url} alt="" srcset=""/>
                    </div>
                    <div className="gamepage_content">
                        <h1> {games.name} </h1>

                        <p> {games.desc} </p>
                        <h3> Requisitos </h3>
                        <div className="gameRequirements">
                            <p> {games.requirements} </p>
                        </div>

                    </div>
                </div>

            ))}
            
        </div>
    )
}