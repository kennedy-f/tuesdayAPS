import React, { useEffect, useState } from 'react';

import qs from 'query-string';

import api from '../../services/api';

import './style.css';
//import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export default function EditUser({ history }) {
    const logged = localStorage.getItem('username');
    const _id = localStorage.getItem('_id');

    const [user, setUser] = useState([]);
    
    useEffect(() => {
        if (!localStorage.getItem('_id')) {
            alert('Não logado')
            history.push('/login')
        } 
    })

    

    useEffect(() => {   
        
        async function getUser() {
            const response = await api.get('/user',  {headers: {_id}});                       
            setUser(response.data);                    
            
            
        }   
        
        getUser();
        console.log(user); 
        
    },[logged]);
    

    //Dados do usuario pra serem editados daqui pra frente 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [actual, setActual] = useState('');
    const [firstPass, setFirstPass] = useState('');

    async function handleEdit(event) {

        event.preventDefault();        

        const response = await api.put('/editUser', { _id, username, password, email });
                 
        
       
        
        console.log(response.data);
        alert('Alterações feitas com sucesso'); 
        window.location.reload(); 

    }
    
    useEffect(() => {
        //checa se as senhas estão corretas
        if(actual === user.password){
            console.log('senhas iguais')
            document.querySelector('input#actual').style.border = 'solid #95f726 1px';
            document.querySelector('#pass1').disabled = false; 
            document.querySelector('#pass2').disabled = false; 
        } else if (actual !== '') {
            document.querySelector('input#actual').style.border = 'solid red 1px';            
            document.querySelector('#pass1').disabled = true;
            document.querySelector('#pass2').disabled = true; 
            document.querySelector('#editUserButton').disabled = true;
        } else {
            document.querySelector('input#actual').style.border = '';    
            document.querySelector('#pass1').disabled = true;
            document.querySelector('#pass2').disabled = true;                    
            document.querySelector('#editUserButton').disabled = false; 
        }

        if (firstPass !== '' && password !== '' && firstPass == password){
            document.querySelector('#editUserButton').disabled = false;            
        }

        

    }, [actual, password])

    
    return (
        
        <div id="editPage">      
            <div className="container_edit">
                <div className="content_box">
                    <div className="editUser">
                        <form onSubmit={handleEdit}>
                            <h1> Trocar dados usuario</h1>
                            <label htmlFor={user.username}> Nome de usuario </label>
                            <input type="text" defaultValue={user.username} id="nomedoUsuario" onChange={event => setUsername(event.target.value)} />
                            <label htmlFor={user.email}>Trocar email </label>
                            <input type="email"defaultValue={user.email} onChange={event => setEmail(event.target.value)} />
                            <label htmlFor={user.password}> Trocar senha</label>
                            <input type="password" placeholder="Senha Atual" id="actual" value={actual} onChange={event => setActual(event.target.value) }/>
                            <input type="password" className="newPasswords" id="pass1" placeholder="Senha" value={firstPass} onChange={event => setFirstPass(event.target.value) } disabled />
                            <input type="password" className="newPasswords" id="pass2" placeholder="Repita a senha" value={password} onChange={event => setPassword(event.target.value)} disabled/>                            
                            <button id="editUserButton" className="confirmation_btn" type="submit">
                                <span className="button_text" > Editar usuario </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>                                      
        </div>
  

        
    )
}

/*          <div id="editPage">

<div className="container_edit">
    <div className="content_box">
        <div className="editGame">
            {user.map(userDate => (
                <div key={userDate._id}>
                    <form onSubmit={handleEdit} >
                        <h1> Edição de usuario</h1>
                        <label htmlFor={userDate.username}> Nome do usuario </label>

                        <input
                            type="text"
                            defaultValue={userDate.username}
                            onChange={event => setUsername(event.target.value)} />

                        <button className="confirmation_btn" type="submit">
                            <span className="button_text"> Editar Jogo </span>
                        </button>
                    </form>
                </div>
            ))}
        </div>
    </div>
</div>
            </div >*/