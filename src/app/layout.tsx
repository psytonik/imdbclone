import {Header, Navbar, SearchBox} from "@/components";
import React, { ReactNode } from "react";
import './global.css';
import Providers from "./Providers";

export const metadata = {
  title: 'Next JS new style ',
  description: 'Generated by Next.js',
}

export default function RootLayout({children}: { children: ReactNode }) {

  return (
    <html lang="en">
      <body>
        <Providers >
            <Header/>
            <Navbar/>
            <SearchBox/>
            {children}
        </Providers>
      </body>
    </html>
  )
}
