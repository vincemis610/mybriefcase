import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Ul = styled.div`
    .list-col {
        color: #f2f2f2;
    }

    .active {
        color: #77abb7;
    }
    
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    .link-nav {
        text-decoration: none;
        padding: 18px 10px;
        font-weight: 600;
        font-size: 25px;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #e3e3e3;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        z-index: 100;
        .list-col {
            color: #254b62
        }
        .active {
            color: #77abb7;
        }
    }`;

export const RightNav = ({open}) => {
    return (
        <Ul open={open}>
            <NavLink activeClassName="active" to="/home" className="link-nav list-col">Home</NavLink>
            <NavLink activeClassName="active" to="/curriculum" className="link-nav list-col">Curriculum</NavLink> 
            <NavLink activeClassName="active" to="/projects" className="link-nav list-col">Projects</NavLink>
            <NavLink activeClassName="active" to="/blog" className="link-nav list-col">Blog</NavLink> 
        </Ul>
    )
}
