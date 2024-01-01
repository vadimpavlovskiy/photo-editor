"use client";

import { BodyLayout } from "./layouts/body/bodyLayout";
import StyledComponentsRegistry from "./registry";
import { Theme } from "./theme/mainThene"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Theme>
      <html lang="en">
        <StyledComponentsRegistry>
          <BodyLayout>
            {children}
          </BodyLayout>
        </StyledComponentsRegistry>
      </html>
      </Theme>
  )
}
