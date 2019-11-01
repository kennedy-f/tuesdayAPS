import React, {useState, useEffect} from 'react'; 
import './style.css';
import api from '../../services/api';

export default function ({history})  {

    const [username, setUsername] = useState('');
    const [createusername, setCreateUsername] = useState('');
    const [password, setPassword] = useState('');  
    const [email, setEmail ] = useState(''); 
    const [createPassword, setCreatePasword ] = useState(''); 
    const [testPassword, setTestPassword ] = useState(''); 

    var isCompleted = 0; 

    useEffect (() => {
        if (createusername === '' && email !== ''){
            document.querySelector('#nameLabel').style.display = 'initial'; 
            isCompleted--; 
        } else {
            document.querySelector('#nameLabel').style.display = 'none';
            isCompleted++;              
        }
        if (email === '' && testPassword !== '') {
             document.querySelector('#emailLabel').style.display = 'initial'; 
             isCompleted--; 
        } else {
            document.querySelector('#emailLabel').style.display = 'none'; 
            isCompleted++; 
        }
        
    })


    if (localStorage.getItem('username')){        
        history.push('/myAccount') 
    }

    async function handleSubmit(event) {
        event.preventDefault();
        

        const response = await api.post('/userLogin', { username, password});
        
        var userInput = document.querySelector('#userNotFound') ; 
        var passInput = document.querySelector('#wrongPassLogin') ;         

        if (response.data == null ){
            console.log('usuario não existe \n response.data = ' + response.data); 
        } else{                
            const { _id } = response.data ;       
                
                
            if (username === ''){
                console.log('usuario vazio'); 
                    
            } else if (response.data.erro === 'UserDontExist'){
                console.log('usuario não encontrado')
                userInput.style.display = 'initial';                    

            } else if (password === '') {
                console.log('senha vazia')
            } else if (response.data.erro === 'wrongPassword') {
                console.log('senha errada')
                passInput.style.display = 'initial'; 
            } else {     
                localStorage.setItem('user', _id);
                localStorage.setItem('username', username);    
                window.location.reload();
                setTimeout(() => {
                history.push('/') 
                }, 1000)
                    
                    
            }        
        }     

    }

    useEffect(() => {

    })

    function checkPassword(){
        var a = document.querySelector('#createPassword')
        var b = document.querySelector('#passwordConfirm')

        var enableButton = document.querySelector('#createButton');
        const span3 = document.querySelector('#wrongPassword'); 

       if (a.value !== '' && b.value !== '' && isCompleted !== 0){            
            if (a.value === b.value  ){
                enableButton.removeAttribute('disabled');
                span3.style.display = "none";
            } else {
                enableButton.setAttribute('disabled', 'true');
                span3.style.display = 'initial'; 
            }
        } else {
            enableButton.setAttribute('disabled', 'true');
            
        }
       
    }

    async function handleCreate(event) {
        event.preventDefault();        
                   
        const response = await api.post('/createUser', { username: createusername, email, password: createPassword})
        alert('Conta criada com sucesso')

        const { _id } = response.data; 
        localStorage.setItem('user', _id); 
        localStorage.setItem('user', username); 

        setTimeout(() => {
            history.push('/');
        }, 2000); 
    }

    return (

        <>
        <div id="loginPage">

            
            <div className="container_login">
                <div className="content_login">
                    <h1> </h1>
                </div>
                <div className="content_box">
                    <div className="login">
                        <form onSubmit={handleSubmit}>
                            
                                <label htmlFor="username"> Nome de Usuario  </label>
                                <input 
                                    type="text" 
                                    name="username" 
                                    id="user" 
                                    placeholder="usuario"
                                    value={username}
                                    onChange={event => setUsername(event.target.value)} 
                                    />
                                <span id="userNotFound" className="loginStatus"> Usuário não encontrado </span>
                                <span id="empty" className="loginStatus"> Usuário Vazio </span>
                                <label htmlFor="password"> Senha </label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="senha"
                                    value={password} 
                                    onChange={event => setPassword(event.target.value)}
                                    />
                                <span id="wrongPassLogin" className="loginStatus"> Senha errada </span>
                                <button type="submit" className="confirmation_btn" >
                                    
                                    <span className="button_text"> Entrar </span>
                                    
                                </button>                       

                        </form>
                    </div>
                    <div className="createAccount">
                        
                        <h3> Ainda não é cadastrado </h3>
                        <span id="create_acount">  Crie sua conta  </span>
                            <form onSubmit={handleCreate}>                     
                                <label htmlFor="createUserLogin" id="nameLabel"> Campo obrigátorio * </label>
                                <input id="createUserLogin"type="text" placeholder="Nome de Usuario" value={createusername} onChange={event => setCreateUsername(event.target.value)}/>
                                <label htmlFor="createEmail" id="emailLabel"> Campo obrigátorio * </label>
                                <input id="createEmail"type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}/>                        
                                <input id="createPassword" type="password" placeholder="Senha" value={testPassword} onChange={event => setTestPassword(event.target.value)} />
                                <input id="passwordConfirm" type="password" placeholder="Confirme a senha" value={createPassword} onChange={event => setCreatePasword(event.target.value)} onMouseOver={checkPassword}/>
                                <span id="wrongPassword" className="wrongCamp"> as senha não coincidem </span>
                                <button id="createButton"type="submit" className="confirmation_btn" disabled>
                                    <span className="button_text"> Crie sua conta</span>
                                </button>
                            </form> 
                    </div>

                </div>
                    
            </div>
        </div>
        </>

    );
}
