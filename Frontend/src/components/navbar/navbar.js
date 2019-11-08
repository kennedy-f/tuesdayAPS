import React, {useState, useEffect} from 'react';

import './Styles.css';


export default props => {   

    const [user, setUser] = useState(localStorage.getItem('username')); 

    const [pageToload, setPageToLoad] = useState(''); 
    var notLogged;

    useEffect (() => {
        function changePage(){
            if (user && user!== 'Fazer Login') {
                setPageToLoad('/biblioteca'); 
            }
            else {
                setPageToLoad('/login');
                setUser('Entrar');
            }
        }
        changePage();
    }, [user])

    function removeUser(event){
        event.preventDefault();

        localStorage.removeItem('_id');
        localStorage.removeItem('username');
        localStorage.removeItem('bag_id'); 
        alert('deslogado com sucesso')
        window.location.reload();
        
    }      

    

    return (
        <>
            <div id="header">

                <ul >
                    <li> <a href="/"> Home </a> </li>                    
                    <li> <a href={pageToload}> Biblioteca </a> </li>                    
                </ul>               

                <ul className="sacola">

                    <div>
                        <a href={pageToload} id=""> {notLogged} {user} </a>                        
                    </div>
                    
                    <div>
                        <a href="/" onClick={removeUser}> Sair </a>                                            
                    </div>     
                                  
                    
                </ul>                
            </div>
            

        </>
    );
};
