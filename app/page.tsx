'use client'

import ImageProvider from "./context/ImageContext";
import { BodyLayout } from "./layouts/body/bodyLayout";
import { HeaderLayout } from "./layouts/header/headerLayout";
import { ImageLayout } from "./layouts/imageLayout/imageLayout";
import { MainLayout } from "./layouts/mainLayout/mainLayout";

export default function Home() {
  return (
    <MainLayout>
        <ImageProvider>
          <HeaderLayout />
          <ImageLayout />
      </ImageProvider>
    </MainLayout>
  )
}
