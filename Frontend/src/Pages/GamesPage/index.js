import React, {useEffect, useState} from 'react'

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

    function buyGame(){
        if(_id){
            console.log(_id._id)
            window.location = 'buygame?_id=' + _id._id; 
        }
    }

    useEffect (() => {
        function showButton(){
            if (localStorage.getItem('_id') === '5dc89e6dcc9f4c4e60238095'){ 
                var adminButton = document.querySelector('#adminButton');
                adminButton.style.display = 'initial'; 
            }
        }
        showButton(); 

    })

    function editGame(){
        window.location = 'edit?_id=' + _id._id; 
    }

    
    

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
            <div className="buttonArea">
                <div></div>                
                <button type="button" id="buyButton" onClick={buyGame} > Comprar </button>
                <button type="button" id='adminButton' onClick={editGame}> Editar jogo </button>
            </div>
        </div>
    )
}