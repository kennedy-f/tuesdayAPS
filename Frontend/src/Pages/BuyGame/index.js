import React, {useEffect, useState} from 'react'; 

import qs from 'query-string'; 

import api from '../../services/api'; 

import './style.css';

export default function MyCart(){

    const pageUrl = window.location.href; 
    
    const parsed = qs.parseUrl(pageUrl);

    const _id = parsed.query; 
    const thisgame = _id; 
    
    const [game, setGame] = useState([]); 
    
    useEffect(() => {

        async function getGame() {
            const response = await api.get('/game', { params: thisgame }  );
            setGame(response.data);            
        }

        getGame();

    }, []);


    async function buyGame(){
        const user_id = localStorage.getItem('_id');
        console.log(user_id)
        const response = await api.put('/buygame',           
            { params :  _id }, 
            { headers : {'_id': user_id}}
            
            
        );     

        console.log(response.headers); 
        console.log(response.data); 
    }

    console.log(game);

    return (
        <>
            <div className="cartPage">
                {game.map(games => (
                    <div className="buyGame" key={games._id}>
                        <h1> {games.name} </h1>
                        <button type="button" onClick={buyGame}>
                            teste
                        </button>
                    </div>
                ))}
                



            </div>

        </>
    )
}

