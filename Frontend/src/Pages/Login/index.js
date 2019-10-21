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



    async function handleSubmit(event) {
        event.preventDefault();
        

        const response = await api.post('/userLogin', { username, password});
        
        
        

            if (response.data == null ){
                console.log('usuario não existe \n response.data = ' + response.data); 
            } else{

                
                const { _id } = response.data ;       
                
                localStorage.setItem('user', _id);
                if (username === ''){
                    console.log('usuario vazio'); 
                } else if (password === '') {
                    console.log('senha vazia')
                } else if (response.data.erro == 'wrongPassword') {
                    console.log('senha errada')
                } else {
                    history.push('/');
                }        
            }     

    }

    function checkPassword(){
        var a = document.querySelector('#createPassword')
        var b = document.querySelector('#passwordConfirm')

        if ( a.value !== '' && b.value !== ''){
           var enableButton = document.querySelector('#createButton'); 

            if (a.value == b.value){                
                enableButton.removeAttribute('disabled'); 
                console.log('senhas iguais')

            } else {
                enableButton.setAttribute('disabled','true'); 
                console.log('senha erradas')
            }
        }
    }

    async function handleCreate(event) {
        event.preventDefault();        
                   
        const response = await api.post('/createUser', { username: createusername, email, password: createPassword})
        alert('Conta criada com sucesso')

        const { _id } = response.data; 
        localStorage.setItem('user', _id); 

        setTimeout(() => {
            history.push('/');
        }, 2000); 
        

        
    }

    

    return (

        <>
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

                            <label htmlFor="password"> Senha </label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="senha"
                                value={password} 
                                onChange={event => setPassword(event.target.value)}
                                />
                            <button type="submit" className="confirmation_btn" >
                                
                                <span className="button_text"> Entrar </span>
                                
                            </button>                       

                       </form>
                   </div>
                   <div className="createAccount">
                       
                       <h3> Ainda não é cadastrado </h3>
                        <span id="create_acount">  Crie sua conta  </span>
                        <form onSubmit={handleCreate}>                     
                            <input type="text" placeholder="Nome de Usuario" value={createusername} onChange={event => setCreateUsername(event.target.value)}/>
                            <input type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}/>                        
                            <input id="createPassword" type="password" placeholder="Senha" value={testPassword} onChange={event => setTestPassword(event.target.value)} />
                            <input id="passwordConfirm" type="password" placeholder="Confirme a senha" value={createPassword} onChange={event => setCreatePasword(event.target.value)} onMouseOver={checkPassword}/>
                            <button id="createButton"type="submit" className="confirmation_btn" disabled>
                                <span className="button_text"> Crie sua conta</span>
                            </button>
                        </form> 
                   </div>

               </div>
                
           </div>
        </>

    );
}

/*
   <h2> ou </h2>

                <button id="facebook_btn">
                    <img src={Facebook_logo} alt="facebook_login" id="facebook_icon" />
                    <span> faça login pelo <strong> facebook </strong></span>
                </button>
                <button id="facebook_btn">
                    <img src={Google_logo} alt="facebook_login" id="facebook_icon" />
                    <span> faça login pelo <strong> Google </strong></span>
                </button>
*/