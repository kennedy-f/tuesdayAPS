import React, {useEffect, useState} from 'react';

import api from '../../services/api'
import './style.css'; 
import downloadImage from '../../assets/DownloadButton.png'; 
import downloadImage2 from '../../assets/DownloadButton2.png'; 
 
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
            
            if(response.data.length !== 0){                                
                console.log('não tá fechado')
                setGames(response.data);                
            }
        }        
        getGames();         
    },[])    

    useEffect(() => {
        if (!games) {
            alert('Biblioteca Vazia');

        }
    })

    function downloadGame(game){
        alert('Download inciado '+ game);         
    }
   
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
                        <div className="buttonContainer">
                            <button onClick={(event => downloadGame(game.name))}> <img src={downloadImage} alt="Download Button"/> </button>
                        </div>
                    </div>
                ))}
                             
            
        </div>
        

        </>
    );
};