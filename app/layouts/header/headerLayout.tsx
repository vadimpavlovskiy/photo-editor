import { CanvasContextType } from "@/app/@types/contextTypes/image"
import ButtonCustom from "@/app/components/button/buttonComponent"
import { CanvasContext } from "@/app/context/ImageContext"
import { useContext } from "react"
import { styled } from "styled-components"

const HeaderStyled = styled.header`
width: 100%;
height: 15%;
display: flex;

justify-content: space-between;
`

export const HeaderLayout = ({children}:any) => {
    
    const {uploadImage} = useContext(CanvasContext) as CanvasContextType;

    const setImage: React.ChangeEventHandler<HTMLInputElement> = (event) => { // This function handle user input and pass needfull data to context
        const target = event.target as HTMLInputElement;
        const image = target.files?.[0];

        console.log(image); // Just for debug 
        

        if(image !== undefined) {
            uploadImage({
                id: Math.random(),
                image: image
            })
        }
      };
    return (
        <HeaderStyled>
            <h1 style={{color: 'white'}}>Photo Editor</h1>
            <ButtonCustom onClick={setImage} type="file" text="Upload Image" />    
        </HeaderStyled>
    )
}