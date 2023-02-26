'use client';

import styled from "styled-components";
import React from "react";
import {Inter} from "next/font/google";

export const metadata = {
    title: 'Error Page',
    description: 'Error Page',
}

interface IProps {
    error: Error;
    reset: () => void;
}

const inter = Inter({subsets: ['latin']});

export default function GlobalError ({error, reset}: IProps) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div>
                    {error.name}
                </div>
                <Button onClick={reset}/>
            </body>
        </html>
    )
}

const Button = styled.button``;

