import { styled } from "styled-components"

const BodyStyled = styled.body`
margin: 0;
padding: 0;

background-color: ${props => props.theme.colors.gunMetal}

`

export const BodyLayout = ({children}:any) => (
    <BodyStyled>{children}</BodyStyled>
)