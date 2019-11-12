import React, {useEffect, useState} from 'react'; 

import qs from 'query-string'; 

import api from '../../services/api'; 

import './style.css';

export default function MyCart(){
    const logged = localStorage.getItem('username'); 
    const pageUrl = window.location.href; 
    
    const parsed = qs.parseUrl(pageUrl);

    const _id = parsed.query; 
    const id_game = _id; 
    const bag_id = localStorage.getItem('bag_id');
    
    const [game, setGame] = useState([]); 
    
    useEffect(() => {
        if (!logged){
            alert('vc não está logado');                        
            window.location.href = '/login'

        }
        async function getGame() {
            const response = await api.get('/game', { params: id_game }  );
            setGame(response.data);       
            
        }

        getGame();

    }, []);
    console.log(id_game);

    async function buyGame(){
        const user_id = localStorage.getItem('_id');
        const response = await api.put('/buygame', {_id, bag_id, id_game} );       
              
        const almostHave = response.data;      
        console.log('Response')   
        console.log(response.data); 
        console.log('AlmostHave')   
        console.log(almostHave); 
        if (almostHave.jogo === 'já comprado') {
            alert('Você já tem esse jogo '); 
            window.location.href = '/biblioteca'

        } else {
            alert('Jogo comprado com sucesso')
            window.location.href = '/biblioteca'
        }
    }

    

    

    return (
        <>

            <div id="buyPage">

                <div className="buyGame">
                    
                    {game.map(games => (
                        
                        <div className="buyGame-container" key={games._id}>
                            <h2> Olá <b> {localStorage.getItem('username')} </b> </h2>
                            <h1 id="buyGame-title"> Você está comprando <br/> <b> {games.name} </b> </h1>
                            <img src={games.thumbnail_url} alt=""/>                            
                            <div className="buyGame-button">
                                <button type="button" onClick={buyGame}>
                                    <span> Comprar por:  <b> R$ {games.price},00 </b> </span>
                                </button>
                                
                            </div>


                        </div>
                    ))}                    

                </div>

            </div>

        </>
    )
}

