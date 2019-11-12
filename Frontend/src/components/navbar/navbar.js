import React, {useState, useEffect} from 'react';

import './Styles.css';

import api from '../../services/api';

export default props => {   

    const [user, setUser] = useState([]); 
    const [state, setState] = useState(''); 

    const [pageToload, setPageToLoad] = useState(''); 
    var notLogged;

    const _id = localStorage.getItem('_id');

    useEffect(() => {

        async function getUser() {
            const response = await api.get('/user', { headers: { _id } });
            setUser(response.data);


        }

        getUser();
        console.log(user);

    }, []);

    useEffect (() => {
        function changePage(){
            if (localStorage.getItem('username') && user!== 'Fazer Login') {
                setPageToLoad('/userEdit'); 
                setState(user.username);
            }
            else {
                setPageToLoad('/login');
                setState('entrar');
            }
        }
        changePage();
    }, [user])

    useEffect(() => {
        if (localStorage.getItem('_id') === '5dc89e6dcc9f4c4e60238095'){
            var admButton = document.querySelector('#adminAdd')
            admButton.style.display = 'initial'
        }
    })

    function removeUser(event){
        event.preventDefault();
        if(!localStorage.getItem('_id')){

        } else{
            localStorage.removeItem('_id');
            localStorage.removeItem('username');
            localStorage.removeItem('user');
            localStorage.removeItem('lib_id'); 
            localStorage.removeItem('bag_id'); 
            
            alert('deslogado com sucesso')
            window.location.reload();
        }

        
    }      

    

    return (
        <>
            <div id="header">

                <ul >
                    <li> <a href="/"> Home </a> </li>                    
                    <li> <a href={pageToload}> Biblioteca </a> </li>                    
                    <li>
                        <div id="adminAdd">
                            <a href="/addGame"> Adicionar jogos </a>
                        </div> 
                    </li>
                    
                </ul>               

                <ul className="sacola">

                    <div>
                        <a href={pageToload} id=""> {notLogged} {state} </a>                        
                    </div>
                    
                    <div>
                        <a href="/" onClick={removeUser}> Sair </a>                                            
                    </div>     
                                  
                    
                </ul>                
            </div>
            

        </>
    );
};
