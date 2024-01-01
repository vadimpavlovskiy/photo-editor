import { styled } from "styled-components"

const MainStyled = styled.main`
margin: 1rem;
`

export const MainLayout = ({children}:any) => {
    return (
        <MainStyled>{children}</MainStyled>
    )
}