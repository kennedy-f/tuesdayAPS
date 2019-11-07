import React, {useEffect, useState} from 'react';

import api from '../../services/api'
import './style.css'; 

export default function () {  

    const user = localStorage.getItem('bag_id');     
   
    const [games, setGames] = useState([]); 

    if(!user) {
        alert('não logado'); 
        window.location.href = "/login"
    }

    useState(() => {
        async function getGames(){
            const response = await api.get('/bibliotecaTeste', {headers: {'_id' : user}});
            
            setGames(response.data);
            
            console.log(response.data); 
            
            
        }

        
        getGames();        
        
    },[])
    console.log(games);    
    
    return (
        <>
        
        <div id="libPage">
            <h2> Meus Jogos </h2>

                {games.map(game => (
                    <div key={game._id} className="gameLib">
                        <img src={game.thumbnail_url} alt=""/>
                        <div className="titleLib">
                            <h1 > {game.name} </h1>
                        </div>
                    </div>
                ))}
                             
            
        </div>
        

        </>
    );
};