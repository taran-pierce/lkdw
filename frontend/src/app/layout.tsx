'use client'

// import type { Metadata } from "next";
import { Suspense } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ApolloProvider } from "@apollo/client";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { fira } from '../styles/fonts';
import Header from "../components/Header";
import Container from "../components/Container";
import client from '../apollo';
import Analytics from '../components/Analytics';
import { MenuStateProvider } from "../utils/useMenu";

import "./globals.css";

// TODO should refactor where I can put this back in
// same for nprogress
// did it for making this 'use client' to use Apollo
// export const metadata: Metadata = {
//   title: "LKDW",
//   description: "Storefront for assorted merchandise",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
        <body className={`${fira.className}`}>
          <Analytics />
          <Suspense>
            <ProgressBar 
              height="6px"
              color="#fff"
              shallowRouting
            />
          </Suspense>
          <ApolloProvider client={client}>
            <MenuStateProvider>
              <Header />
              <Container>
                {children}
              </Container>
            </MenuStateProvider>
          </ApolloProvider>
          <SpeedInsights />
        </body>
    </html>
  );
}
