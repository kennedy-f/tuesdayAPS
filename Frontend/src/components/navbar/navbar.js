import React, {useState, useEffect} from 'react';

import './Styles.css';


export default props => {   

    const [user, setUser] = useState(localStorage.getItem('username')); 

    const [pageToload, setPageToLoad] = useState(''); 

    useEffect (() => {
        function changePage(){
            if (user) {
                setPageToLoad('/minhaConta'); 
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
                    <li> <a href={pageToload}> Minha conta </a> </li>
                    <li> <a href="/biblioteca"> Biblioteca </a> </li>
                    <li> <a href="/" onClick={removeUser}> Logout </a> </li>
                    
                    
                </ul>               
                <ul className="sacola">

                    
                    <span> <a href={pageToload}> {user} </a> </span>
                    

                </ul>
                
            </div>
            

        </>
    );
};
