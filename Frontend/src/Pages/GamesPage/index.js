import React, {useEffect, useState} from 'react'

import api from  '../../services/api'; 

import './style.css'

export default function GamePage(game_id){

    const [game, setGame] = useState(''); 

    useEffect(() => {

        async function getGame(){
            const response = await api.get('/game', {_id : game_id}); 
            setGame(response.data); 
        }

        getGame(); 

    }, [game_id])
    

    return(
        <div className="gamePage">

            <h1> TESTE </h1>
            <img src="" alt="" className="gameImage"/>
            <h1> {game.name} </h1>
        </div>
    )
}