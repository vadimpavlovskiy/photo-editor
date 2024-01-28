import { CanvasContextType } from "@/app/@types/contextTypes/image"
import ButtonCustom from "@/app/components/button/buttonComponent"
import { ToolButton } from "@/app/components/toolButton/toolButton"
import { CanvasContext } from "@/app/context/ImageContext"
import { clearContext } from "@/app/functions/header/clearContext"
import { setImage } from "@/app/functions/header/setImage"
import { ChangeEvent, useContext } from "react"
import { styled } from "styled-components"
import { FaRegTrashCan } from "react-icons/fa6";


const HeaderStyled = styled.header`
width: 100%;
height: 15%;
display: flex;

justify-content: space-between;
`

export const HeaderLayout = ({children}:any) => {
    
    const {uploadImage, initCanvasImage, setObjects} = useContext(CanvasContext) as CanvasContextType;

    return (
        <HeaderStyled>
            <h1 style={{color: 'white'}}>Photo Editor</h1>
            <div style={{display: 'flex', gap: '2rem'}}>
                <ToolButton Icon={FaRegTrashCan} size={20} active={false} onClick={()=>clearContext(initCanvasImage, setObjects)} />
                <ButtonCustom onClick={(event:ChangeEvent<HTMLInputElement>) => setImage(event, uploadImage)} type="file" text="Upload Image" />    
            </div>
        </HeaderStyled>
    )
}