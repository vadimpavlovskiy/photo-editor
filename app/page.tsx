'use client'

import ButtonCustom from "./components/button/buttonComponent";
import { HeaderLayout } from "./layouts/header/headerLayout";
import { MainLayout } from "./layouts/mainLayout/mainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeaderLayout>
        <h1 style={{color: 'white'}}>Photo Editor</h1>
        <ButtonCustom type="file" text="Upload Image" />
      </HeaderLayout>
    </MainLayout>
  )
}
