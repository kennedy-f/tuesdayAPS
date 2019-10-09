import React from 'react';
import { slide as Menu } from 'react-burger-menu';

// Style 
import './Styles.css'; 

//icons 
import joystickIcon from '../../assets/icons8_controller_64px_1@2x.png'

//The navbar 
export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Home
      </a>

            <a className="menu-item" href="/laravel">
                Minha conta
      </a>

            <a className="menu-item" href="/angular">
                WishList
      </a>

            <a className="menu-item" href="/react">
                Buy
      </a>

            <a className="menu-item" href="/vue">
                Vcs que estão aí são tudo uns corno fodidos
      </a>

            <a className="menu-item" href="/node">
                teste
      </a>
        </Menu>
    );
};