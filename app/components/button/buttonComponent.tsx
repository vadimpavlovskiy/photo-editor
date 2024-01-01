"use client";
import * as React from 'react';
import styled from 'styled-components';

interface IButton {
    text: string,
    type: 'button' | 'file'
}

const LabelStyled = styled.label`
background-color: ${props => props.theme.colors.gunMetal};

color: white;

display: flex;
align-items: center;
padding: 0.1rem 1rem;

border: 0.1px solid;
border-radius: 1rem;

transition: 0.5s;

cursor: pointer;
&:hover {
    background-color:  ${props => props.theme.colors.colombiaBlue};
    color: ${props => props.theme.colors.gunMetal};

    border: 0.1px solid;
}
`
const ButtonCustom = ({text, type}:IButton) => { // Basic Button Component
    return(
        <>
            <input type={type} id='button' hidden />
            <LabelStyled htmlFor="button">{text}</LabelStyled>
        </>
    )
}

export default ButtonCustom