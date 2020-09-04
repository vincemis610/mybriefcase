import React from 'react';
import styled from 'styled-components';
import { BurgerIcon } from './BurgerIcon';

const Nav = styled.nav`
    width: 100%;
    height: 80px;
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;

    .logo {
        padding: 8px 0;
        color: #f95959;
        font-weight: 600;
        font-size: 35px;
    }`;

export const NavbarMenu = () => {
    return (
        <Nav>
            <div className="logo">
                {'< VinceMis />'}
            </div>
            <BurgerIcon />
        </Nav>
    )
}
 