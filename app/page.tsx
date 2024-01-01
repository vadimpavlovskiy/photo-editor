'use client'

import ButtonCustom from "./components/button/buttonComponent";
import { MainLayout } from "./layouts/mainLayout/mainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1 style={{color: 'white'}}>Photo Editor</h1>
      <ButtonCustom text="Upload Image" />
    </MainLayout>
  )
}
