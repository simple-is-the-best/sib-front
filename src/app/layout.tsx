import '../../styles/globals.css'
import React  from "react";
import {Noto_Sans_KR} from "next/font/google";
import Layout from "../components/shared/layout/Layout";

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

interface IProps {
    children: React.ReactNode;
}

const sansKR = Noto_Sans_KR({subsets: ['latin'], weight: '500'});

export default function RootLayout({children}: IProps) {
    return (
        <html lang="en">
            <body className={sansKR.className}>
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    )
}
