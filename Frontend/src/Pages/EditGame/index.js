import React, { useEffect, useState } from 'react';

import qs from 'query-string';

import api from '../../services/api';

import './style.css';
import { ButtonToolbar, ToggleButtonGroup , ToggleButton } from 'react-bootstrap';

export default function MyCart({ history}) {
    const logged = localStorage.getItem('username');
    const pageUrl = window.location.href;

    const parsed = qs.parseUrl(pageUrl);

    const _id = parsed.query;
    const thisgame = _id;
    console.log(_id)
    const [game, setGame] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('_id') === '5dc89e6dcc9f4c4e60238095') {
            console.log('admin logado')
        } else {            
            history.go('-1')
            alert('Logue como administrador para ter acesso');
        }
    })

    useEffect(() => {
        if (!logged) {
            alert('vc não está logado');
            window.location.href = '/login'

        }
        async function getGame() {
            const response = await api.get('/game', { params: thisgame });
            setGame(response.data);
        }

        getGame();

    }, []);


    //Dados do jogo pra serem editados daqui pra frente 

    const [name, setName] = useState(''); 
    const [catgs, setCatgs] = useState(''); 
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [highlight, setHighlight] = useState('')


    async function handleEdit(event) {
        event.preventDefault();                 
        
        console.log(name); 

        const response = await api.post('/editGame', { _id, name, desc, catgs, price, highlight });         

        console.log(response.data); 

        
    }

   
    

    return (
        <>

            <div id="editPage">

                <div className="container_edit">
                    <div className="content_box">
                        <div className="editGame">
                            {game.map(games => (                        
                                <div key={games._id}>
                                    <form onSubmit={handleEdit} >
                                        <h1> Pagina de edição de jogo</h1>
                                        <label htmlFor={games.name}> Nome do jogo </label>
                                        <input 
                                        type="text" 
                                        defaultValue={games.name} 
                                        onChange={event => setName(event.target.value)}/>
                                        <label htmlFor={games.catgs}> Categoria </label>
                                        <select name="catgs" onChange={event => setCatgs(event.target.value)}>
                                            <option value={games.catgs} > {games.catgs} </option>
                                            <option value="Ação"  >Ação </option>
                                            <option value="Aventura" >Aventura </option>
                                            <option value="Race" >Corrida </option>
                                        </select>       
                                        <label htmlFor="desc"> Descrição </label>
                                        <textarea
                                            rows="10"
                                            cols="40"
                                            defaultValue={games.desc}                                    
                                            onChange={event => setDesc(event.target.value)} />                                                                          
                                        <label htmlFor="price"> Valor </label>
                                        <input
                                            type="text"
                                            name="price"
                                            id=""
                                            
                                            defaultValue={games.price}
                                            onChange={event => setPrice(event.target.value)} />
                                        
                                        <span> Aparecer como destaque na pagina inicial ?  </span>
                                        <span id="alerta">(se não marcar nenhum vai manter o valor antigo)</span>
                                        <div id='editHighlightForm'>
                                            <ButtonToolbar>
                                                <ToggleButtonGroup type="radio" name="highlightOnOff" defaultValue={games.highlight}>
                                                    <ToggleButton value={false} onChange={event => setHighlight(event.target.value)}> Não </ToggleButton>
                                                    <ToggleButton value={true} onChange={event => setHighlight(event.target.value)}> Sim </ToggleButton>
                                                </ToggleButtonGroup>
                                            </ButtonToolbar>
                                        </div>
                                        <button className="confirmation_btn" type="submit">
                                            <span className="button_text"> Editar Jogo </span>
                                        </button>
                                    </form>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

