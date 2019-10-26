import React from 'react';

import './Styles.css';


export default props => {   

    function removeUser(){
        localStorage.removeItem('user');
        alert('deslogado com sucesso'); 
    }
    

    return (
        <>
            <div id="header">
                <ul >
                    <li> <a href="/"> Home </a> </li>
                    <li> <a href="/login"> Minha conta </a> </li>
                    <li> <a href="/biblioteca"> Biblioteca </a> </li>
                    <li> <a href="/" onClick={removeUser}> Logout </a> </li>
                </ul>
            </div>

        </>
    );
};
