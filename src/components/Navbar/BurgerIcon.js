import React, { useState } from 'react';
import styled from 'styled-components';
import { RightNav } from './RightNav';

const IconBurgerStyle = styled.div`
    width: 2rem;
    height: 2rem;
    
    margin-top: 18px;
    right: 20px;
    z-index: 200;
    display: none;

    @media (max-width: 768px){
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? '#254b62' : '#77abb7'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        color: #f2f2f2;

        &:nth-child(1) {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            trasform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({open}) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

export const BurgerIcon = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <IconBurgerStyle open={open} onClick={()=> setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </IconBurgerStyle>
            <RightNav open={open}/>
        </>
    )
}

