import React, {useState, useEffect} from 'react'; 
import './style.css';
import api from '../../services/api';

export default function ({history})  {

    const [login, setLogin] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/login', { login });

        const { _id } = response.data

        localStorage.setItem('user', _id);

        history.push('/login');

    }


    return (


        <>
           <div className="container_login">
               <div className="content_login">
                   <h1> </h1>
               </div>
               <div className="content_box">
                   <div className="login">
                       <span> Usuario / email </span>
                       <input type="text" name="user" id="user" placeholder="usuario / e-mail"/>
                       <span> Senha </span>
                       <input type="text" name="password" id="password" placeholder="senha"/>
                       <button className="confirmation_btn" >
                           <span className="button_text" >
                               Entrar
                           </span>
                       </button>                       
                   </div>
                   <div className="createAccount">
                       <h3> Ainda não é cadastrado </h3>
                        <span id="create_acount">  Crie sua conta  </span>
                        <input type="text" placeholder="Nome de Usuario"/>
                        <input type="email" placeholder="Email" />
                        <input type="email" placeholder="Confirme o Email" />
                        <input type="password" placeholder="Senha" />
                        <input type="password" placeholder="Confirme a senha" />
                        <button className="confirmation_btn">
                            <span className="button_text"> Crie sua conta</span>
                        </button>
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