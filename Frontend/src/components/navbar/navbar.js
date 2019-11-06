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
                setUser('Fazer Login');
            }
        }
        changePage();
    }, [user])

    function removeUser(event){
        event.preventDefault();

        localStorage.removeItem('user');
        localStorage.removeItem('username');
        alert('deslogado com sucesso')
        window.location.reload();
        
    }      

    

    return (
        <>
            <div id="header">
                <ul >
                    <li> <a href="/"> Home </a> </li>                    
                    <li> <a href={pageToload}> Biblioteca </a> </li>
                    <li> <a href="/" onClick={removeUser}> Logout </a> </li>
                    
                    
                </ul>               
                <ul className="sacola">

                    
                    <span> 
                        <a href={pageToload} id=""> {notLogged} {user} </a>
                    </span>
                    

                </ul>
                
            </div>
            

        </>
    );
};
