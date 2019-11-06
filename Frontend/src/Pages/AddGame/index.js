import React, {useState, useMemo } from 'react'; 
import './style.css';
import api from '../../services/api';

import { ButtonToolbar, ToggleButtonGroup , ToggleButton } from 'react-bootstrap';

import camera from '../../assets/camera.svg';

export default function ({history})  {

    const [name, setName] = useState('');  
    const [catgs, setCatgs ] = useState(''); 
    const [desc, setDesc ] = useState('');     
    const [price, setPrice ] = useState(''); 
    const [minRequirement, setMinRequirement] = useState('');
    const [recRequirement, setRecRequirement] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [highlight, setHighlight] = useState(''); 

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    }, [thumbnail])

    async function handleSubmit(event) {                
        event.preventDefault();
        
        const data = new FormData();
        data.append("name", name);
        data.append('thumbnail',thumbnail);
        data.append('desc', desc);
        data.append('minReq', minRequirement);
        data.append('recReq', recRequirement);
        data.append('catgs', catgs);
        data.append('price', price);        
        data.append('highlight', highlight)
        console.log(...data);             

        const response = await api.post('/addGames', data); 

        console.log(response.data); 
        //const response = await api.post('/addGames', data);        
        
        console.log('teste2'); 
        alert('jogo salvo');
        window.location.reload();
 
    } 
    

    return (

        <>
        <div id="addGamePage">
            
            <div className="container_login">               
                <div className="content_box">                    
                    <div className="addGame">                        
                        <h3> Admin Zone </h3>
                         <span id="create_acount">  Adicionar um jogo  </span>
                            <form onSubmit={handleSubmit}>

                                <label
                                    id="thumbnail"
                                    style={{ backgroundImage: `url(${preview})` }}
                                    className={thumbnail ? 'has-thumbnail' : ''}>                                        
                                    <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                                    <img src={camera} alt="Select img" />
                                    
                                </label>

                                <label htmlFor="gameName"> Nome do jogo </label>
                                <input                                 
                                    id="gameName" 
                                    placeholder="Nome do jogo" 
                                    value={name} 
                                    onChange={event => setName(event.target.value)}/>

                                <label htmlFor="catgs"> Categoria </label>                                
                                <select name="catgs" onChange={event => setCatgs(event.target.value)}>
                                    <option value="none" >Selecione uma categoria</option>
                                    <option value="Ação"  >Ação</option>
                                    <option value="Aventura" >Aventura</option>
                                    <option value="Race" >Corrida</option>
                                </select>                            

                                <label htmlFor="desc"> Descrição do jogo </label>
                                <textarea                                      
                                    rows="10" 
                                    cols="40" 
                                    placeholder="Escreva um breve comentário  sobre o jogo" 
                                    value={desc} 
                                    onChange={event => setDesc(event.target.value)}/> 

                                <label htmlFor="requirements"> Requisitos </label>
                                <div className="reqContainer">
                                    <textarea 
                                        name="minReq" 
                                        rows="10" cols="40" 
                                        placeholder="Requisitos minimos" 
                                        id="requisitosMin" value={minRequirement} 
                                        onChange={event => setMinRequirement(event.target.value)}/>

                                    <textarea 
                                        name="recomReq" 
                                        rows="10" cols="40" 
                                        placeholder="Requisitos Recomendados" 
                                        id="requisitosRec" value={recRequirement} 
                                        onChange={event => setRecRequirement(event.target.value)}/>

                                </div> 

                                

                                <label htmlFor="price"> Valor </label>
                                <input 
                                    type="text" 
                                    name="price" 
                                    id="" 
                                    placeholder="R$ 00,00" 
                                    value={price} 
                                    onChange={event => setPrice(event.target.value)}/>
                                <span> Aparecer como destaque na página inicial? </span>
                                <div id="highlightForm">

                                    <ButtonToolbar>

                                        <ToggleButtonGroup type="radio" name="highlightOnOff" defaultValue={false} >

                                            <ToggleButton value={false} onChange={event => setHighlight(event.target.value)}> Não </ToggleButton>
                                            <ToggleButton value={true} onChange={event => setHighlight(event.target.value)}> Sim </ToggleButton>
                                            
                                        </ToggleButtonGroup >

                                    </ButtonToolbar>

                                </div>
                               
                                
                                <button className="confirmation_btn" type="submit">
                                    <span className="button_text"> Adicionar jogo </span>                                    
                                </button>

                            </form>       

                    </div>
                </div>                    
            </div>
        </div>
        </>

    );
}