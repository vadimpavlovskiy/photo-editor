import { styled } from "styled-components"

const HeaderStyled = styled.header`
width: 100%;
height: 15%;
display: flex;

justify-content: space-between;
`

export const HeaderLayout = ({children}:any) => {
    return (
        <HeaderStyled>{children}</HeaderStyled>
    )
}