"use client";
import * as React from 'react';
import styled from 'styled-components';

interface IButton {
    text: string,
}
const Button = styled.button`
padding: 1rem;
background-color: ${props => props.theme.colors.gunMetal};

color: white;

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
const ButtonCustom = ({text}:IButton) => {
    return(
        <Button>
            {text}
        </Button>
    )
}

export default ButtonCustom