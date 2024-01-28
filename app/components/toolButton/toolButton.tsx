import { ITool } from "@/app/@types/contextTypes/tools"
import { IconType } from "react-icons"
import { styled } from "styled-components"



const ToolButtonStyled = styled.div<{active?: boolean}>`

display: flex;
align-items: center;
justify-content: center;
padding: 18px;
border: 1px solid ${props => props.theme.colors.teal};
background-color: ${props => !props.active || props.theme.colors.teal};
color: black;

border-radius: 10px;
cursor: pointer;

transition: 0.2s;
&:hover {
    background-color: ${props => props.theme.colors.lavander};
    color: ${props => props.theme.colors.gunMetal};
    border: 1px solid ${props => props.theme.colors.lavander};
}
`

export const ToolButton = ({Icon, size, active, onClick}:any) => {
    return (
        <ToolButtonStyled onClick={onClick} active={active} >
            <Icon size={size} />
        </ToolButtonStyled>
    )
}