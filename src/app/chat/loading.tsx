'use client';

import styled from "styled-components";
import {LinearProgress} from "@mui/material";

export default function Loading() {
    return(
        <>
            <LoaderWrapper>
                <LinearProgress color="primary" />
            </LoaderWrapper>
        </>
    )
}

const LoaderWrapper = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1301,
    width: '100%'
});